const Property = require('../models/property');

module.exports = {
    show,
    create,
    new: newTodo
  };
  
  async function newTodo(req, res){
    console.log("new todo")
      const properties = await Property.find({});
      properties.todo.push(req.body);
      res.render('to-dos/new', {properties});
  }

  async function show(req, res) {
    const properties = await Property.findById(req.params.id);
    res.render('to-dos/show', { properties });
  }

async function create(req, res) {
  console.log("create")
  const properties = await Property.findById(req.params.id)
  // property.todo.push(req.body);
    try {
      res.redirect(`properties/${properties._id}`);  
      res.render({properties})
    } catch (err) {
      console.log(err);
      res.render('to-dos/new', { errorMsg: err.message });
    }
  }