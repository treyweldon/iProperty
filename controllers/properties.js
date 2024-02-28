const Property = require("../models/property");

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  new: newProperty,
  delete: deleteProperty,
};

async function update(req, res) {
  req.body.done = !!req.body.done;
  Property.update(req.params.id, req.body);
  res.redirect(`/properties/${req.params.id}`);
}

async function edit(req, res) {
  const property = Property.getOne(req.params.id);
  res.render("properties/edit", {
    title: "Edit property",
    property,
  });
}

async function deleteProperty(req, res) {
  Property.deleteOne(req.params.id);
  res.redirect("/properties");
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

async function newProperty(req, res){
    const properties = await Property.find({});
    res.render('properties/new', {properties});
}

async function show(req, res) {
    const properties = await Property.findById(req.params.id);
    res.render('properties/show', { properties });
  }


  async function index(req, res){
    const properties = await Property.find({});
    res.render('properties/index', { properties });
  };