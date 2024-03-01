var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos')
const ensureLoggedIn = require('../config/ensureLogin');

router.delete('/:id',ensureLoggedIn, todosCtrl.delete);

router.post('/:id',ensureLoggedIn, todosCtrl.create);

module.exports = router;
