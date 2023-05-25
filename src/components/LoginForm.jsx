import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const LoginForm = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    alert,
  } = useContext(LoginContext);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {alert && <div className="alert">{alert}</div>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div className="already-registered">
                  <a className="label-text-alt">Not registered?</a>
                  <Link to="/sign-up" className="link label-text-alt">
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <Link to="/home">
                  <button className="btn btn-primary" onClick={handleLogin}>
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
