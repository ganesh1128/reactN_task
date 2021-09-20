import React from "react";
import "./Login.css";
import { useState } from "react";
import env from "./settings.js";
import axios from "axios";
 import { useHistory } from "react-router-dom";

function Login() {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
   const history = useHistory()

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let logindata= await axios.post(`${env.api}/login`,{username,password})
   console.log(logindata);
   window.localStorage.setItem("app_token",logindata.data.token)
   //alert(logindata.data.message)
    history.push("/todo")
    } catch (error) {
      console.log(error);
    }
   

  }
  return (
    <main className="form-signin text-center">
      <form onSubmit={handleSubmit }>
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={username}
            onChange={e => setusername(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <input className="w-100 btn btn-lg btn-primary" type="submit" value="Sign in"/>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
}

export default Login;
