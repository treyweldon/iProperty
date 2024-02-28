const Property = require("../models/property");

module.exports = {
  create,
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
