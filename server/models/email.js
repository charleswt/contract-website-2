const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: /^\S+@\S+\.\S+$/
    },
})

const Email = model('Email', postSchema);

module.exports = Email;