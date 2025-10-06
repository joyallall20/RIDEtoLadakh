import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AxiosInstence } from "../../Api/AxiosInstence";
import { ApiPath } from "../../Api/ApiPath";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import HomepageSlider from "../../Componants/Layout/HomepageSlider";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // Ref to lock scroll only on this container
  const containerRef = useRef(null);

  useEffect(() => {
    // Disable scroll when component mounts
    if (containerRef.current) {
      disableBodyScroll(containerRef.current);
    }

    // Enable scroll when component unmounts
    return () => {
      if (containerRef.current) enableBodyScroll(containerRef.current);
      clearAllBodyScrollLocks();
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        Toastify({
          text: "Passwords must match!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "red",
        }).showToast();
        return;
      }

      const response = await AxiosInstence.post(ApiPath.Auth.Signup, {
        name: data.fullName,
        email: data.email,
        password: data.password,
      });

      Toastify({
        text: "✅ SignUp Successful!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast();

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      Toastify({
        text: error.response?.data?.message || "❌ Error signing up",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
    }
  };

  return (
    <div ref={containerRef} className="w-screen h-screen relative">
      {/* Background Slider */}
      <HomepageSlider />

      {/* Heading */}
      <h1
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="absolute top-3 left-1/2 transform -translate-x-1/2 text-black border-2 font-extrabold text-7xl z-20"
      >
        RIDEtoLADAKH
      </h1>

      {/* SignUp Box */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    backdrop-blur-sm bg-white shadow-lg rounded-xl p-8 w-120 z-20"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            className="p-2 rounded-md border focus:outline-none"
            placeholder="Full Name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 3, message: "At least 3 characters" },
            })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}

          <input
            className="p-2 rounded-md border focus:outline-none"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            className="p-2 rounded-md border focus:outline-none"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            type="password"
            className="p-2 rounded-md border focus:outline-none"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
