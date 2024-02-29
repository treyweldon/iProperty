var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos')

router.post('/:id', todosCtrl.create);
router.delete("/:id", todosCtrl.delete);
module.exports = router;
