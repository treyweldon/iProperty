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