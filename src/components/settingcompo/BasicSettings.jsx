import { useState } from 'react';
import { FaAngleDown, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { motion } from 'framer-motion';


const BasicSettings = ({ setSetting }) => {
  const [currency, setCurrency] = useState(true); // Assume true for USDT
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("US English");

  const handleToggle = () => {
    setCurrency(!currency);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="text-xl font-light mb-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Currency Setting
      </motion.p>

      <motion.div
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
        >
          <img src="https://i.ibb.co/bJWnhnt/Vector4.png" alt="" className="w-8 h-8 mr-2" />
          <p>USDT</p>
        </motion.div>
        <button
          className="flex items-center text-5xl p-2 rounded-full"
          onClick={handleToggle}
        >
          {currency ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaToggleOn className="text-yellow-400" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaToggleOff className="text-gray-300" />
            </motion.div>
          )}
        </button>
      </motion.div>

      <p className="text-xl mb-4">Language</p>

      <div className="relative">
        <motion.button
          className="flex items-center p-2 bg-[#131620] rounded-full w-full text-left"
          onClick={toggleDropdown}
          whileHover={{ scale: 1.05 }}
        >
          <img src="https://i.ibb.co/FWdSmyg/Clip-path-group.png" alt="Selected Language Flag" className="w-6 h-4 mr-2" />
          <span>{selectedLanguage}</span>
          <FaAngleDown className="ml-auto" />
        </motion.button>
        {isDropdownOpen && (
          <motion.div
            className="absolute mt-2 w-full bg-gray-700 rounded-lg shadow-lg z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              <motion.li
                className="flex items-center p-2 bg-gray-700 cursor-pointer"
                onClick={() => selectLanguage("US English")}
                whileHover={{ backgroundColor: "#2c2f35" }}
              >
                <img src="/path/to/us-flag.png" alt="US Flag" className="w-6 h-4 mr-2" />
                <span>Uk English</span>
              </motion.li>
              <motion.li
                className="flex items-center p-2 bg-gray-700 cursor-pointer"
                onClick={() => selectLanguage("UK English")}
                whileHover={{ backgroundColor: "#2c2f35" }}
              >
                <img src="/path/to/uk-flag.png" alt="UK Flag" className="w-6 h-4 mr-2" />
                <span>Us English</span>
              </motion.li>
              <motion.li
                className="flex items-center p-2 bg-gray-700 cursor-pointer"
                onClick={() => selectLanguage("Other Language")}
                whileHover={{ backgroundColor: "#2c2f35" }}
              >
                <img src="/path/to/other-flag.png" alt="Other Flag" className="w-6 h-4 mr-2" />
                <span>Other Language</span>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BasicSettings;
