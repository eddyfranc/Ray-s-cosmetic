import React from 'react'

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 px-4">
      <h1 className="text-xl tracking-[0.3em] mb-4">LOGIN</h1>

      <p className="text-sm text-gray-600 mb-10">
        Please enter your e-mail and password:
      </p>

      {/* Form */}
      <form className="w-full max-w-xl space-y-6">
        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black"
        />

        {/* Password + Forgot */}
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-4 pr-36 focus:outline-none focus:border-black"
          />
          <a
            href="#"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#f3d8d1] py-4 tracking-widest font-medium hover:opacity-90 transition"
        >
          LOGIN
        </button>
      </form>

      {/* Footer Text */}
      <p className="mt-12 text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <a href="#" className="text-black underline">
          Create one
        </a>
      </p>
    </div>
  )
}

export default Login;
