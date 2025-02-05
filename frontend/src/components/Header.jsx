  import React, { useState } from "react";
  import { Menu, X, ChevronDown } from "lucide-react";

  const Header = ({
    isMenuOpen,
    toggleMenu,
    activeSection,
    scrollToSection,
    user,
    toggleAccountPopup,
    logout,
  }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const menuItems = ["home", "about", "services", "blogs", "contact"];

    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white via-yellow-50 to-white/80 backdrop-blur-md shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo Section */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center focus:outline-none"
          >
            <img
              src="https://placehold.co/50x50/FFD700/000000.png?text=Logo"
              alt="Logo"
              className="h-12 w-12 rounded-full border-4 border-yellow-500 shadow-lg"
            />
            <span
              className="ml-3 text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent"
              style={{
                fontFamily: "Pacifico, cursive",
                lineHeight: "1.8",
              }}
            >
              MarketingBirbal.
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item
                    ? "text-green-600 font-semibold border-b-2 border-green-600"
                    : "text-gray-600 hover:text-green-500"
                } transition-all duration-200 text-lg`}
              >
                {item}
              </button>
            ))}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="capitalize text-green-600 font-semibold flex items-center text-lg hover:text-green-800 transition-all duration-200"
                >
                  Welcome, {user}
                  <ChevronDown size={20} className="ml-2" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                    <button
                      onClick={() => {
                        scrollToSection("profile");
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-500"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={toggleAccountPopup}
                className="capitalize text-gray-600 hover:text-green-500 transition-colors duration-200 text-lg"
              >
                Account
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t">
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 rounded-md text-base font-medium capitalize text-gray-600 hover:text-green-500 hover:bg-yellow-100 transition-all"
                >
                  {item}
                </button>
              ))}
              {user ? (
                <div>
                  <button
                    onClick={() => scrollToSection("profile")}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-500"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu(); // Close menu after logout
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    toggleAccountPopup();
                    toggleMenu(); // Close menu after opening the account popup
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-500"
                >
                  Account
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    );
  };

  export default Header;
