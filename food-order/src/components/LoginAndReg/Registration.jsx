import { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("password not matched");
    } else { 
      await axios
        .post("http://localhost:4500/reg", {name,email,password} )
        .then(() => console.log("regiestration is successfully"))
        .catch((err)=>console.log(err))
    }
  };

  return (
    <div className="regContainer">
      <div className="regSubContainer">
        <div className="regHead">Register</div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="inputFromUser"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
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
          <input
            type="password"
            className="inputFromUser"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="submitBtn">
            Register
          </button>
        </form>
        <div className="moveToLogin">
          <Link to="/login">click to login here</Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
