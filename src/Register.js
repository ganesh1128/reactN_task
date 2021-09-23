import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import { useState } from "react/cjs/react.development";
import env from "./settings.js"



function Register() {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  const [confirmpassword,setconfirmpassword] = useState("")
  const history = useHistory()
  let handleSubmit = async (e) => {
    e.preventDefault()
    console.log({username,password,confirmpassword});
    try {
      await axios.post(`${env.api}/register`,{username,password})
    history.push("/login")
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <main className="form-signin text-center">
      <form onSubmit={(e) => {
        handleSubmit(e)
      }}>
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating mt-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={username}
            onChange={e => {setusername(e.target.value)}}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={e => {setpassword(e.target.value)}}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={confirmpassword}
            onChange={e => {setconfirmpassword(e.target.value)}}
          />
          <label for="floatingPassword">Conform Password</label>
        </div>
        <Link to="/register">
        <input className="w-100 btn btn-lg btn-primary mt-4" type="submit" value="Sign up"/>
        </Link>
        <Link to="/login">
        <input className="w-100 btn btn-lg btn-primary mt-2" type="submit" value="click here for Login" />
        </Link>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
}

export default Register;
