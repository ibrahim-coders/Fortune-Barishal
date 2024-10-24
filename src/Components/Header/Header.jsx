import { useState } from 'react';
import { BsCoin } from 'react-icons/bs';
import logo from '../../Image/logo.png';

const Header = ({ countIncrease }) => {
  console.log(countIncrease);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="max-w-screen-xl container w-11/12 mx-auto py-6">
        <nav className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt=" Logo" className="w-14 h-14" />
          </div>

          <div className="flex gap-8  items-center">
            {/* Navbar Links */}
            <ul id="menu" className="hidden lg:flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold hover:text-green-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold hover:text-green-500"
                >
                  Fixtire
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold hover:text-green-500"
                >
                  Teams
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xl font-semibold hover:text-green-500"
                >
                  Schedules
                </a>
              </li>
            </ul>

            <button className="px-6 py-3 bg-gray-300 text-xl text-black rounded-lg font-semibold shadow-md flex gap-2 items-center">
              {countIncrease} Coin <BsCoin />
            </button>

            {/* Hamburger Menu (Mobile) */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul
            id="mobile-menu"
            className="lg:hidden absolute top-20 left-0 w-full h-auto bg-white shadow-md flex-col items-center space-y-4 py-4 "
          >
            <li>
              <a
                href="#"
                className="text-xl font-semibold block text-center hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl font-semibold block text-center hover:text-blue-500"
              >
                Fixtire
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl font-semibold block text-center hover:text-blue-500"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl font-semibold block text-center hover:text-blue-500"
              >
                Schedules
              </a>
            </li>
          </ul>
        )}
      </header>
      {/* End Navbar */}
    </>
  );
};

export default Header;
