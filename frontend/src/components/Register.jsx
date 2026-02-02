import React from 'react'

function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 px-4">
      <h1 className="text-xl tracking-[0.3em] mb-4">REGISTER</h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-10">
        Please fill in the information below:
      </p>

      {/* Form */}
      <form className="w-full max-w-xl space-y-6">
        <input
          type="text"
          placeholder="First name"
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <input
          type="text"
          placeholder="Last name"
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-[#f3d8d1] py-4 tracking-widest font-medium hover:opacity-90 transition"
        >
          CREATE MY ACCOUNT
        </button>
      </form>
    </div>
  )
}

export default Register
