import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return (
  <>
    <div className={`bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80 text-white h-screen w-64 flex flex-col justify-between fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>
      <div className="mt-12 p-4">
        <h2 className="text-2xl font-bold">Welcome, user!</h2>
      </div>

      <nav className="flex-1 text-white">
        <ul className="space-y-4">
          <li>
            <Link to="dashboard" className="block py-2 px-4 hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link to="blog" className="block py-2 px-4 hover:underline">Resources</Link>
          </li>
          <li>
            <Link to="social" className="block py-2 px-4 hover:underline">Community</Link>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        <p className="text-sm">&copy; 2024 Happy Cats</p>
      </div>
    </div>

 
    <button
      className="fixed top-4 left-4 p-2 focus:outline-none z-10"
      onClick={toggleSidebar}
    >
      {isOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-blue-500" />}
    </button>
    </>
  );
};

export default Sidebar;
