import React from 'react';
import { motion } from 'framer-motion';
const PersonalInfo = () => {
  return (
    <div className="p-4">
    {/* User Information Section */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <p className="md:text-xl font-light text-lg mb-2">User Information</p>
      <p className="mb-6 text-sm font-light text-gray-400 md:text-lg">
        For a more considerate service, please fill in the following information to let us know about you. Thank you!
      </p>
    </motion.div>

    {/* User Info Form */}
    <motion.form
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* First Line: Nick Name and Date of Birth */}
      <div className="grid grid-cols-2 gap-4">
        <motion.input
          type="text"
          placeholder="Nick Name"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-2 bg-[#CBD7FF08] text-gray-400 md:h-14 md:text-lg text-[1rem] font-light rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </div>

      {/* Second Line: First Name and Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <motion.input
          type="text"
          placeholder="First Name"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        <motion.input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
      </div>

      {/* Third Line: Country and Zip/Postal Code */}
      <div className="grid grid-cols-2 gap-4">
        <motion.select
          className="w-full p-2 bg-[#131620] text-gray-400 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="IN">India</option>
          <option value="PAK">Pakistan</option>
          <option value="CHINA">China</option>
          <option value="BANG">Bangladesh</option>
          <option value="SHRI">Sri Lanka</option>
        </motion.select>
        <motion.input
          type="text"
          placeholder="Zip/Postal Code"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
      </div>

      {/* Fourth Line: Address and City */}
      <div className="grid grid-cols-2 gap-4">
        <motion.input
          type="text"
          placeholder="Address"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
        <motion.input
          type="text"
          placeholder="City"
          className="w-full p-2 bg-[#CBD7FF08] md:h-14 md:text-lg text-[.8rem] rounded-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />
      </div>

      {/* Update Button */}
      <motion.button
        className="w-full bg-yellow-400 text-gray-800 font-light md:h-14 md:text-lg sm:font-medium py-2 rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Update
      </motion.button>
    </motion.form>
  </div>
  );
};

export default PersonalInfo;
