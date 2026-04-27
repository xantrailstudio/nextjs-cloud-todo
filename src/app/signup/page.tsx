"use client";

import "@/app/form.css";
import Image from "next/image";
import backgroundImage from "@/app/form-bg.jpg";

import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function createUser() {
    try {
      await createUserWithEmailAndPassword(auth, gmail, password);
      router.push("/dashboard");
    } catch (e) {
      alert(
        "Error Creating User with Email and password [/signup/page.tsx]: " +
          e,
      );
    }
  }

  return (
    <>
      <Image
        src={backgroundImage}
        alt="Background Image"
        className="background-img"
      />
      <div className="justify-center align-center width-full height-full flex background-transparent color-white">
        <div className="signup-form background-transparent background-blur-25 flex flex-column padding-25">
          <div className="form-title text-center flex align-center justifyenter">
            <span className="form-title-side-decoration-white"></span>
            <h1>Signup to Cloud Todo</h1>
            <span className="form-title-side-decoration-white"></span>
          </div>
          <div className="form flex flex-column">
            <div className="email-input-box flex flex-column margin-top-12">
              <label htmlFor="email">User Email</label>
              <input
                type="text"
                id="email"
                className="input input-text border-1-solid-white"
                onChange={(e) => setGmail(e.target.value)}
              />
            </div>
            <div className="password-input-box flex flex-column margin-top-12">
              <label htmlFor="password">User Password</label>
              <input
                type="password" // Recommended for security
                id="password"
                className="input input-password border-1-solid-white"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-transparent btn-transparent-white margin-top-12"
              onClick={createUser}
            >
              Submit
            </button>
            <p className="margin-top-12 text-center">
              Already have an account?{" "}
              <a
                href="/login"
                style={{ color: "var(--blue)", textDecoration: "underline" }}
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
