"use client";
import { Outfit } from "next/font/google";

const outfit = Outfit({subsets: ['latin'], weight: ['400'] })

import React, { useState } from "react";

function Login() {
  const [action, setAction] = useState("Sign Up");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {};

  const handleSignup = async () => {};
  return (
    <section className={`w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-t from-white to-blue-400 ${outfit.className}`}>
      <div className="h-[80vh] flex items-center justify-center bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] rounded-3xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center flex-col space-y-2">
            {/* Header */}
            <h1 className="text-4xl font-bold md:text-4xl text-center">
              Welcome
            </h1>
            {/* Caption */}
            <p className="font-medium text-center">
              Get started with <span className="text-blue-500">Tech-Trek</span>!
            </p>
            {/* Button Container */}
            <div className="text-xl font-light items-center w-full text-center ">
              {/* SignUp Button */}
              <div className="  grid grid-cols-2">
                <h2
                  className={`bg-transparent text-black text-opacity-90 rounded-none p-3 transition-all duration-300 font-semibold border-b-2 px-8 md:px-16 cursor-pointer ${
                    action === "Sign Up"
                      ? "border-b-blue-500"
                      : "border-b-gray-400"
                  }`}
                  onClick={() => setAction("Sign Up")}
                >
                  Sign Up
                </h2>
                {/* Login Button */}
                <h2
                  className={`bg-transparent text-black text-opacity-90 rounded-none p-3 transition-all duration-300 font-semibold border-b-2 cursor-pointer ${
                    action === "Login"
                      ? "border-b-blue-500"
                      : "border-b-gray-400"
                  }`}
                  onClick={() => setAction("Login")}
                >
                  Login
                </h2>
              </div>
            </div>
            {/* Input Field */}
            <div className="flex flex-col gap-4 w-full pt-5">
              <input
                placeholder="Email"
                type="email"
                className="rounded-full px-5 py-2 border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                className="rounded-full px-5 py-2 border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {action === "Sign Up" && (
                <input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full px-5 py-2 border"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}

              <button
                className="rounded-full p-2 bg-black hover:border-blue-500 hover:border hover:bg-white hover:text-black text-white"
                onClick={action === "Login" ? handleLogin : handleSignup}
              >
                {action}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
