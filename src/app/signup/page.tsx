"use client";

import "@/app/form.css";

export default function Signup() {
  return (
    <>
      <div className="justify-center align-center width-full height-full flex background-lightgrey">
        <div className="signup-form background-white flex flex-column">
          <div className="form-title text-center flex align-center justify-center">
            <span className="form-title-side-decoration"></span>
            <h1>Signup to Cloud Todo</h1>
            <span className="form-title-side-decoration"></span>
          </div>
          <div className="form flex flex-column">
            <div className="email-input-box">
              <label htmlFor="email">User Email</label>
              <input type="text" id="email" className="input input-text" />
            </div>
            <div className="password-input-box">
              <label htmlFor="password">User Password</label>
              <input
                type="text"
                id="password"
                className="input input-password"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
