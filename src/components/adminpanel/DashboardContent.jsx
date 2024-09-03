import React from 'react';
import { motion } from 'framer-motion';
const DashboardContent = () => {

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="p-6 bg-[#131620] h-auto">
     <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Cards */}
      <motion.div
        className="p-4 bg-[#1f2331] rounded-lg shadow-md"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-lg font-semibold text-yellow-500 sm:text-xl">Today's Earnings</h2>
        <p className="mt-2 text-gray-200 sm:text-lg">1,234</p>
      </motion.div>

      <motion.div
        className="p-4 bg-[#1f2331] rounded-lg shadow-md"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-yellow-500 sm:text-xl">New Orders</h2>
        <p className="mt-2 text-gray-200 sm:text-lg">567</p>
      </motion.div>

      <motion.div
        className="p-4  bg-[#1f2331] rounded-lg shadow-md"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      >
        <h2 className="text-lg font-semibold text-yellow-500 sm:text-xl">Revenue</h2>
        <p className="mt-2 text-gray-200 sm:text-lg">$12,345</p>
      </motion.div>
    </div>
      {/* Example table or additional content */}
 
    <motion.div
      className="bg-[#1f2331] rounded-lg shadow-md p-4 sm:p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-lg font-semibold text-gray-300 mb-4 sm:text-xl">Recent Orders</h2>
      <motion.table 
        className="min-w-full  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <thead>
          <tr className=' text-yellow-500'>
            <th className="py-2 text-sm sm:text-base">Order ID</th>
            <th className="py-2 text-sm sm:text-base">Customer</th>
            <th className="py-2 text-sm sm:text-base">Amount</th>
            <th className="py-2 text-sm sm:text-base">Status</th>
          </tr>
        </thead>
        <tbody className=' text-gray-200   sm:justify-around'>
          <motion.tr 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className=''
          >
            <td className="py-2 text-sm sm:text-base">#12345</td>
            <td className="py-2 text-sm sm:text-base ">John Doe</td>
            <td className="py-2 text-sm sm:text-base">$250</td>
            <td className="py-2 text-sm sm:text-base ">Completed</td>
          </motion.tr>
          {/* More rows as needed */}
        </tbody>
      </motion.table>
    </motion.div>
    </div>

  );
};

export default DashboardContent;
