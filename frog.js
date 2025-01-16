const mongoose = require('mongoose')

const signup = new mongoose.Schema({

    _username: {

    type: String,
    required: true

    },

    _password: {

    type: String,
    required: true

    },

    _gender: {

        type: String,
        required: true

        },
    _school: {
        type: String,
        required: true
    },
    });

const model = mongoose.model("SignupSchema", signup);

module.exports = model;