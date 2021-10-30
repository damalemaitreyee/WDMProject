import React, {useState}  from "react";
import  { useRef } from 'react';
import "./register.css"
import { useHistory } from "react-router-dom";
//import { SMTPClient } from 'emailjs';
import emailjs from 'emailjs-com';


export default function Register() {
  const form = useRef();
  const [details ,setDetails] = useState({username:"",email:"", password:"",repassword:"", role:""})
  const history = useHistory();
  const Registeration = details=>{
    if(details.password!=""&&details.username!=""&&details.email!=""&&details.role!=""&&details.repassword!=""){
      if(details.password!=details.repassword){
      alert("password doesn't match");
      } else{
        history.push("/manager_home");
      emailjs.sendForm('service_nz0158o', 'template_kvml0g5', form.current, 'user_FToWdb01vYWbtBVQSss1A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      }
    } else{
      alert("Please fill the data");
      
      
      
      
    }
  }


    const submitHandler = e =>{
        e.preventDefault();

        Registeration(details);
       

    }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form ref={form} className="registerForm">
        <label>Username</label>
        <input className="registerInput" name="username" type="text" placeholder="Enter your username..." onChange={e=>setDetails({...details, username: e.target.value})} value={details.username} required/>
        <label>Email</label>
        <input className="registerInput" name="email" type="email" placeholder="Enter your email..." onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} required/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e=>setDetails({...details, password: e.target.value})} value={details.password} required/>
        <label>Re-enter Password</label>
        <input className="registerInput" type="password" placeholder="Re-Enter your password..." onChange={e=>setDetails({...details, repassword: e.target.value})} value={details.repassword} required/>
        <label>Role</label>
        <input className="registerInput" name="role" type="text" placeholder="Enter your role..." onChange={e=>setDetails({...details, role: e.target.value})} value={details.role} required/>
        <button className="registerButton" onClick={submitHandler}>Register</button>
      </form>
     
    </div>
    )
}
