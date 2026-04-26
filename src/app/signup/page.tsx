"use client";

import "@/app/form.css";

export default function Signup() {
  return (
    <>
      <div className="justify-center align-center width-full height-full flex background-lightgrey">
        <div className="signup-form background-white">
          <h1 className="form-title text-center">Signup to Cloud Todo</h1>
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
