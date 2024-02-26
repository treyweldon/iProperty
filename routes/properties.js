var express = require('express');
var router = express.Router();

propertiesCtrl = require('../controllers/properties')

/* GET users listing. */
router.get('/', propertiesCtrl.index);

router.get('/new', propertiesCtrl.create)

router.get('/:id', propertiesCtrl.show)

module.exports = router;