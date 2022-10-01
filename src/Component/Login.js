import React from "react";

import useForm from "../Hooks/useForm";
import Validate from "../Hooks/Validate";
function Login() {
  const { handleChange, values, handleSubmit, error } = useForm(Validate);
  return (
    <div className="container  text-white">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <labe className="lable me-5">firstName:</labe>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
          ></input>
          {error.username && <p>{error.username}</p>}
        </div>
        <div className="form-input">
          <labe className="lable me-5">Email:</labe>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          ></input>
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-input">
          <labe className="lable me-5">passWord:</labe>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="form-input">
          <labe className="lable me-5">Confirm password:</labe>
          <input
            type="passWord"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
          ></input>
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Login;
