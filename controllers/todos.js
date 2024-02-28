const Property = require('../models/property');

module.exports = {
    // show,
    create,
    new: newTodo,
    // delete: deleteTodo,
  };
  
async function newTodo(req, res){
    const properties = await Property.find({});
    properties.todo.push(req.body);
    res.render('to-dos/new', {properties});
}

// async function show(req, res) {
//   const properties = await Property.findById(req.params.id);
//   res.render('to-dos/show', { properties });
// }

async function create(req, res) {
  try {
    const properties = await Property.findById(req.params.id);
    res.redirect(`/properties/${properties._id}`);
  } catch (err) {
    console.log(err);
    res.render('to-dos/new', { errorMsg: err.message });
  }
}

// async function create(req, res) {
//   try {
//       const properties = await Property.findById(req.params.id)
//       res.render({properties})
//       res.redirect(`properties/${properties._id}`);  
//     } catch (err) {
//       console.log(err);
//       res.render('to-dos/new', { errorMsg: err.message });
//     }
//   }


// function deleteTodo(req, res){
//   Property.deleteOne(req.params.id);
//   res.redirect(`/properties/${id}`);
// };