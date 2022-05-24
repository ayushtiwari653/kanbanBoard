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
        const axios = require('axios').default;

        axios.post('https://gorest.co.in/public/v2/users', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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