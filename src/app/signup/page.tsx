"use client";

import "@/app/form.css";
import Image from "next/image";
import backgroundImage from "@/app/form-bg.jpg";

export default function Signup() {
  return (
    <>
      <Image
        src={backgroundImage}
        alt="Background Image"
        className="background-img"
      />
      <div className="justify-center align-center width-full height-full flex background-transparent color-white">
        <div className="signup-form background-transparent background-blur flex flex-column padding-25">
          <div className="form-title text-center flex align-center justifyenter">
            <span className="form-title-side-decoration-white"></span>
            <h1>Signup to Cloud Todo</h1>
            <span className="form-title-side-decoration-white"></span>
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
