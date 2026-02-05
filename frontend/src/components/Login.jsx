import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import ForgotPassword from "./ForgotPassword";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      
      // Optionally save token in localStorage or context
      localStorage.setItem("token", data.token); // if API returns token
      localStorage.setItem("user", JSON.stringify(data.user)); // optional

      // Redirect to home page
      navigate("/home");
    } catch (err) {
      // Show exact backend error
      if (err.response?.data) {
        if (err.response.data.non_field_errors) {
          setError(err.response.data.non_field_errors[0]);
        } else if (typeof err.response.data === "object" && err.response.data.error) {
          setError(err.response.data.error);
        } else if (typeof err.response.data === "string") {
          setError(err.response.data);
        } else {
          setError("Invalid email or password.");
        }
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("Login failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-12 px-4 bg-gray-50">
      <h1 className="text-2xl font-bold tracking-widest mb-4">LOGIN</h1>

      <p className="text-sm text-gray-600 mb-10 text-center">
        Please enter your e-mail and password
      </p>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6 bg-white p-8 rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 pr-36 rounded focus:outline-none focus:border-black"
          />
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f3d8d1] py-3 font-medium tracking-widest rounded hover:bg-pink-200 transition-colors disabled:opacity-50"
        >
          {loading ? "LOGGING IN..." : "LOGIN"}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-black underline">
          Create one
        </a>
      </p>

      {showForgotPassword && (
        <ForgotPassword onBack={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
}

export default Login;
