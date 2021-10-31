import React, {useState} from "react";
import validator from 'validator'
import "./login.css";
import { useHistory } from "react-router-dom";

export default function Login(props) {
    const adminUser = {
        email:"test@admin.com",
        password:"admin123",
        role:""
    }

    const history = useHistory();

    const LoginUser = details=>{
        if(details.email === adminUser.email &&  details.password === adminUser.password && details.role === "Manager"){
            console.log("Manager Logged in");
            history.push("/manager_home");            
        } else if(details.email == adminUser.email &&  details.password == adminUser.password && details.role == "Admin"){
          console.log("Admin Logged in");
          history.push("/admin_home");
        } else if(details.email === adminUser.email &&  details.password === adminUser.password && details.role === "Resident"){
          console.log("Resident Logged in");
          history.push("/resident_home");
        } else{
          alert("Invalid Details")
        }
    }

    const [details ,setDetails] = useState({email:"", password:"", role:""});

    const submitHandler = e =>{
        const { handleLogin } = props;
        e.preventDefault();
        LoginUser(details);
        handleLogin(details.email);
        //history.push('/manager_home');
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
