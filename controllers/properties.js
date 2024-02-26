const Property = require('../models/property');

module.exports = {
    index,
    show,
    create,
    new: newProperty
  };

function index(req, res){
    res.render('properties/index');
  };

async function show(req, res) {
    res.render('properties/show');
  }

async function create(req, res){
    res.render('properties/new');
}

async function newProperty(req, res) {
    try {
      await Property.create(req.body);
      res.redirect('/properties');  
    } catch (err) {
      console.log(err);
      res.render('properties/new', { errorMsg: err.message });
    }
  }