const Property = require("../models/property");

module.exports = {
  create,
};

async function create(req, res) {
  const property = await Property.findById(req.params.id);
  property.todo.push({ todoItem: req.body.todoItem });
  await property.save();
  res.redirect(`/properties/${req.params.id}`);
}