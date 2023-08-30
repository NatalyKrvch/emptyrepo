const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/catalogContr");
const {
  validateBody,
  isValidIdCatalog,
  uploadAzureCatalog,
  authenticate,
} = require("../../middlewars");
const { catalogSchemaJoi } = require("../../models/catalog");

router.get("/", ctrl.listCatalogs);
router.post(
  "/",
  authenticate,
  uploadAzureCatalog,
  validateBody(catalogSchemaJoi),
  ctrl.addCatalog
);
router.delete(
  "/:catalogId",
  authenticate,
  isValidIdCatalog,
  ctrl.removeCatalog
);
router.put(
  "/:catalogId",
  authenticate,
  isValidIdCatalog,
  uploadAzureCatalog,
  validateBody(catalogSchemaJoi),
  ctrl.updateCatalog
);
module.exports = router;
