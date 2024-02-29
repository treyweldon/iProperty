const Property = require("../models/property");

module.exports = {
  create,
  delete: deleteTodo
};

async function deleteTodo(req, res){
  const propertyId = req.params.id;
  const property = await Property.findById(propertyId);
  property.todo.delete(newTodo);
  await property.save();
  res.redirect(`/properties/${req.params.id}`);
}

// async function deleteTodo(req,res){
//   const property = await Property.findOne({'todo._id':req.params.id})
//   property.todo.remove(req.params.id)
//   await property.save();
//   res.redirect(`/properties/${property._id}`);
// }

// async function deleteTodo(req, res){
//   const property = await Property.findByIdAndDelete(req.params.id);
//   res.redirect(`/properties/${property._id}`)
// }

// async function deleteTodo(req, res) {
//   console.log("delete")
// //   const property = await Property.findOne({ 'todo._id': req.params.id });
// //   const propertyId = req.params.id;
// //   const property = await Property.findById(propertyId);
// //   property.todo.remove(req.params.id);
// //   await property.save();
//   res.redirect(`/properties/${property._id}`)
// }

// async function deleteTodo(req, res) {
//   console.log("delete")
// //   const property = await Property.findById(propertyId);
// //   // const propertyId = req.params.id;
// //   // const todoId = req.params.id;
// //   property.todo.remove(property.schema.path('todo').schema.path('todoCategory'))
// //   await property.save();
//   res.redirect(`/properties/${propertyId}`);
// }

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