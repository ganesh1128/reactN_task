import React from "react";

function Register() {
  return (
    <main className="form-signin">
      <form className="text-center">
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
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Conform Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign up
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
}

export default Register;
