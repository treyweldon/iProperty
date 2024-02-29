const Property = require("../models/property");

module.exports = {
  create,
  delete: deleteTodo
};

async function deleteTodo(req, res) {
  console.log("delete")
  const property = await Property.findOne({ 'todo._id': req.params.id });
  // const propertyId = req.params.id;
  // const property = await Property.findById(propertyId);
  property.todo.remove(req.params.id);
  await property.save();
  res.redirect(`/properties/${property._id}`)
}

async function create(req, res) {
  const propertyId = req.params.id;
  const property = await Property.findById(propertyId);
  const { todoCategory, todoItem } = req.body;
  const newTodo = {
    todoCategory,
    todoItem,
  };
  property.todo.push(newTodo);
  await property.save();
  res.redirect(`/properties/${req.params.id}`);
}