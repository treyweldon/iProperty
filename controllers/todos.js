const Property = require("../models/property");

module.exports = {
  create,
  delete: deleteTodo
};

async function deleteTodo(req, res){
  const todoId = req.params.id;
  const property = await Property.findOne({"todo._id": todoId});
  property.todo.remove(todoId);
  await property.save();
  console.log("delete todo ", property)
  res.redirect(`/properties/${property._id}`);
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