const Property = require("../models/property");

module.exports = {
  create,
  delete: deleteTodo,
};

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

async function deleteTodo(req, res) {
  Todos.deleteOne(req.params.id);
  res.redirect(`/properties/${req.params.id}`);
}
