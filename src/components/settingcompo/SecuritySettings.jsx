import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
const SecuritySettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showAccountPassword, setShowAccountPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowAccountPassword = () => setShowAccountPassword(!showAccountPassword);

  return (
    <div className="p-4 ">
      {/* Your Sessions Section */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="md:text-xl text-lg mb-4">Your Sessions</p>
        <button className="w-full bg-yellow-400 text-gray-800 font-light md:h-14 md:text-lg sm:font-medium py-2 rounded-lg">
          View your sessions
        </button>
      </motion.div>

      {/* Change Password Section */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="md:text-xl text-lg mb-4">Change Password</p>

        {/* Old Password Input */}
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Old Password"
            className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-xl  rounded-lg"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* New Password Input */}
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="New Password"
            className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-xl md:font-light  rounded-lg"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm New Password Input */}
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm New Password"
            className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-xl  rounded-lg"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Small Logo and Tag */}
        <div className="flex items-center mb-6">
          <img src="/public/settingCompo/factoril-logo.svg" alt="" className="md:w-6 md:h-6 w-5 h-5 mr-2" />
          <p className='md:text-sm text-[.8rem] text-gray-400'>Re-login will be required after changing the password.</p>
        </div>
      </motion.div>

      {/* Save Changes Button */}
      <motion.button
        className="w-full bg-yellow-400 text-gray-800 font-light md:h-14 md:text-lg sm:font-medium py-2 rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Save Changes
      </motion.button>

      {/* Two-Factor Authentication Section */}
      <motion.div
        className="mb-6 mt-14"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-lg md:text-2xl mt-12 md:mt-14">🔑 Two-Factor Authentication</h3>
        <p className='text-gray-400 font-light md:text-xl'>
          Download and install {' '}
          <a href="#" className="text-blue-600 underline">Google Authentication</a> Enable Two-factor Authentication to protect your account from unauthorized access.
        </p>
        <p className="text-gray-400 font-light md:text-xl mt-4 mb-4">
          Scan the QR code with your Google Authenticator App or enter the secret key manually.
        </p>

        {/* QR Code */}
        <motion.img
          src="settingCompo/qrCode.svg"
          alt="QR Code"
          className="w-64 h-64 mb-7 md:mb-12 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Your Secret Key */}
        <input
          type="text"
          placeholder="Your secret key"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-xl text-centery-300 rounded-lg"
        />

        {/* Instructional Paragraph */}
        <p className="mb-8 mt-3 text-gray-400 font-light md:text-xl">
          Write down this code, never reveal it to others. You can use it to regain access to your account if there is no access to the authenticator.
        </p>

        {/* Verification Code Section */}
        <p className="mb-8 text-white font-light text-xl md:text-2xl">Verification Code</p>

        {/* Your Account Password Input */}
        <div className="relative mb-3 mb:mb-8">
          <input
            type={showAccountPassword ? 'text' : 'password'}
            placeholder="Your account password"
            className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-xl  rounded-lg"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={toggleShowAccountPassword}
          >
            {showAccountPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* 2FA Code Input */}
        <input
          type="text"
          placeholder="2FA Code"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 mt-2 mb-8 md:text-xl text-centery-300 rounded-lg"
        />

        {/* Enable Button */}
        <motion.button
          className="w-full bg-yellow-400 text-gray-800 font-light md:h-14 md:text-lg sm:font-medium py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enable
        </motion.button>
      </motion.div>
    </div>
  );
}

export default SecuritySettings;
