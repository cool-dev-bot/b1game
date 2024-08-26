import React from 'react'
import Modal from '../modal'
import { RxCross2 } from 'react-icons/rx'

function BtcDeposit({ setBtcDespositPopUp, setDespositPopUp, setTokenDespositPopUp, setWithdraw }) {

    function handleBtcDeposit() {
        setBtcDespositPopUp(false)
        setDespositPopUp(true)
    }

    function goNextToken() {
        setBtcDespositPopUp(false)
        setTokenDespositPopUp(true)
    }

    function handleWithdraw() {
        setWithdraw('withdraw')
        setDespositPopUp(false)
        setBtcDespositPopUp(false)
        setTokenDespositPopUp(false)
    }

    return (
        <Modal>
            <div className="bg-[#131620] h-[100vh] overflow-hidden overflow-y-auto scrollbar-hide  w-[90vw] max-w-[400px] md:max-w-[70vw] lg:max-w-[60vw] p-4 md:p-6 lg:p-8 absolute  mx-auto top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%]">
                <div className="flex justify-between items-start">
                    {/* List Items */}
                    <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 font-light">
                        <li className="text-[#B1B6C6] rounded-md hover:text-yellow-400 hover:bg-[#CBD7FF13] bg-[#CBD7FF08] font-normal w-20 md:w-24 lg:w-28 h-8 cursor-pointer text-center px-2 py-1">
                            DEPOSITE
                        </li>
                        <li className="text-[#B1B6C6] rounded-md hover:text-yellow-400 hover:bg-[#CBD7FF13] bg-[#CBD7FF08] font-normal w-20 md:w-24 lg:w-28 h-8 cursor-pointer text-center py-1" onClick={() => handleWithdraw()}>
                            WITHDRAW
                        </li>
                    </ul>
                    {/* Cancel Button */}
                    <button className="hover:bg-[#252937] text-2xl text-white px-3 py-4 md:px-4 rounded-full">
                        <RxCross2 />
                    </button>
                </div>

                {/* Back Button, Logo, Heading, and Hello Text */}
                <div className="flex items-center justify-start">
                    <button className="text-[#B1B6C6] rounded-md hover:text-yellow-400 hover:bg-[#CBD7FF13] bg-[#CBD7FF08] font-light w-16 md:w-20 lg:w-24 h-8 cursor-pointer text-center" onClick={() => handleBtcDeposit()}>
                        Back
                    </button>
                    <img src="/bitcoin.svg" alt="Logo" className="w-8 h-8 ml-6 mr-2 md:ml-9 md:mr-3" />
                    <h1 className="text-gray-300 font-normal text-lg md:text-xl mr-2 md:mr-3">
                        DEPOSIT BITCOIN
                    </h1>
                    <p className="text-yellow-400 font-light ml-2 md:ml-3 cursor-pointer" onClick={() => goNextToken()}>View Transactions</p>
                </div>

                {/* Big Div */}
                <div className="bg-[#CBD7FF08] mt-4 md:mt-6 p-4 md:p-6 h-auto w-[90%] mx-auto rounded-md">
                    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                        <p className="text-[#B1B6C6] text-sm md:text-base text-center md:text-left">
                            Send the amount of Bitcoin of your choice to <br /> the following address to receive the equivalent in Coins.
                        </p>
                        <img src="/btcDeposit/qr.svg" alt="Example" className="w-3/4 md:w-1/3 h-auto mx-auto md:mx-0" />
                    </div>
                    <p className="text-white font-light text-sm md:text-base mt-4 text-center md:text-left uppercase">
                        Your personal Bitcoin deposit address
                    </p>
                    <div className="flex flex-col md:flex-row items-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
                        <p className="w-full md:w-4/5 h-10 rounded-md bg-[#131620] border-none text-[#B1B6C6] text-sm md:text-base p-2">
                            EXTEPrYKv8PL6fyAiF3DSVPoRKjZTb7LYn
                        </p>
                        <button className="bg-yellow-400 font-medium  text-black w-full text-sm md:w-[10vw] h-10 p-2 rounded-md">
                            COPY ADDRESS
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
                        <img src="/btcDeposit/bitcoin.svg" alt="Small Logo" className="w-5 h-5" />0.0003234
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

export default BtcDeposit