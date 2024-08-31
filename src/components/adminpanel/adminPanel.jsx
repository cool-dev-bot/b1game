import React, { useState } from 'react';
import DashboardContent from './DashboardContent.jsx';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import Modal from '../modal.jsx';
import SettingsLayout from '../settingcompo/Settings.jsx';
import SettingPortal from '../settingcompo/settingPortal.jsx';
import { motion } from 'framer-motion';
const AdminPanel = () => {
  const [setting, setSetting] = useState(false)

  return  (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100 sm:mb-4 mb-12">
      <div className="relative">
        {setting && (
          <SettingPortal>
            <SettingsLayout setSetting={setSetting} />
          </SettingPortal>
        )}
      </div>
      <motion.aside
        className="sm:w-64 w-full sm:h-screen h-[30%] bg-[#131620] text-gray-100 flex-shrink-0"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        <div className="flex sm:flex-col flex-row items-center justify-between sm:justify-center mt-4 sm:mt-10 mb-4">
          <div className="md:text-2xl ml-32 sm:ml-2 text-lg font-medium sm:font-bold">
            Admin Panel
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:items-center items-start justify-between sm:justify-center px-4 sm:px-0">
          <motion.img
            className="w-24 h-24 rounded-full object-cover"
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="sm:ml-0 ml-4">
            <h3 className="sm:mt-4 mt-8 ml-3 font-light text-sm sm:text-lg ">
              Admin Name
            </h3>
            <p className="text-sm text-gray-400 ">admin@example.com</p>
          </div>
        </div>
        <nav className="sm:mt-10 mt-4 sm:ml-10 mb-6">
          <ul className="flex sm:flex-col flex-row justify-evenly text-center">
            <li className="mt-3 text-center">
              <a
                href="/"
                className="flex sm:w-[80%] items-center px-4 py-2 text-sm sm:text-xl font-medium hover:bg-yellow-400 hover:text-[#131620] rounded-md"
              >
                <FaHome className="sm:mr-3 mr-2 sm:text-3xl text-xl" /> Home
              </a>
            </li>
            <li className="mt-3" onClick={() => setSetting(true)}>
              <a
                href="#settings"
                className="flex sm:w-[80%] items-center px-4 py-2 text-sm sm:text-xl font-medium hover:bg-yellow-400 hover:text-[#131620] rounded-md"
              >
                <FaCog className="sm:mr-3 mr-2 sm:text-3xl text-xl" /> Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="fixed bottom-0 w-full p-4">
      <a href="/">
        <motion.button
          className="flex items-center justify-center sm:h-14 w-full sm:w-[15%] sm:m-0 px-4 py-2 text-sm text-[#131620] font-light sm:font-medium bg-yellow-500 rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: .5, ease: 'easeOut' }}
        >
          <FaSignOutAlt className="sm:mr-2 mr-2 sm:text-2xl" /> Logout
        </motion.button>
      </a>
    </div>
      </motion.aside>
      <div className="flex-1">
        <header className="flex flex-row sm:flex-row items-center justify-between p-4 bg-[#131620] shadow-md">
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
            <div className="relative mt-3 sm:mt-0 sm:ml-4 w-full sm:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="sm:w-full w-auto pl-10 pr-4 py-2 text-sm bg-gray-100 rounded-full focus:outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center justify-end w-80 sm:w-auto mt-2 sm:mt-0 space-x-4">
            <FaBell className="text-gray-100 sm:text-3xl text-2xl" />
            <FaUserCircle className="text-gray-100 sm:text-3xl text-2xl" />
          </div>
        </header>
        <DashboardContent />
      </div>
    </div>
  );
};

export default AdminPanel;
