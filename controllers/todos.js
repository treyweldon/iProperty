const Property = require('../models/property');

module.exports = {
    create,
    new: newTodo,
  };
  
async function newTodo(req, res){
    const properties = await Property.find({});
    properties.todo.push(req.body);
    res.render('to-dos/new', {properties});
}


async function create(req, res) {
  try {
    const properties = await Property.findById(req.params.id);
    res.redirect(`/properties/${properties._id}`);
  } catch (err) {
    console.log(err);
    res.render('to-dos/new', { errorMsg: err.message });
  }
}
