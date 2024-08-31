import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import BasicSettings from './BasicSettings';
import SecuritySettings from './SecuritySettings';
import PersonalInfo from '../settingcompo/PersonalSettings .jsx';
import { useState } from 'react';

const SettingsLayout = ({ setSetting }) => {

  const [settingOption, setSettingOption] = useState('basic')

  return (
    <div className="bg-[#131620] p-4 sm:p-6 md:p-10 text-white h-auto mx-auto w-[600px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl sm:text-3xl">Settings</h2>
        <button className="text-xl sm:text-2xl" onClick={() => setSetting(false)}>
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-row justify-between bg-[#CBD7FF08] h-auto mb-4">
        <div onClick={() => setSettingOption('basic')} className="flex-1 text-gray-300 flex flex-col items-center text-md sm:text-lg hover:shadow-2xl hover:bg-yellow-400 hover:text-gray-800 p-4 rounded-lg text-center cursor-pointer">
          <img src="/public/settingCompo/Basic-gray.svg" alt="Basic" className="mb-1 h-6 md:h-8 sm:mb-1" />
          <p className=''>Basic</p>
        </div>
        <div onClick={() => setSettingOption('security')} className="flex-1 text-gray-300 flex flex-col items-center text-md sm:text-lg hover:shadow-2xl hover:bg-yellow-400 hover:text-gray-800 p-4 rounded-lg text-center cursor-pointer">
          <img src="/public/settingCompo/Sequrity.svg" alt="Security" className="mb-1 h-6 md:h-8 sm:mb-1" />
          <p>Security</p>
        </div>
        <div onClick={() => setSettingOption('personal')} className="flex-1 text-gray-300 flex flex-col items-center text-md sm:text-lg hover:shadow-2xl hover:bg-yellow-400 hover:text-gray-800 p-4 rounded-lg text-center cursor-pointer">
          <img src="/public/settingCompo/persnal-info.svg" alt="Personal Information" className="mb-1 h-6 md:h-8 sm:mb-1" />
          <p>Personal Info.</p>
        </div>
      </div>
      {settingOption == 'basic' ? <BasicSettings /> : null}
      {settingOption == 'security' ? <SecuritySettings /> : null}
      {settingOption == 'personal' ? < PersonalInfo /> : null}
    </div>
  );
};

export default SettingsLayout;
