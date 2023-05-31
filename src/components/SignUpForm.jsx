import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SignUpContext } from "../context/SignUpContext";

const SignUpForm = () => {
  const {
    email,
    password,
    teacherName,
    subject,
    handleEmailChange,
    handlePasswordChange,
    handleTeacherName,
    handleSubject,
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
                  <span className="label-text input-title">Full Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  value={teacherName}
                  onChange={handleTeacherName}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text input-title">Subject</span>
                </label>

                <select
                  className="select select-primary w-full max-w-xs"
                  value={subject}
                  onChange={(e) => handleSubject(e.target.value)}
                >
                  <option value="" disabled>
                    What subject do you teach?
                  </option>
                  <option value="English">English</option>
                  <option value="Maths" disabled>
                    Maths
                  </option>
                  <option value="Science" disabled>
                    Science
                  </option>
                  <option value="Art" disabled>
                    Art
                  </option>
                  <option value="History" disabled>
                    History
                  </option>
                  <option value="Geography" disabled>
                    Geography
                  </option>
                  <option value="Music" disabled>
                    Music
                  </option>
                  <option value="P.E." disabled>
                    P.E.
                  </option>
                  <option value="Technology" disabled>
                    Technology
                  </option>
                  <option value="Drama" disabled>
                    Drama
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text input-title">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text input-title">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="already-registered">
                  <a className="label-text-alt">Already registered?</a>
                  <Link to="/log-in" className="link label-text-alt">
                    Log in
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
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
