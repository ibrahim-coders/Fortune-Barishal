import bannerLogo from '../../Image/logo-footer.png';
import bg from '../../Image/bg-shadow.png';
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 py-4">
        {/* Subscription Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center w-full px-4 h-full pb-6 mx-auto z-10">
          <div className="relative mx-20">
            <img
              className="bg-gray-800 my-6 rounded-md w-full object-cover h-80 relative"
              src={bg}
              alt="Background"
            />
            <div className="absolute top-4 md:top-20 left-1/2 transform -translate-x-1/2 text-center w-full px-4 h-full pb-6 z-40">
              <h6 className="text-2xl font-bold text-white mb-4">
                Subscribe to our Newsletter
              </h6>
              <p className="text-gray-500 text-sm mb-4">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="text-sm px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-red-700 text-white px-4 py-2 rounded-r-md hover:bg-red-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="bg-gray-950 py-10 pt-32 relative">
          <img
            className="h-20 w-20 mx-auto mb-10"
            src={bannerLogo}
            alt="Footer Logo"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 text-start px-6 md:px-10 gap-8">
            {/* About Us */}
            <nav>
              <h6 className="text-2xl font-bold text-white mb-4">About Us</h6>
              <p className="text-gray-500 text-sm">
                We are a passionate team dedicated to providing the best service
                to our customers.
              </p>
            </nav>
            {/* Quick Links */}
            <nav>
              <h6 className="text-2xl font-bold text-white mb-4">
                Quick Links
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-sm text-gray-500 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-500 hover:text-white"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-gray-500 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-500 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            {/* Subscribe */}
            <div>
              <h6 className="text-2xl font-bold text-white mb-4">Subscribe</h6>
              <p className="text-gray-500 text-sm mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="text-sm px-4 py-2 w-full rounded-l-md focus:outline-none"
                />
                <button className="bg-red-700 text-white px-4 py-2 rounded-r-md hover:bg-red-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-slate-500 my-6 mx-4"></div>
          <div className="p-4 text-center">
            <p className="text-sm text-gray-500">
              &copy; All rights reserved by ACME Industries Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
