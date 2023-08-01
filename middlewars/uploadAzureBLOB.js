const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const { HttpError } = require("../helpers");
const MulterAzureStorage =
  require("multer-azure-blob-storage").MulterAzureStorage;
const { AZURE_STORAGE_ACCOUNT, AZURE_STORAGE_ACCESS_KEY } = process.env;

const nameLogic = (req, file) => {
  console.log(file.originalname);
  const extension = file.originalname.split(".").pop();
  return `${uuidv4()}.${extension}`;
  // return file.originalname;
};

const contentLogic = (req, file) => {
  console.log(file);
  return file;
};

const containerNameLogic = (req, file) => {
  let currentFolder;
  switch (file.fieldname) {
    case "productCoverURL":
      currentFolder = "product-covers";
      break;
    case "productPhotoURL":
      currentFolder = "product-photos";
      break;
    case "catalogCoverURL":
      currentFolder = "catalog-covers";
      break;
    case "catalogFileURL":
      currentFolder = "catalog-files";
      break;
    default:
      break;
  }
  return currentFolder;
};

const resolveContainerName = (req, file) => {
  return new Promise((resolve, reject) => {
    const blobName = containerNameLogic(req, file);
    resolve(blobName);
  });
};

const resolveBlobName = (req, file) => {
  return new Promise((resolve, reject) => {
    const blobName = nameLogic(req, file);
    resolve(blobName);
  });
};

// const resolveMetadata = (req, file) => {
//     return new Promise((resolve, reject) => {
//         const metadata = yourCustomLogic(req, file);
//         resolve(metadata);
//     });
// };

const resolveContentSettings = (req, file) => {
  return new Promise((resolve, reject) => {
    const contentSettings = contentLogic(req, file);
    resolve(contentSettings);
  });
};

const azureStorage = new MulterAzureStorage({
  connectionString:
    "DefaultEndpointsProtocol=https;AccountName=svitsvitlastorage;AccountKey=1dEx4TLdfamtJeO6q7AG8K11tQObHUw3ZoCKOo8OVspKUp2ICp1xVUk54v/NVasFB6TY3QFOhfBn+ASt+p/Pow==;EndpointSuffix=core.windows.net",
  // accessKey:
  //   "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-07-28T15:53:59Z&st=2023-07-28T07:53:59Z&spr=https&sig=wjCfbAwc8LBPjfvIcELcOO2iulyTL3LMrZDRk7XwQ%2BE%3D",
  // accountName: AZURE_STORAGE_ACCOUNT,
  containerName: resolveContainerName,
  blobName: resolveBlobName,
  // metadata: resolveMetadata,
  contentSettings: resolveContentSettings,
  containerAccessLevel: "blob",
  urlExpirationTime: 60,
});

function photoFilter(req, file, cb) {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(
      HttpError(
        415,
        "Unsupported image format. Choose file with extention jpeg or png"
      )
    );
  }
}
function fileFilter(req, file, cb) {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(
      HttpError(415, "Unsupported image format. Choose file with extention pdf")
    );
  }
}

const uploadAzureProduct = multer({
  storage: azureStorage,
  fileFilter: photoFilter,
});

const uploadAzureCatalog = multer({
  storage: azureStorage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      photoFilter(req, file, cb);
    } else {
      fileFilter(req, file, cb);
    }
  },
});

const uploadAzureProductMiddleware = (req, res, next) => {
  uploadAzureProduct.fields([
    { name: "productCoverURL", maxCount: 1 },
    { name: "productPhotoURL", maxCount: 8 },
  ])(req, res, (err) => {
    if (err) {
      return next(err);
    }

    req.files.productCoverURL &&
      (req.body.productCoverURL =
        req.files.productCoverURL[0].url.split("?se=")[0]);
    req.files.productPhotoURL &&
      (req.body.productPhotoURL = req.files.productPhotoURL.map(
        ({ url }) => url.split("?se=")[0]
      ));
    const PhotoURL = req.body.productPhotoURL || [];
    const PhotoUrlOld = req.body.productPhotoUrlOld
      ? JSON.parse(req.body.productPhotoUrlOld)
      : [];
    req.body.productPhotoURL = [...PhotoURL, ...PhotoUrlOld];
    delete req.body.productPhotoUrlOld;
    next();
  });
};

const uploadAzureCatalogMiddleware = (req, res, next) => {
  uploadAzureCatalog.fields([
    { name: "catalogCoverURL", maxCount: 1 },
    { name: "catalogFileURL", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      return next(err);
    }
    req.files.catalogCoverURL &&
      (req.body.catalogCoverURL =
        req.files.catalogCoverURL[0].url.split("?se=")[0]);
    req.files.catalogFileURL &&
      (req.body.catalogFileURL =
        req.files.catalogFileURL[0].url.split("?se=")[0]);
    next();
  });
};
module.exports = {
  uploadAzureProduct: uploadAzureProductMiddleware,
  uploadAzureCatalog: uploadAzureCatalogMiddleware,
};
