const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,

    },
    
})

const Customer = mongoose.model("customerData", customerSchema)

module.exports = Customer;