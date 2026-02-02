import React from 'react'

function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-10 py-6 border-b border-gray-200">
        {/* Logo */}
        <div className="text-3xl font-light font-serif">
          Joanna K
        </div>

        {/* Top Right Links */}
        <div className="flex gap-6 text-xs tracking-widest">
          <a href="#" className="hover:opacity-70">ACCOUNT</a>
          <a href="#" className="hover:opacity-70">SEARCH</a>
          <a href="#" className="hover:opacity-70">CART (0)</a>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-[#f3d8d1]">
        <ul className="flex justify-center gap-10 py-4 text-sm tracking-widest font-medium">
          <li><a href="#" className="hover:opacity-70">HOME</a></li>
          <li><a href="#" className="hover:opacity-70">SHOP</a></li>
          <li><a href="#" className="hover:opacity-70">BEST SELLERS</a></li>
          <li><a href="#" className="hover:opacity-70">BUNDLES AND SETS</a></li>
          <li><a href="#" className="hover:opacity-70">GIFT CARDS</a></li>
          <li><a href="#" className="hover:opacity-70">ABOUT US</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
