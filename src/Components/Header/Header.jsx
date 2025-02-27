import React, { useState, useRef, useEffect } from "react";
import { Bell, LineChart, Search, Settings, ChevronDown } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="w-full h-full  ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and User Section */}
        <div className="flex items-center gap-4">
          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-800 transition-colors"
            >
              {/* Avatar */}
              <div className="h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center border border-gray-700 overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="h-full w-full object-cover"
                />
                
              </div>

              <div className="hidden md:block text-left">
                <p className="text-white text-sm font-medium">Trader Pro</p>
                <p className="text-gray-400 text-xs">Anubhav</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900 text-white border border-gray-800 z-10">
                <div className="py-1">
                  <p className="px-4 py-2 text-sm font-medium border-b border-gray-800">
                    My Account
                  </p>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
                    Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
                    Settings
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
                    Subscription
                  </button>
                  <div className="border-t border-gray-800 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Deposit Button */}
          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm px-4 py-2 font-medium transition-colors">
            Deposit <span className="ml-1">🔒</span>
          </button> */}

          {/* Search Bar */}
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full bg-gray-900 border border-gray-800 text-white pl-9 w-40 lg:w-64 h-9 focus:outline-none focus:border-purple-500 text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Bell className="h-5 w-5 text-gray-300" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-purple-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Settings className="h-5 w-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
