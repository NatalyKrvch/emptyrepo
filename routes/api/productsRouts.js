const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/productsContr");
const { validateBody, isValidIdProduct, uploadAzureProduct, authenticate } = require("../../middlewars");

const { schemaJoi } = require("../../models/product");

router.get("/", ctrl.listProducts);

router.get("/:productId", isValidIdProduct, ctrl.getProductById);

router.post(
  "/",
  authenticate,
  uploadAzureProduct,
  validateBody(schemaJoi),
  ctrl.addProduct
);

router.delete(
  "/:productId",
  authenticate,
  isValidIdProduct,
  ctrl.removeProduct
);

router.put(
  "/:productId",
  authenticate,
  isValidIdProduct,
  uploadAzureProduct,
  validateBody(schemaJoi),
  ctrl.updateProduct
);

module.exports = router;
