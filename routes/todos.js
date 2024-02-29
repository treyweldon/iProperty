var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos')

router.delete('/:id', todosCtrl.delete)
router.post('/:id', todosCtrl.create);

module.exports = router;
