import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    keepSignedIn: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-12 px-4">
      <h1 className="text-[28px] font-semibold text-center mb-6">
        Create an account
      </h1>

      <form className="flex flex-col items-center w-full max-w-sm gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full border border-gray-400 rounded px-4 py-2 text-sm focus:outline-none"
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name"
          className="w-full border border-gray-400 rounded px-4 py-2 text-sm focus:outline-none"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="w-full border border-gray-400 rounded px-4 py-2 text-sm focus:outline-none"
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-400 rounded px-4 py-2 text-sm focus:outline-none pr-10"
          />
          {showPassword ? (
            <FaEyeSlash
              className="absolute right-3 top-3 text-gray-500 text-lg cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEye
              className="absolute right-3 top-3 text-gray-500 text-lg cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        <label className="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            name="keepSignedIn"
            checked={formData.keepSignedIn}
            onChange={handleChange}
            className="mr-2"
          />
          Keep me signed in
        </label>

        <p className="text-[12px] text-center text-gray-700 leading-tight">
          By creating an account, I agree to the Carrentals{" "}
          <span className="text-blue-600">Terms and Conditions</span>
          <br />
          and <span className="text-blue-600">Privacy Statement</span>.
        </p>

        <button
          type="submit"
          className="bg-[#f3cbb7] text-white rounded-full px-6 py-3 text-sm font-semibold w-full cursor-not-allowed"
          disabled
        >
          Continue
        </button>

        <p className="text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-blue-600 cursor-pointer">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
