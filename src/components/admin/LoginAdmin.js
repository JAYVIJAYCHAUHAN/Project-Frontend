import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./adminCard.css";
import { type } from "@testing-library/user-event/dist/type";
function LoginAdmin() {
    const navigete=useNavigate()
     
  const [username, setUsername] = useState("");
   
  const [password, setPassword] = useState("");
    
  const handleClick = () => {
    console.log(username, password);
    axios
      .post("http://localhost:5000/admin/login", {
        username: username,
        password: password,
         
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 201) {
          window.alert("Login Successfully");
        } else {
          // window.alert(
          //   "You are Not allowed to login. Error: " + res.data.message
          // );
          // console.log("Error:", res.data.message);
          window.alert("You are Not allowed to login. Error: " + res.data.message);
        }
        localStorage.setItem('type',res.data.type)
        localStorage.setItem('token',res.data.token)
     if(localStorage.getItem('type')==='Subadmin'||localStorage.getItem('type')==='Admin') navigete('/admin/dashboard')
          
      
      })
      .catch((err) => {
        console.log(err);
        
      });
  };
  return (
    <div className="admin-card">
      <h1 className="admin-login"> Admin Login </h1>
       
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="input-admin"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input-admin"
        type="password"
      />

      <button onClick={handleClick} className="submit">
        Submit
      </button>
    </div>
  );
}
export default LoginAdmin;
