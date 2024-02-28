var express = require('express');
var router = express.Router();
const propertiesCtrl = require("../controllers/properties");

router.get('/', propertiesCtrl.index);
router.get('/new', propertiesCtrl.new);
router.get('/:id', propertiesCtrl.show);
router.post('/', propertiesCtrl.create);
router.delete("/:id", propertiesCtrl.delete);
router.put("/:id", propertiesCtrl.update);
module.exports = router;
