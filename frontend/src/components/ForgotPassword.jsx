import React, { useState } from "react";
import { forgotPassword, resetPassword } from "../api/auth";

function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // 1: enter email, 2: enter code and new password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSendCode = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await forgotPassword(email);
      setSuccess("If an account with this email exists, a reset code has been sent.");
      setStep(2);
    } catch (err) {
      setError("Failed to send reset code. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await resetPassword(email, resetCode, newPassword);
      setSuccess("Password has been reset successfully.");
      setTimeout(() => onBack(), 2000); // Go back to login after 2 seconds
    } catch (err) {
      if (err.response?.data) {
        setError(err.response.data.non_field_errors?.[0] || "Invalid reset code or email.");
      } else {
        setError("Failed to reset password. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <button
          onClick={onBack}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        {step === 1 ? (
          <form onSubmit={handleSendCode}>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email address and we'll send you a reset code.
            </p>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded mb-4 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f3d8d1] py-3 font-medium tracking-widest rounded hover:bg-pink-200 transition-colors disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND RESET CODE"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <p className="text-sm text-gray-600 mb-4">
              Enter the reset code and your new password.
            </p>
            <input
              type="text"
              placeholder="Reset Code"
              required
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded mb-4 focus:outline-none focus:border-black"
            />
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded mb-4 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f3d8d1] py-3 font-medium tracking-widest rounded hover:bg-pink-200 transition-colors disabled:opacity-50"
            >
              {loading ? "RESETTING..." : "RESET PASSWORD"}
            </button>
          </form>
        )}

        <button
          onClick={onBack}
          className="w-full mt-4 text-sm text-gray-600 hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
