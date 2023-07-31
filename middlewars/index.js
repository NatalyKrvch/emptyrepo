const validateBody = require("./validateBody");
const isValidIdProduct = require("./isValidIdProduct");
const isValidIdCatalog = require("./isValidIdCatalog");
const authenticate = require("./authenticate");
// const upload = require("./upload");
// const {
//   uploadCloudProduct,
//   uploadCloudCatalog,
// } = require("./uploadCloudinary");
const { uploadAzureProduct, uploadAzureCatalog } = require("./uploadAzureBLOB");


module.exports = {
  validateBody,
  isValidIdProduct,
  isValidIdCatalog,
  authenticate,
  // upload,
  uploadAzureProduct,
  uploadAzureCatalog,
};
