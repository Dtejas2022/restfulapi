const mongoose = require("mongoose");
const validator = require("validator")

const stdentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenghth: 3
    },


    email: {
        type: String,
        required: true,
        unique: [true, "email alredy exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email");
            }
        }
    },

    phone:{
        type:Number,
        min:10,
        max:10,
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true,
    }
})


// we will create new collection using models

const Student = new mongoose.model('Student',stdentSchema);
module.exports = Student;