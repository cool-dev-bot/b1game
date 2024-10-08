import React, { useEffect, useState } from 'react';
import DashboardContent from './DashboardContent.jsx';
import { FaCog, FaSignOutAlt, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import SettingsLayout from '../settingcompo/Settings.jsx';
import SettingPortal from '../settingcompo/settingPortal.jsx';
import { motion } from 'framer-motion';
import { FaBackwardFast, FaBackwardStep } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPanel = () => {
  const [setting, setSetting] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({})
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('userInfo')))

  async function handleGetUser() {
    if (token) {
      try {
        // Set up the headers with the Bearer token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        // Make the request with the configured headers
        const res = await axios.get(`https://roulette-backend-pearl.vercel.app/api/users/me`, config);
        // Log the response or handle it as needed
        setUserDetails(res.data);
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching user data:', error);
      }
    }
  }

  useEffect(() => {
    handleGetUser()
  }, [token])

  function handleLogout() {
    setUserDetails({})
    localStorage.removeItem("userInfo");
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen  sm:mb-4 mb-12"
    style={{
      backgroundImage: `url('/bg.jpg')`,
      backgroundSize: 'cover', // or 'contain' depending on the fit you want
      backgroundPosition: 'center',
    }}>
      <div className="relative">
        {setting && (
          <SettingPortal>
            <SettingsLayout setSetting={setSetting} />
          </SettingPortal>
        )}
      </div>
      <motion.aside
        className="sm:w-64 w-full sm:h-screen h-[30%]  text-gray-100 flex-shrink-0"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        <div className="flex sm:flex-col flex-row items-center justify-between sm:justify-center mt-0 sm:mt-10 mb-4">
          <div className='flex items-center justify-between my-2 ml-32 sm:ml-0'>
            <img src="/logo.svg" alt="" className='sm:w-20 pt-1' />
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:items-center items-start justify-between sm:justify-center px-4 sm:px-0">
          <motion.img
            className="sm:w-24 sm:h-24 w-24 h-24  rounded-full object-cover"
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="sm:ml-0 ml-4">
            <h3 className="sm:mt-4 mt-8 font-bold text-sm sm:text-lg text-center">
              {userDetails ? userDetails.name : 'userName'}
            </h3>
            <p className="text-sm text-gray-400 text-center">{userDetails ? userDetails.email : 'user Email'}</p>
          </div>
        </div>
        <nav className="sm:mt-7 mt-4 sm:ml-10 mb-6">
          <ul className="flex sm:flex-col flex-row justify-evenly text-center">
            <li className="mt-3 text-center">
              <a
                href="/"
                className="flex sm:w-[80%] items-center px-4 py-2 text-sm sm:text-xl font-medium hover:bg-yellow-400  hover:text-[#131620] rounded-md"
              >
                <FaBackwardStep className="sm:mr-3 mr-2 sm:text-3xl text-xl text-yellow-500" />
                <p className=' '>back</p>
              </a>
            </li>
            <li className="mt-3" onClick={() => setSetting(true)}>
              <a
                href="#settings"
                className="flex sm:w-[80%] items-center px-4 py-2 text-sm sm:text-xl font-medium hover:bg-yellow-400 hover:text-[#131620] rounded-md"
              >
                <FaCog className="sm:mr-3 mr-2 sm:text-3xl text-yellow-400 text-xl" /> Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="fixed bottom-0 w-full p-4">
          <div onClick={() => handleLogout()}>
            <motion.button
              className="flex items-center justify-center sm:h-14 w-full sm:w-[15%] sm:m-0 px-4 py-2 text-sm text-[#131620] font-light sm:font-medium bg-yellow-500 rounded-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: .5, ease: 'easeOut' }}
            >
              <FaSignOutAlt className="sm:mr-2 mr-2 sm:text-2xl" /> Logout
            </motion.button>
          </div>
        </div>
      </motion.aside>
      <div className="flex-1">
        <header className="flex flex-row sm:flex-row items-center justify-between p-4  bg-[#1d2230] sm:bg-transparent shadow-md">
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
            <div className="relative mt-3 sm:mt-0 sm:ml-4 w-full sm:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="sm:w-full w-auto  text-gray-200 pl-10 pr-4 py-2 text-sm rounded-full focus:outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center justify-end w-80 sm:w-auto mt-2 sm:mt-0 space-x-4">
            <FaBell className="text-gray-100 sm:text-3xl text-2xl" />
            <FaUserCircle className="text-gray-100 sm:text-3xl text-2xl" />
          </div>
        </header>
        <DashboardContent  />
      </div>
    </div>
  );
};

export default AdminPanel;
