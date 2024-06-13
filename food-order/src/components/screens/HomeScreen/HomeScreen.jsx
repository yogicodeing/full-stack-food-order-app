import React, { useState ,useEffect} from 'react'
import "./HomeScreen.css"
import axios from 'axios';
import PizzaCart from '../../PizzaCart/PizzaCart';


function HomeScreen() {
  const [pizza,setPizza] = useState([]);


  useEffect(() => {
  axios
      .get("http://localhost:4500/getpizza")
      .then((da) => setPizza(da.data))
      .catch((err) => console.log(err)); 
  
  }, []);

  return (
    <div className='homeContainer'>
        {
            pizza.map((pizz) =>{
                return  <PizzaCart pizza={pizz} key={pizz.id}/>
            })
        }
    </div>

  )
}

export default HomeScreen