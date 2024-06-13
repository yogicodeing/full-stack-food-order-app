import React from 'react'
import "./Checkout.css"
import StripCheckout from 'react-stripe-checkout';
import axios from 'axios'

function Checkout({subTotal,items}) {

    const totalPrice = subTotal + 65;
    console.log(items)

    const sendItemToDB = async()=>{
       await axios.post("http://localhost:4500/orderdata",{subTotal,items,totalPrice})
       .then(()=>console.log("order details send successfully..."))
       .catch((err)=>console.log(err))
    }

    const tokenHander = (token)=>{
        console.log(token);
    }
    

  return (
    <div>
         <StripCheckout
           amount={subTotal}
           shippingAddress
           token={tokenHander}
           stripeKey="pk_test_51OZEgcSIkVNhZxN3efgs5xhMLOH2ndMMF7kfmt1erxPKdTsHv9UB75Q6bBEEFb2doTy2kEiS9o8oHhQvzGQTTqCC00o6mio8DG"
           currency='INR'
         >
            <button className='payNow' onClick={sendItemToDB}>PUYNOW</button>
         </StripCheckout>
    </div>
  )
}

export default Checkout