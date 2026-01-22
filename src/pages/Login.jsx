import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextApi/Context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    login,
    setLogin,
    formData,
    setFormData,
    formSubmit,
  } = useContext(GlobalContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient from-gray-100 to-gray-200 px-4">
      <form
        onSubmit={formSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {login ? "Login" : "Create Account"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {login
              ? "Welcome back, please login"
              : "Sign up to get started"}
          </p>
        </div>

        {/* Username (Signup only) */}
        {!login && (
          <input
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:bg-blue-500"
          />
        )}

        {/* Email */}
        <input
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          type="email"
          placeholder="Email address"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:bg-blue-500"
        />

        {/* Password */}
        <div className="space-y-2">
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:bg-blue-500"
          />

          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
              className="bg-blue-500"
            />
            {showPassword ? "Hide password" : "Show password"}
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-lg active:scale-95 cursor-pointer"
        >
          {login ? "Login" : "Signup"}
        </button>

        {/* Toggle Login / Signup */}
        <p className="text-center text-sm text-gray-600">
          {login ? "Don’t have an account?" : "Already have an account?"}{" "}
          <Link
            onClick={() => setLogin(!login)}
            className=" font-medium cursor-pointer hover:underline px-2 py-1 text-blue-900 rounded border "
          >
            {login ? "Signup" : "Login"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;