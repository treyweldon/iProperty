var express = require('express');
var router = express.Router();

propertiesCtrl = require('../controllers/properties')

router.get('/', propertiesCtrl.index);

router.get('/new', propertiesCtrl.new);

router.get('/:id', propertiesCtrl.show);

router.post('/', propertiesCtrl.create);

module.exports = router;