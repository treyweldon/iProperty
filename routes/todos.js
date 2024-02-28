var express = require('express');
var router = express.Router();

todosCtrl = require('../controllers/todos')

router.get('/properties/:id/todo/new', todosCtrl.create);

router.post('/properties/:id/todo/new', todosCtrl.new);

// router.get('/properties/:id/todo/:id', todosCtrl.show);

module.exports = router;
