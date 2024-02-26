const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    todoItem: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
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
        required: true
    },
    yard: {
        type: Boolean,
        required: true
    },
    pool: {
        type: Boolean,
        required: true
    },
    todo: [todoSchema]
});


module.exports = mongoose.model('Property', propertySchema);