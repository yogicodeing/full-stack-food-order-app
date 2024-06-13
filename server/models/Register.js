const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String},
  isAdmin:{type:Boolean,require,default:false}
},{
    timestamps:true
})

const RegisterModel = mongoose.model('users',registerSchema)

module.exports = RegisterModel;