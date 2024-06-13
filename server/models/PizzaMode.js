const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name:{type:String,require},
  varients:[],
  price:[],
  category:{type:String,require},
  img:{type:String,require},
  description:{type:String,require},
},{
    timestamps:true
})

const PizzaModel = mongoose.model('pizzadatas',pizzaSchema)

module.exports = PizzaModel;