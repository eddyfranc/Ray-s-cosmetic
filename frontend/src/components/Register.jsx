import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { registerUser } from "../api/auth";

function Register() {
  const [firstName, setFirstName] = useState(""); // UI only (for now)
  const [lastName, setLastName] = useState("");   // UI only (for now)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await registerUser(email, password);
      setSuccess("Account created successfully!");
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");

      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      if (err.response?.data) {
        setError(
          typeof err.response.data === "string"
            ? err.response.data
            : JSON.stringify(err.response.data)
        );
      } else {
        setError("Registration failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-12 px-4">
      <h1 className="text-xl tracking-[0.3em] mb-4">REGISTER</h1>

      <p className="text-sm text-gray-600 mb-10">
        Please fill in the information below:
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6"
      >
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f3d8d1] py-4 tracking-widest font-medium hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "CREATING ACCOUNT..." : "CREATE MY ACCOUNT"}
        </button>
      </form>
    </div>
  );
}

export default Register;
