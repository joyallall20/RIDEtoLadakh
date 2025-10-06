import React, { useEffect, useRef , useContext} from "react";
import { useForm } from "react-hook-form";
import { ApiPath } from "../../Api/ApiPath";
import { AxiosInstence } from "../../Api/AxiosInstence";
import { useNavigate } from "react-router-dom";
import HomepageSlider from "../../Componants/Layout/HomepageSlider";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { LoginContex } from "../../Context/LoginContex";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import {jwtDecode} from 'jwt-decode'

import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const {login, googleLogin}= useContext(LoginContex)

  // Lock scroll
  useEffect(() => {
    if (containerRef.current) disableBodyScroll(containerRef.current);
    return () => {
      if (containerRef.current) enableBodyScroll(containerRef.current);
      clearAllBodyScrollLocks();
    };
  }, []);

  const onsubmit = async (data) => {
  try {
    const response = await AxiosInstence.post(ApiPath.Auth.Login, data);
    console.log(response.data )
    // Update context (this also saves to localStorage)
    login(response.data.token, response.data.user);
    if(login){
      console.log(response.data)
    }
    // Show success toast
    Toastify({
      text: `✅ Welcome ${response.data.user.name}!`,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "green",
    }).showToast();

    navigate("/");
  } catch (error) {
    console.error("Login failed", error);

    // Show error toast
    Toastify({
      text: "❌ Login failed. Check your credentials.",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
    }).showToast();
  }
};

  return (
    <div ref={containerRef} className="w-screen h-screen relative overflow-hidden">
      {/* Heading */}
      <h1
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-black absolute z-10 top-5 border-2 font-extrabold text-7xl left-1/2 transform -translate-x-1/2"
      >
        RIDEtoLADAKH
      </h1>

      {/* Blurred Background Slider */}
      <div className="absolute inset-0 blur-md">
        <HomepageSlider />
      </div>

      {/* Centered Login Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
            <input
              placeholder="Email"
              {...register("email", { required: "Email is Required" })}
              className="p-3 rounded-md border border-gray-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is Required" })}
              className="p-3 rounded-md border border-gray-300"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}

            <button
              type="submit"
              className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition"
            >
              Submit
            </button>
            <GoogleLogin
  onSuccess={(credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    // Store in context
    googleLogin(decoded);

    // Optional: show toast
    Toastify({
      text: `✅ Welcome ${decoded.name}!`,
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();

    navigate("/"); // redirect after login
  }}
  onError={() => {
    console.log("Google login failed");
    Toastify({
      text: "❌ Google login failed",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "red",
    }).showToast();
  }}
  auto_select={true}
/>   
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
