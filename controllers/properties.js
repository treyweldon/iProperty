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