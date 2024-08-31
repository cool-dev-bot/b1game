import React, { useEffect } from 'react'
import Modal from '../modal'
import { MdOutlineChevronLeft } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';

function TokenWithdraw({ setWithdraw, setDespositPopUp, withDraw, saveCoinName }) {

    function handleWithdrawToDeposit() {
        setDespositPopUp(true)
        setWithdraw('')
    }

    function handleBack() {
        if (withDraw !== 'erc') {
            setWithdraw(saveCoinName)
        } else {
            setWithdraw('withdraw')
        }
    }

    return (
        <Modal>
            <div className="bg-[#131620] h-auto w-[90vw] md:w-[70vw] lg:w-[60vw] p-4 md:p-6 lg:p-8 mx-auto absolute  top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%]">
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

                {/* Back Button and Heading */}
                <div className="flex items-center justify-start mt-4 md:mt-4">
                    <button className="text-gray-300 hover:text-yellow-400 text-sm md:text-base" onClick={() => handleBack()}>
                        <MdOutlineChevronLeft size={30} />
                    </button>
                    <h2 className="text-gray-300 font-normal text-base md:text-[1.5rem] ml-2">
                        DEPOSIT ERC-20 TOKENS
                    </h2>
                </div>

                {/* Search Bar */}
                <div className="mt-4 md:mt-6">
                    <div className="flex items-center bg-[#CBD7FF08] p-2 rounded-md w-full">
                        <img src="/tokendeposit/search.svg" alt="Search" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent w-full text-white text-sm md:text-base p-2 outline-none"
                        />
                    </div>
                </div>

                {/* First Line of List Items */}
                <div className="flex justify-between mt-4 md:mt-6">
                    <ul className="flex space-x-2 md:space-x-4">
                        <li className="text-[#B1B6C6] hover:text-yellow-400 cursor-pointer text-sm md:text-base">
                            CRYPTO
                        </li>
                    </ul>
                    <ul className="flex space-x-2 md:space-x-4">
                        <li className="text-[#B1B6C6] hover:text-yellow-400 cursor-pointer text-sm md:text-base">
                            PRICE
                        </li>
                        <li className="text-[#B1B6C6] hover:text-yellow-400 cursor-pointer text-sm md:text-base">
                            PRICE 24 %
                        </li>
                    </ul>
                </div>

                {/* Second Line of List Items with Logo */}
                <div className="flex justify-between mt-4 md:mt-6">
                    <ul className="flex space-x-2 md:space-x-4 items-center">
                        <li className="flex items-center text-[#B1B6C6] hover:text-yellow-400 cursor-pointer">
                            <img src="/tokendeposit/IMAGE-1.svg" alt="Logo" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Polygon (MATIC)
                        </li>
                    </ul>
                    <ul className="flex space-x-2 md:space-x-4">
                        <li className="text-[#B1B6C6] hover:text-yellow-400 cursor-pointer text-sm md:text-base">
                            $1.14821
                        </li>
                        <li className="text-green-500 cursor-pointer text-sm md:text-base">-0.35%</li>
                    </ul>
                </div>

                {/* Repeat the above structure for the remaining list items */}
                <div className="flex justify-between mt-4 md:mt-6">
                    <ul className="flex space-x-2 md:space-x-4 items-center">
                        <li className="flex items-center text-[#B1B6C6] hover:text-yellow-400 cursor-pointer">
                            <img src="/tokendeposit/IMAGE-2.svg" alt="Logo" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            SHIBA INU (SHIB)
                        </li>
                    </ul>
                    <ul className="flex space-x-2 md:space-x-4">
                        <li className="text-[#B1B6C6] hover:text-yellow-400 cursor-pointer text-sm md:text-base">
                            $0.000011231
                        </li>
                        <li className="text-red-500 cursor-pointer text-sm md:text-base">-0.62%</li>
                    </ul>
                </div>

                {/* Continue with the remaining items in the same structure */}
            </div>
        </Modal>
    )
}

export default TokenWithdraw