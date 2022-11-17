const mongoose = require("mongoose");

const employeeSchema =  mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,   
        required: true
    },
    age: {
        type: Number,
    },
    phone_number: {
        type: Number,
    },
    department: {
        type: String,
    }
});

module.exports = mongoose.model("Employee", employeeSchema);