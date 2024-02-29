const express = require("express");
const router = express.Router();
const propertiesCtrl = require("../controllers/properties.js");

// const todosCtrl = require('../controllers/todos')

// router.delete('/:id', todosCtrl.delete)

router.get("/", propertiesCtrl.index);
router.get("/new", propertiesCtrl.new);
router.post("/", propertiesCtrl.create);
router.get("/:id", propertiesCtrl.show);

module.exports = router;
