import React from 'react'
import Modal from '../modal'
import { RxCross2 } from 'react-icons/rx'

function BtcWithdraw({ setWithdraw, setDespositPopUp, withDraw }) {

    function handleBackDeposit() {
        setWithdraw('withdraw')
    }

    function goNextToken() {
        setWithdraw('tokenwithdraw')
    }

    function handleWithdrawToDeposit() {
        setDespositPopUp(true)
        setWithdraw('')
    }

    return (
        <Modal>
            <div className="bg-[#131620] h-[100vh] overflow-hidden overflow-y-auto scrollbar-hide  w-[90vw] max-w-[400px] md:max-w-[70vw] lg:max-w-[60vw] p-4 md:p-6 lg:p-8 absolute  mx-auto top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%]">
                <div className="flex justify-between items-start">
                    {/* List Items */}
                    <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 font-light">
                        <li className="text-[#B1B6C6] rounded-md hover:text-yellow-400 hover:bg-[#CBD7FF13] bg-[#CBD7FF08] font-normal w-20 md:w-24 lg:w-28 h-8 cursor-pointer text-center px-2 py-1" onClick={() => handleWithdrawToDeposit()}>
                            DEPOSITE
                        </li>
                        <li className={`text-[#B1B6C6] rounded-md hover:text-yellow-400 hover:bg-[#CBD7FF13] bg-[#CBD7FF08] font-normal w-20 md:w-24 lg:w-28 h-8 cursor-pointer text-center py-1 ${withDraw !== '' ? 'text-yellow-400' : 'text-[#B1B6C6]'}`}>
                            WITHDRAW
                        </li>
                    </ul>
                    {/* Cancel Button */}
                    <button className="hover:bg-[#252937] text-2xl text-white px-3 py-4 md:px-4 rounded-full" onClick={() => setWithdraw('')}>
                        <RxCross2 />
                    </button>
                </div>

                {/* Back Button, Logo, Heading, and Hello Text */}
                <div className="flex items-center justify-start">
                    <button className="text-[#B1B6C6] rounded-md hover:text-yellow-400 hover:bg-[#CBD7FF13] bg-[#CBD7FF08] font-light w-16 md:w-20 lg:w-24 h-8 cursor-pointer text-center" onClick={() => handleBackDeposit()}>
                        Back
                    </button>
                    <img src={`/depositfirstPopup/${withDraw}.svg`} alt="Logo" className="w-8 h-8 ml-6 mr-2 md:ml-9 md:mr-3" />
                    <h1 className="text-gray-300 font-normal text-lg md:text-xl mr-2 md:mr-3 uppercase">
                        WITHDRAW {withDraw}
                    </h1>
                    <p className="text-yellow-400 font-light ml-2 md:ml-3 cursor-pointer" onClick={() => goNextToken()}>View Transactions</p>
                </div>

                {/* Big Div */}
                <div className="bg-[#CBD7FF08] mt-4 md:mt-6 p-4 md:p-6 h-auto w-[90%] mx-auto rounded-md">
                    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                        <p className="text-[#B1B6C6] text-sm md:text-base text-center md:text-left">
                            Send the amount of {withDraw} of your choice to <br /> the following address to receive the equivalent in Coins.
                        </p>
                        <img src="/btcDeposit/qr.svg" alt="Example" className="w-3/4 md:w-1/3 h-auto mx-auto md:mx-0" />
                    </div>
                    <p className="text-white font-light text-sm md:text-base mt-4 text-center md:text-left uppercase">
                        Your personal {withDraw} Withdraw address
                    </p>
                    <div className="flex flex-col md:flex-row items-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
                        <p className="w-full md:w-4/5 h-12 rounded-md bg-[#131620] border-none text-[#B1B6C6] text-sm md:text-base p-2  break-words">
                            EXTEPrYKv8PL6fyAiF3DSVPoRKjZTb7LYn
                        </p>
                        <button className="bg-[#86F454] font-medium text-black w-full text-sm md:w-[10vw] h-12  rounded-md uppercase">
                            Request withdrawal
                        </button>
                    </div>
                </div>

                {/* Second Div with Two Inputs */}
                <div className="bg-[#CBD7FF08] mt-4 md:mt-6 p-3 md:p-4 h-auto w-[90%] mx-auto rounded-md flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                    <p className="w-full md:w-4/5 h-10 rounded-md bg-[#131620] flex justify-start items-center gap-3 border-none text-[#B1B6C6] text-sm md:text-base p-2">
                        <img src="/btcDeposit/coin.svg" alt="Small Logo" className="w-5 h-5" />$100
                    </p>
                    <span className="text-[#B1B6C6] text-base md:text-lg">=</span>
                    <p className="w-full md:w-4/5 h-10 rounded-md bg-[#131620] flex justify-start items-center gap-3 border-none text-[#B1B6C6] text-sm md:text-base p-2">
                        <img src={`/depositfirstPopup/${withDraw}.svg`} alt="Small Logo" className="w-5 h-5" />0.0003234
                    </p>
                </div>

                {/* Final Paragraph */}
                <p className="text-[#B1B6C6] text-sm md:text-base mt-4 md:mt-6 text-center">
                    The value of BTC may change between now and the time we receive your payment
                </p>
            </div>
        </Modal>
    )
}

export default BtcWithdraw