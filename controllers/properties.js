const Property = require('../models/property');

module.exports = {
    index,
    show,
    new: newProperty,
    create,
    delete: deleteProperty,
    update,
  };
  
async function index(req, res){
    const properties = await Property.find({});
    res.render('properties/index', { 
      properties,
      title: "All Properties 🏘️",});
  };

async function show(req, res) {
    const properties = await Property.findById(req.params.id);
    res.render('properties/show', { properties });
  }

async function newProperty(req, res){
    const properties = await Property.find({});
    res.render('properties/new', {properties});
}

async function create(req, res) {
    req.body.pets = !!req.body.pets;
    req.body.yard = !!req.body.yard;
    req.body.pool = !!req.body.pool;
    try {
      const properties = await Property.create(req.body);
      res.redirect('/properties');  
      res.render({properties})
    } catch (err) {
      console.log(err);
      res.render('properties/new', { errorMsg: err.message });
    }
  }

function update(req, res) {
  req.body.done = !!req.body.done;
  Property.update(req.params.id, req.body);
  res.redirect(`/properties/${req.params.id}`);
}

function edit(req, res) {
  const property = Property.getOne(req.params.id);
  res.render("properties/edit", {
    title: "Edit property",
    property,
  });
}

function deleteProperty(req, res) {
  Property.deleteOne(req.params.id);
  res.redirect("/properties");
}