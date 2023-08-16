const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/authContr");
const { validateBody, authenticate} = require("../../middlewars");
const {
  loginSchemaJoi,
} = require("../../models/user");
const isValidId = require("../../middlewars/isValidId");

router.post("/login", validateBody(loginSchemaJoi), ctrl.login);
router.get("/logout", authenticate, ctrl.logout);
router.post("/update-token", isValidId, ctrl.updateToken);

module.exports = router;
