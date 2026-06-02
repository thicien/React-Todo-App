const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: {
        type: string,
        require: true,
        trim: true
    },
    description: {
        type: string,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
})
module.exports = mongoose.model('item', itemSchema)