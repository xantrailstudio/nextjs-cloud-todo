"use client";

import "@/app/form.css";
import Image from "next/image";
import backgroundImage from "@/app/form-bg.jpg"; // Reusing your background

import { auth } from "@/lib/firebase"; // Importing your configured auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      router.push("/");
    } catch (e) {
      alert("Error Logging In [/login/page.tsx]: " + e);
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
            <h1>Login to Cloud Todo</h1>
            <span className="form-title-side-decoration-white"></span>
          </div>

          <div className="form flex flex-column">
            <div className="email-input-box flex flex-column margin-top-12">
              <label htmlFor="email">User Email</label>
              <input
                type="email"
                id="email"
                className="input input-text border-1-solid-white"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password-input-box flex flex-column margin-top-12">
              <label htmlFor="password">User Password</label>
              <input
                type="password"
                id="password"
                className="input input-password border-1-solid-white"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-transparent btn-transparent-white margin-top-12"
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="margin-top-12 text-center">
              New here?{" "}
              <a
                href="/signup"
                style={{ color: "var(--blue)", textDecoration: "underline" }}
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
