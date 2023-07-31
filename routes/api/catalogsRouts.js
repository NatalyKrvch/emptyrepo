const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/catalogContr");
const {
  validateBody,
  isValidIdCatalog,
  uploadAzureCatalog,
} = require("../../middlewars");
const { catalogSchemaJoi } = require("../../models/catalog");


router.get("/", ctrl.listCatalogs);
router.post(
  "/",
  uploadAzureCatalog,
  validateBody(catalogSchemaJoi),
  ctrl.addCatalog
);
router.delete("/:catalogId", isValidIdCatalog, ctrl.removeCatalog);
router.put(
  "/:catalogId",
  isValidIdCatalog,
  uploadAzureCatalog,
  validateBody(catalogSchemaJoi),
  ctrl.updateCatalog
);
module.exports = router;
