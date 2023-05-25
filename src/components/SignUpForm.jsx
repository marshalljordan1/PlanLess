import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SignUpContext } from "../context/SignUpContext";

const SignUpForm = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignUp,
    alert,
  } = useContext(SignUpContext);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
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
                <div className="already-registered">
                  <a className="label-text-alt">Already registered?</a>
                  <Link to="/" className="link label-text-alt">
                    Log in
                  </Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
