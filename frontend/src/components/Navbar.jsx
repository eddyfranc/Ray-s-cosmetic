import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-10 py-6 border-b border-gray-200">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-light font-serif hover:opacity-80"
        >
          Ray&apos;s Cosmetics
        </Link>

        {/* Top Right Links */}
        <div className="flex gap-6 text-xs tracking-widest">
          <Link to="/login" className="hover:opacity-70">
            ACCOUNT
          </Link>

          <Link to="/search" className="hover:opacity-70">
            SEARCH
          </Link>

          <Link to="/cart" className="hover:opacity-70">
            CART (0)
          </Link>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-[#f3d8d1]">
        <ul className="flex justify-center gap-10 py-4 text-sm tracking-widest font-medium">
          <li>
            <Link to="/home" className="hover:opacity-70">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:opacity-70">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/best-sellers" className="hover:opacity-70">
              BEST SELLERS
            </Link>
          </li>
          <li>
            <Link to="/bundles" className="hover:opacity-70">
              BUNDLES AND SETS
            </Link>
          </li>
          <li>
            <Link to="/gift-cards" className="hover:opacity-70">
              GIFT CARDS
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:opacity-70">
              ABOUT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
