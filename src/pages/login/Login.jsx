import React, {useState} from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
    const adminUser = {
        email:"test@admin.com",
        password:"admin123",
        role:""
    }
    const history = useHistory();

    const LoginUser = details=>{
        if(details.email== adminUser.email &&  details.password == adminUser.password && details.role == "Manager"){
            console.log("Manager Logged in");
            history.push("/manager_home");
            
        }else if(details.email== adminUser.email &&  details.password == adminUser.password && details.role == "Admin"){
          console.log("Admin Logged in");
          history.push("/manager_home");
        } else if(details.email== adminUser.email &&  details.password == adminUser.password && details.role == "Resident"){
          console.log("Admin Logged in");
          history.push("/manager_home");
        }
    }
    const [details ,setDetails] = useState({email:"", password:"", role:""})


    const submitHandler = e =>{
        e.preventDefault();

        LoginUser(details);
       

    }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" >
        <label>Email</label>
        <input className="loginInput" id="email" type="email" placeholder="Enter your email..." onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} />
        <label>Password</label>
        <input className="loginInput" id="password" type="password" placeholder="Enter your password..." required="" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
        <label>Role</label>
        <input
            type="text"
            className="loginInput"
            id="role"
            placeholder="Enter Role"
            required
            onChange={e=>setDetails({...details, role: e.target.value})} value={details.role}
          />
        <button className="loginButton" onClick={submitHandler}>Login</button>
      </form>
        
    </div>
  );
}

