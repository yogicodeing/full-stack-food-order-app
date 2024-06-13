import { useState } from "react";
import "./PizzaCart.css";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/Store/Store'

function PizzaCart({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [isShowProduct, setIsShowProduct] = useState(false);

  
  let currPrice = pizza.price[0][varient] * quantity;

  const dispatch = useDispatch();


  const showProductTrue = () => {
    setIsShowProduct(true);
  };
  const showProductFalse = () => {
    setIsShowProduct(false);
  };
   
  return (
    <>
      <div className="pizzaCartContainer">
        <div className="pizzaName">{pizza.name}</div>
        <img
          src={pizza.img}
          alt="pizza-images"
          className="pizzImage"
          onClick={showProductTrue}
        />
        <div className="categoryAndQty">
          <div className="cateQty">
            <span>category</span>
            <br />
            <select
              className="selectedContant"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.varients.map((varient,i) => {
                return <option value={varient} key={i}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="cateQty">
            <span>quantity</span>
            <br />
            <select
              className="selectedContant"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1} key={i}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="priceAndAddtocart">
          <div className="price">
            Price:{currPrice}Rs/-
          </div>
          <div className="addToCart" onClick={()=>{
            const item = {
                __id:pizza.id,
                pizza:pizza,
                quantity:quantity,
                varient:varient,
                price:currPrice
            }
            dispatch(addToCart(item))
          }}>ADD TO CART</div>
        </div>
      </div>

      {/* single Product Show */}

      {isShowProduct && 
         <div className="productShows">
         <div className="currentProductContainer">
             <div className="currenSubContainer">
              <IoClose className="closeIcons" onClick={showProductFalse}/>
                <div className="cName">{pizza.name}</div>
                <img src={pizza.img} alt="singleImage" className="cImage" />
                <div className="cDis">{pizza.description}</div>
                <div className="close" onClick={showProductFalse}>close</div>
             </div>
        </div>
        </div>}
    </>
  );
}

export default PizzaCart;
