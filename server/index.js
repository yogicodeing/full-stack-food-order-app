const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PizzaModel = require("./models/PizzaMode");
const RegisterModel = require("./models/Register");
const OrderModel = require("./models/OrderModel");

const PORT = 4500;
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/pizza-order", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("databse connected successfully");
  })
  .catch((err) => console.log(`database connection field ${err}`));

app.get("/getpizza", (req, res) => {
  PizzaModel.find()
    .then((datas) => {
      res.json(datas);
    })
    .catch((err) => res.json(err));
});

app.post("/reg",  (req, res) => {
  
  RegisterModel.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((errs) => {
      res.json(errs);
    });
});

app.post("/logged",async(req,res)=>{
    const {email,password} = req.body;
   const user = await RegisterModel.find({email,password})
   if(user.length > 0){

      const currUser = {
        name:user[0].name,
        email:user[0].email,
        isAdmin:user[0].isAdmin,
        _id:user[0]._id
      }
      res.send(currUser.name)
   }else{
    return res.status(400).json({message:"user login failed"})
   }

})


app.post("/orderdata",(req,res)=>{
  OrderModel.create(req.body)
  .then((result) => {
    res.json(result);
  })
  .catch((errs) => {
    res.json(errs);
  });

})

app.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
