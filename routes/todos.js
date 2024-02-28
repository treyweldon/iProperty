var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos')

router.get('/new', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.get('/:id', todosCtrl.edit);
router.delete("/:id", todosCtrl.delete);
router.post("/", todosCtrl.create);
// router.put("/:id", todosCtrl.update);

module.exports = router;
