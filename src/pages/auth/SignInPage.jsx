import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm border border-gray-300 rounded-lg shadow-md pt-6 px-6 pb-8">
        <div className="flex justify-center mb-2">
          <span className="text-[22px] font-bold text-[#f16821]">Aut</span>
          <span className="text-[22px] font-bold text-black">Rova</span>
          <span className="text-xs text-gray-500 ml-1">.com</span>
        </div>
        <div className="flex justify-center -mt-1 mb-5">
          <span className="text-[10px] text-gray-500">
            transforming accessibility
          </span>
        </div>

        <form>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full h-[42px] border border-gray-400 rounded px-3 text-[15px] focus:outline-none"
              required
            />
          </div>

          <div className="mb-3 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full h-[42px] border border-gray-400 rounded px-3 pr-10 text-[15px] focus:outline-none"
              required
            />
            {showPassword ? (
              <FaEyeSlash
                className="absolute right-3 top-3.5 text-gray-600 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="absolute right-3 top-3.5 text-gray-600 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="flex items-center mb-4 text-[13px]">
            <input
              type="checkbox"
              name="keepSignedIn"
              checked={formData.keepSignedIn}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="keepSignedIn">Keep me signed in</label>
          </div>

          <div className="text-[11px] text-gray-600 leading-tight mb-5">
            By signing in, I agree to the{" "}
            <Link to="/terms" className="text-blue-600 underline">
              Carrentals Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-600 underline">
              Privacy Statement
            </Link>
            .
          </div>

          <button
            type="submit"
            className="w-full h-[42px] bg-[#f4c6b4] text-gray-600 rounded text-[15px] cursor-not-allowed"
            disabled={!formData.email || !formData.password}
          >
            Sign in
          </button>

          <div className="mt-3 text-center text-[13px]">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 underline">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
