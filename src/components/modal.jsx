import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
            <div className='bg-[#131620] p-5 max-w-[900px] rounded-xl relative'>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
