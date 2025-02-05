import React from "react";
import {
  FaMailBulk,
  FaPhone,
  FaMapPin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  const navigateToTerms = () => {
    window.open("/terms-and-conditions", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-3xl font-extrabold text-green-600 mb-4">
              MarketingBirbal
            </h3>
            <p className="text-gray-400 text-lg mb-4">
              Your trusted partner for comprehensive digital marketing solutions, web design, and development.
            </p>
            <p className="text-gray-500 text-sm">
              Ready to start your digital transformation? Let’s collaborate and take your business to the next level.
            </p>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-1.5s">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-green-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blogs")} className="text-gray-400 hover:text-green-500 transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <FaMailBulk size={20} className="mr-3" />
                birbaldigi@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone size={20} className="mr-3" />
                +91 7691863302
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapPin size={20} className="mr-3" />
                Sector 10 A, Guggoa, India
              </li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-2.5s">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Github"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-green-500 transition-colors"
          >
            © {currentYear} MarketingBirbal. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
