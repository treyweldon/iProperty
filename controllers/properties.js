const Property = require("../models/property");

module.exports = {
  index,
  show,
  create,
  new: newProperty,
  edit: editProperty
};

async function editProperty(req, res){
  const property = await Property.findById(req.params.id);
  res.render('properties/edit', {property})
  
}

async function index(req, res) {
  const properties = await Property.find({});
  res.render("properties/index", { properties });
}

async function show(req, res) {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }
  res.render("properties/show", { property });
}

async function newProperty(req, res) {
  const properties = await Property.find({});
  res.render("properties/new", { properties });
}

async function create(req, res) {
  try {
    req.body.pets = !!req.body.pets;
    req.body.yard = !!req.body.yard;
    req.body.pool = !!req.body.pool;
    const property = await Property.create(req.body);
    res.redirect("/properties");
  } catch (error) {
    console.log(error);
    res.render("properties/new", { errorMsg: error.message });
  }
}
