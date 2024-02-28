const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    todoItem: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    },
});

const propertySchema = new Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    pets: {
        type: Boolean,
    },
    yard: {
        type: Boolean,
    },
    pool: {
        type: Boolean,
    },
    // photos: {
        
    // },
    todo: [todoSchema]
});

const Property = mongoose.model('Property', propertySchema);
const Todo = mongoose.model('Todo', todoSchema);
module.exports = { 
    Property, Todo 
}
