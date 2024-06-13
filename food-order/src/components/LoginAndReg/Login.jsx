import { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {getCurrName} from "../../redux/Store/Store"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[currentName,setCurrentName] = useState("");
  
  const dispatch = useDispatch();
 

  
console.log(currentName);

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    await axios
    .post("http://localhost:4500/logged", {email,password} )
    .then((res) => setCurrentName(res.data))
    .catch((err)=>console.log(err));
    
    dispatch(getCurrName(currentName))
  };

  return (
    <div className="regContainer">
      <div className="regSubContainer">
        <div className="regHead">Login</div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="email"
            className="inputFromUser"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="inputFromUser"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        
          <button type="submit" className="submitBtn">
            Login
          </button>
        </form>
        <div className="moveToLogin">
          <Link to="/registration">click to Signup here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
