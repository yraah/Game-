import React from 'react';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-lg mx-auto">
        
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXIgJ4iqYIN2JiLO5m8kBdInrrQTbEt47mA&s" 
            alt="Logo"
            className="h-8"
          />
          <span className="text-xl font-bold text-blue-500 ml-2">FUN88</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-500 font-semibold">
            <MdAccountBalanceWallet className="text-xl mr-1" />
            <span>$1,990.6</span>
          </div>

          <FaBell className="text-gray-500 text-xl" />
          <FaUserCircle className="text-gray-500 text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
