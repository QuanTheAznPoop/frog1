const { Schema, model, models } = require("mongoose")
const signup = new Schema({

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
    });

module.exports = mongoose.model("Signup", signup)