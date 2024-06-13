import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { addSameItem } from '../../../redux/Store/Store'
import { removeFromTheCart } from '../../../redux/Store/Store'
import Checkout from '../../Checkout/Checkout'

function Cart() {

   const items = useSelector((store)=>{
        return store.cart
    })
    const dispatch = useDispatch();

    console.log(items);
    const subTotal = items.reduce((x, item)=> x+item.price,0 )
  return (
    <div className='cartContainer'>
        <div className="heads">MY CART</div>
        <div className="addProducts">
            <div className="varis">
                {
                    items.map((item,i)=>{
                        return(
                            <div className='cartcon' key={i}> 
                                 <p className='cartName'>{item.pizza.name}[{item.varient}]</p>
                                 <img src={item.pizza.img} alt="cartImages" width={"300px"} />
                                 <p className="cartPrice">Price :{item.quantity} * {item.pizza.price[0][item.varient]} = {item.price}</p>
                                 <div className="addMore">
                                    <button className='addBtn'>-</button>
                                    <span>{item.quantity}</span>
                                    <button className='addBtn' onClick={()=>item.quantity + 1} >+</button>
                                 </div>
                                 <button className='addBtnRemove' onClick={()=>{dispatch(removeFromTheCart(item.__id))}}>Remove</button>
                            </div>)   
                    })
                }
            </div>
            <div className="varis1">
                 <div className="Total">
                    <div className="bill">BILL AMOUNT</div>
                    <div className="subtotal">
                       <p className='totalPr'>Sub-Total</p>
                       <p className='colorPrice'>{subTotal}Rs/-</p>
                    </div>
                    <div className="delivery">
                       <p className='totalPr'>Delivery Fee</p>
                       <p className='colorPrice'>{65}Rs/-</p>
                    </div>
                    <div className="tot">
                       <p className='totalPr'>Total</p>
                       <p className='colorPrice'>{subTotal+65} Rs/-</p>
                    </div>
                 </div>
                 {/* <button className="payNow">PAYNOW</button> */}
                 <Checkout subTotal={subTotal} items={items}/>

            </div>
        </div>
    </div>
  )
}

export default Cart