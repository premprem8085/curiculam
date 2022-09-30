import React from "react";
import "../bootstrap/bootstrap.min.css";
import useForm from "../Hooks/useForm";
function Login() {
  const { handleChange, values } = useForm();
  return (
    <div className="container  text-white">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-input">
          <labe className="lable me-5">firstName:</labe>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
          ></input>
        </div>
        <div className="form-input">
          <labe className="lable me-5">Email:</labe>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          ></input>
        </div>
        <div className="form-input">
          <labe className="lable me-5">passWord:</labe>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-input">
          <labe className="lable me-5">Confirm password:</labe>
          <input
            type="passWord"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
          ></input>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Login;
