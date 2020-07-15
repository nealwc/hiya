// const { Schema, model } = require('mongoose');
const { Schema } = require('mongoose');

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = itemSchema;

// const Item = model('Item', itemSchema);

// module.exports = Item;