const express = require("express");
const router = express.Router();
const propertiesCtrl = require("../controllers/properties.js");

router.get("/", propertiesCtrl.index);
router.get("/new", propertiesCtrl.new);
router.post("/", propertiesCtrl.create);
router.get("/:id", propertiesCtrl.show);
router.get("/:id/edit", propertiesCtrl.edit)

router.put('/:id/edit', propertiesCtrl.update)

module.exports = router;
