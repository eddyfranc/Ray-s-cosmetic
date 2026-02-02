import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="text-xl mb-4 font-sans">
            Explore
          </Link>
          <ul className="space-y-2">
            <li>
              <Link
                to="/lipsticks"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Lip sticks
              </Link>
            </li>
            <li>
              <Link
                to="/eyeshadows"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Eye Shadow
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Lip Glows
              </Link>
            </li>
            <li>
              <Link
                to="/bodyscrubs"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Body scrubs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-4 font-sans">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contactpage"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-4 font-sans">Email Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full sm:w-auto px-4 py-2 rounded bg-white text-black placeholder-gray-300"

            />


            <button
              type="submit"
              className="bg-[#f3d8d1] text-black px-6 py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-[#FF7F50] hover:border hover:border-[#FF7F50]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

       <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Ray's Cosmetics. All rights reserved.</p>
         
        </div>
    </footer>
  );
};

export default Footer;
