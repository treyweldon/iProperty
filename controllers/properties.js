const Property = require('../models/property');

module.exports = {
    index,
    show,
    create,
    new: newProperty
  };

async function index(req, res){
    const properties = await Property.find({});
    res.render('properties/index', { properties });
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
=======
// controllers/properties.js
const Property = require("../models/property");
const request = require("../server");

module.exports = {
  index,
  show,
  new: newProperty,
  create,
  delete: deleteProperty,
  edit,
  update,
};

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

function create(req, res) {
  console.log(req.body);
  // Models are responsible for CRUDing the data
  Property.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect("/properties");
}

function newProperty(req, res) {
  res.render("properties/new", { title: "New Property!" });
}

function show(req, res) {
  res.render("properties/show", {
    property: Property.getOne(req.params.id),
    title: "Property Details",
  });
}

function index(req, res) {
  res.render("properties/index", {
    properties: Property.getAll(),
    title: "All Properties 🏘️",
  });
}
