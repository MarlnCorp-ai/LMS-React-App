import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
    const navigate = useNavigate();


  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

      alert("Login successful (mock)");
    }
  };

  const handleInputChange = (e, type) => {

      if (!login({ email, password })){
        setErrors(prev => ({ ...prev, login: "Invalid email or password!" }));
      }else {
        navigate("/courses");
      }

    }
  };

  const closeLoginError = () => {
    setErrors((prev) => {
      const { login, ...rest } = prev;
      return rest;
    });
  }

  const handleInputChange = (e, type) => {
    closeLoginError();
    const { value } = e.target;
    if (type === "email") {
      setEmail(value);
      if (errors.email) {
        validate(); // Re-validate on input change
      }
    } else if (type === "password") {
      setPassword(value);
      if (errors.password) {
        validate(); // Re-validate on input change
      }
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-[#f4f0fa] to-[#e5d9f2] text-black flex flex-col items-center justify-center px-4 py-6">

<div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#e8ecf4] to-[#dee3ed] text-gray-900 flex flex-col items-center justify-center px-4 py-6">

      <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center py-2">
        <div className="flex items-center justify-center mb-3">
          <img
            src="/nexus.png" // Logo
            alt="Nexus Hive"
            className="w-10 h-auto mr-2" // Smaller logo
          />
          <h1 className="text-xl font-bold text-purple-700 tracking-wide">Nexus Hive</h1>
        </div>
        <hr className="w-3/4 mt-4 border-t-2 border-gray-300" /> {/* Longer hr */}
      </div>

      {/* Sign in to your account text below hr */}
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-8 mt-24">Sign in to your account</h2>

    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#e8ecf4] to-[#dee3ed] text-gray-900 flex flex-col items-center justify-center px-4 py-6">
      {errors.login && (
        <div className="absolute top-32 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4">
          <span className="font-medium">{errors.login}</span>
          <button
            onClick={closeLoginError}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Dismiss error"
          >
            ✕
          </button>
        </div>
      )}
      

      {/* Sign in to your account text below hr */}
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-8 mt-24">
        Sign in to your account
      </h2>


      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
        noValidate
      >
        {/* Email and Password Inputs */}
        <div className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
              placeholder="Email"
              className={`w-full p-3 bg-[#faf9fd] rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-md`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, "password")}
              placeholder="Password"
              className={`w-full p-3 bg-[#faf9fd] rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-md`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition-all shadow-md hover:scale-105"
        >
          Sign in
        </button>

        {/* Links for forgot password and SSO */}
        <div className="text-sm text-purple-600 flex justify-between mt-4">
          <a href="#" className="hover:underline flex items-center gap-3">
            <span className="text-xs text-purple-600">🔒</span> Forgot password?
          </a>
          <a href="#" className="hover:underline flex items-center gap-3">
            <span className="text-xs text-purple-600">🔑</span> Sign in with
            company or school (SSO)
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Sign-in Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={18} /> Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-[#3b5998] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#334d84] transition-all"
          >
            <FaFacebookF size={18} /> Facebook
          </button>
        </div>

        <hr className="border-t border-gray-300 my-4" />

        {/* Create Account Link */}
        <div className="text-center text-sm text-gray-700">
          Don’t have an account?
          <Link
            to="/register"
            className="ml-2 inline-block bg-transparent text-purple-600 border border-purple-600 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white transition-all"
          >
            Create an account
          </Link>
        </div>
      </form>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500 text-center">
        © 2024 - {new Date().getFullYear()} Marln LMS. All rights reserved.
        <div className="mt-2 space-x-2">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
