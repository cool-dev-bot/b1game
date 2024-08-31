import React from 'react';
import ReactDOM from 'react-dom';

const SettingPortal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start h-screen overflow-hidden overflow-y-auto'>
            {children}
        </div>,
        document.body
    );
};

export default SettingPortal;
