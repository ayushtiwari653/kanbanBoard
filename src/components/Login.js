import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'
import Loginheader from './Loginheader';
const baseURL = "https://localhost:7079/login check";

function LoginForm() {
    function LoginApi(){
        fetch(baseURL, { 
    
        method: "POST", 
    
        body: JSON.stringify({
          userName: document.getElementById("email"),
          password: document.getElementById("password")
        }), 
    
        headers: { 
    
            "Content-type": "application/json; charset=UTF-8" 
    
        } 
    
    })
      .then(response => response)
      .then(data => console.log(data));
    
      }
      function LoginFun(){
        if(document.getElementById("email").value=="ayushT@gmail.com" && document.getElementById("password").value=="adm@123"){
            window.location.href= "http://localhost:3000/dashboard";
        }
        else{
            alert("Username and Password does not matched!");
        }
    }

    return(
      <div>
          <Loginheader/>
          <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <a class='btn btn-outline-secondary btn-sm mr-3' href="/">Cancel</a>&nbsp;&nbsp;&nbsp;
              <a  type="submit" onClick={LoginFun}  class="btn btn-outline-success btn-sm ml-5">Login</a>
          </div>
          
      </div>
      </div>   
    )       
}

export default LoginForm;