const { HttpError, ctrlWrapper } = require("../helpers");
const { Catalog } = require("../models/catalog");

const listCatalogs = async (req, res) => {
  // --- pagination ---
  const { page = 1, per_page = 8, catalogName } = req.query;
  const skip = (page - 1) * per_page;
  let currentQuery = {};
  if (
    catalogName !== undefined &&
    catalogName !== "null" &&
    catalogName !== ""
  ) {
    currentQuery = { catalogName: { $regex: catalogName, $options: "i" } }; ;
  }
  const answer = await Catalog.find(currentQuery, "-__v", { skip, limit:per_page });
  const count = await Catalog.find(currentQuery);
  res.json({ data: answer, total: count.length });
};

const addCatalog = async (req, res) => {
  const answer = await Catalog.create({ ...req.body });
  res.status(201).json(answer);
};

const removeCatalog = async (req, res) => {
  const { catalogId } = req.params;
  const answer = await Catalog.findOneAndRemove({ _id: catalogId });
  if (!answer) {
    throw HttpError(404);
  }
  res.json({ message: "Catalog deleted", _id: answer._id });
};

const updateCatalog = async (req, res) => {
  const { catalogId } = req.params;
  const answer = await Catalog.findOneAndUpdate({ _id: catalogId }, req.body, {
    new: true,
  });
  if (!answer) {
    throw HttpError(404);
  }
  res.json(answer);
};

module.exports = {
  listCatalogs: ctrlWrapper(listCatalogs),
  addCatalog: ctrlWrapper(addCatalog),
  removeCatalog: ctrlWrapper(removeCatalog),
  updateCatalog: ctrlWrapper(updateCatalog),
};
