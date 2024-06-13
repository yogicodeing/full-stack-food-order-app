import {useState} from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";


import { HiShoppingBag } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import {removeCurrName} from "../../redux/Store/Store"

function Navbar() {

  const item = useSelector((store)=>{
    return store.cart
  })
  const cName = useSelector((store)=>{
    return store.loginName
  })

const[isLogout,setIsLogout] = useState(true)
  

 const logOut = () =>{
  setIsLogout(false)
 }
  
  return (
    <div className='navbarContainer'>
       <div className="navbarSubContainer">
          <div className="logo"><Link to="/">YUVA PIZZA</Link></div>
          <div className="cartAndLoginLink">

            
            
              { cName ? (
                <div className='loginandLogOut'>
                    <div className="yu">   
                       <Link className="currentNames">{cName} </Link>
                       <FaChevronDown className='downIcons'/> 
                    </div>
                     <div className="orderAndLogOut">

                         <div className="cartIconsText">
                             <Link to="/cart"><HiShoppingBag />  Order</Link>
                         </div>
                         <div className="cartIconsText" onClick={logOut}>
                             <Link to='/login'><MdLogout />   Logout</Link>
                         </div>
                     </div>
                </div>
              ): (
                <span className="cartlogin"><Link to='/login'>Login</Link></span>
              )}
              <span className="cartlogin"><Link to={'/cart'}>Cart</Link>{item.length}</span>
          </div>
       </div>
    </div>
  )
}

export default Navbar