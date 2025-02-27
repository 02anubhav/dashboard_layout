import React, { useState } from "react";
import './menubar.css'
import {
  ChevronDown,
  ChevronUp,
  User,
  Settings,
  CreditCard,
  LogOut,
} from "lucide-react";

// UserDropdown Component
const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <div className="dropdown-toggle-content">
          <div className="dropdown-avatar">
            <img
              src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt="User"
              className="dropdown-avatar-image"
            />
          </div>
          <div className="dropdown-user-info">
            <span className="dropdown-user-name">Trader Pro</span>
            <span className="dropdown-user-role">Anubhav</span>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp size={16} className="dropdown-chevron" />
        ) : (
          <ChevronDown size={16} className="dropdown-chevron" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <p className="dropdown-header-text">My Account</p>
          </div>

          <MenuItem icon={<User size={16} />} label="Profile" />
          <MenuItem icon={<Settings size={16} />} label="Settings" />
          <MenuItem icon={<CreditCard size={16} />} label="Subscription" />

          <div className="dropdown-divider"></div>
          <MenuItem
            icon={<LogOut size={16} />}
            label="Logout"
            className="dropdown-item-danger"
          />
        </div>
      )}
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ icon, label, className = "" }) => (
  <a href="#" className={`dropdown-item ${className}`}>
    <span className="dropdown-item-icon">{icon}</span>
    <span className="dropdown-item-label">{label}</span>
  </a>
);

export default Menubar;
