const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   subTotal:{type:String},
   items:[],
   total:{type:String}
},{
    timestamps:true
})

const OrderModel = mongoose.model('orders',orderSchema)

module.exports = OrderModel;