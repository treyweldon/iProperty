const express = require("express");
const router = express.Router();
const propertiesCtrl = require("../controllers/properties.js");
const ensureLoggedIn = require('../config/ensureLogin');

router.get("/", ensureLoggedIn, propertiesCtrl.index);
router.get("/new", ensureLoggedIn, propertiesCtrl.new);
router.post("/", ensureLoggedIn, propertiesCtrl.create);
router.get("/:id", ensureLoggedIn, propertiesCtrl.show);
router.get("/:id/edit", ensureLoggedIn, propertiesCtrl.edit)

router.put('/:id/edit', ensureLoggedIn, propertiesCtrl.update)

module.exports = router;
