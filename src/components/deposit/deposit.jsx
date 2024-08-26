import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import Modal from '../modal'

function Deposit({ setBtcDespositPopUp, setDespositPopUp, setTokenDespositPopUp, setWithdraw }) {

    function handleBitCoin() {
        setBtcDespositPopUp(true)
        setDespositPopUp(false)
        setDespositPopUp(false)
    }

    function cancelDeposit() {
        setDespositPopUp(false)
    }

    function handleWithdraw() {
        setDespositPopUp(false)
        setBtcDespositPopUp(false)
        setTokenDespositPopUp(false)
        setWithdraw('withdraw')
    }

    return (
        <Modal>
            <div className="bg-[#131620] h-auto w-[90vw] md:w-[70vw] lg:w-[60vw] p-6 md:p-8 lg:p-10 mx-auto absolute top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%]">
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
                    <button className="hover:bg-[#252937] text-2xl text-white px-3 py-4 md:px-4 rounded-full" onClick={() => cancelDeposit()}>
                        <RxCross2 />
                    </button>
                </div>

                {/* Heading */}
                <h1 className="text-gray-300 font-light text-[1.25rem] md:text-[1.5rem] mt-6 md:mt-8">
                    DEPOSITE OPTIONS
                </h1>

                {/* Divs with Logos and Text */}
                <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center bg-[#CBD7FF08] p-3 md:p-4 rounded-md cursor-pointer" onClick={() => handleBitCoin()}>
                        <img src="/depositfirstPopup/bitcoin.svg" alt="Logo 1" className="w-10 md:w-12 h-10 md:h-12 mb-1 md:mb-2" />
                        <p className="text-[#B1B6C6] text-[0.65rem] md:text-[0.7rem]">Bitcoin (BTC)</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#CBD7FF08] p-3 md:p-4 rounded-md cursor-pointer">
                        <img src="/depositfirstPopup/etheriume.svg" alt="Logo 2" className="w-10 md:w-12 h-10 md:h-12 mb-1 md:mb-2" />
                        <p className="text-[#B1B6C6] text-[0.65rem] md:text-[0.7rem]">Ethereum (ETH)</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#CBD7FF08] p-3 md:p-4 rounded-md cursor-pointer">
                        <img src="/depositfirstPopup/litecoin.svg" alt="Logo 3" className="w-10 md:w-12 h-10 md:h-12 mb-1 md:mb-2" />
                        <p className="text-[#B1B6C6] text-[0.65rem] md:text-[0.7rem]">Litecoin (LTC)</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#CBD7FF08] p-3 md:p-4 rounded-md cursor-pointer">
                        <img src="/depositfirstPopup/Solana.svg" alt="Logo 4" className="w-10 md:w-12 h-10 md:h-12 mb-1 md:mb-2" />
                        <p className="text-[#B1B6C6] text-[0.65rem] md:text-[0.7rem]">Solana (SOL)</p>
                    </div>

                    {/* Last Div with 4 Images in 2x2 Grid */}
                    <div className="flex flex-col items-center bg-[#CBD7FF08] p-3 md:p-4 rounded-md">
                        <div className="grid grid-cols-2 gap-2">
                            <img src="/depositfirstPopup/1(4)img.svg" alt="Logo 4" className="w-7 h-7 mb-2" />
                            <img src="/depositfirstPopup/2(4)img.svg" alt="Logo 4" className="w-7 h-7 mb-2" />
                            <img src="/depositfirstPopup/3(4)img.svg" alt="Logo 4" className="w-7 h-7 mb-2" />
                            <img src="/depositfirstPopup/IMAGE-5.svg" alt="Logo 4" className="w-7 h-7 mb-2" />
                        </div>
                        <p className="text-[#B1B6C6] font-light text-[0.65rem] md:text-[0.7rem] mt-2">
                            ERC-20 <br />
                            <span className="text-[0.5rem]">(USDx, APE, and more)</span>
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Deposit