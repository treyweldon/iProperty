var express = require('express');
var router = express.Router();

todosCtrl = require('../controllers/todos')

router.post('/', todosCtrl.new);


module.exports = router;
