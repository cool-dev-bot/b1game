import React from 'react';
import Sidebar from '../sidebar';
import { motion } from 'framer-motion';
function RolleteContent() {
    return (
        <div className="max-w-[1500px] h-full md:h-full mx-auto font-['oswald'] pl-4 pr-4 md:pr-0 sm:pl-4 md:pl-5">
            <div className='flex flex-col md:flex-row justify-between md:pr-3 mb-4 py-5 md:py-6 gap-5 lg:gap-0'>
                <Sidebar />
                <motion.div className='md:w-[88%] md:mx-auto'
                  >
                    <motion.div className='flex justify-center w-full max-w-[1150px] overflow-hidden mx-auto'initial={{ opacity: 0, x: -100 }} // Start off-screen to the left and invisible
                 animate={{ opacity: 1, x: 0 }}   // Move to the center and become visible
                 transition={{ type: 'spring', stiffness: 50 }}>
                        <div className='flex justify-center'>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/goldCoin.svg" alt="Gold Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/silverCoin.svg" alt="Silver Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/goldCoin.svg" alt="Gold Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/silverCoin.svg" alt="Silver Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/goldCoin.svg" alt="Gold Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/diceCoin.svg" alt="Dice Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/silverCoin.svg" alt="Silver Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/goldCoin.svg" alt="Gold Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/silverCoin.svg" alt="Silver Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/goldCoin.svg" alt="Gold Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                            <div className='flex-shrink-0'>
                                <img src="/rollete/silverCoin.svg" alt="Silver Coin" className="w-full max-w-[100px] h-auto" />
                            </div>
                        </div>
                    </motion.div>

                    <div className='mt-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg mx-auto relative'>
                        <input
                            type="number"
                            className='w-full mt-5 mb-10 border border-[#0C0D0F] outline-none px-9 pr-2 text-white py-2 rounded-md bg-[#22232F] no-spinner'
                        />
                        <div className='absolute top-[2.05rem] left-3'>
                            <img src="/rollete/coinInputVector.svg" alt="Coin Icon" />
                        </div>
                    </div>

                    <motion.div className='w-full mx-auto'
                    initial={{ opacity: 0, y: -100 }} // Start off-screen to the left and invisible
                    animate={{ opacity: 1, y: 0 }}   // Move to the center and become visible
                    transition={{ type: 'spring', stiffness: 50 }}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 xl:grid-cols-3 xl:gap-8'>
                            <div className='w-full max-w-sm mx-auto'>
                                <div className='bg-[#131620] text-[#666E97] py-3 px-4 rounded-md justify-between flex drop-shadow-custom mb-2 md:mb-7 cursor-pointer'>
                                    <p>PLACE BET</p>
                                    <p>WIN 2 X</p>
                                </div>
                                <div className='bg-[#22232F] w-full rounded-md border border-[#0C0D0F]'>
                                    <div className='text-[#C0C0C0] font-light'>
                                        <div className='flex items-center justify-between py-2 px-3'>
                                            <p>3 Bets Total</p>
                                            <div className='flex items-center gap-1'>
                                                <img src="/rollete/coinInputVector.svg" alt="" />
                                                <p>15</p>
                                            </div>
                                        </div>
                                        <div className='border-b-2 border-[#0C0D0F] w-full'></div>
                                        <div className='py-2 px-3 flex items-center justify-between'>
                                            <p>Gamblify</p>
                                            <p>5</p>
                                        </div>
                                        <div className='py-2 px-3 flex items-center justify-between'>
                                            <p>Gamblify</p>
                                            <p>5</p>
                                        </div>
                                        <div className='py-2 px-3 flex items-center justify-between'>
                                            <p>Gamblify</p>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full max-w-sm mx-auto'>
                                <div className='bg-[#131620] text-[#666E97] py-3 px-4 rounded-md justify-between flex drop-shadow-custom mb-2 md:mb-7 cursor-pointer'>
                                    <p>PLACE BET</p>
                                    <p>WIN 14 X</p>
                                </div>
                                <div className='bg-[#22232F] w-full rounded-md border border-[#0C0D0F]'>
                                    <div className='text-[#C0C0C0] font-light'>
                                        <div className='flex items-center justify-between py-2 px-3'>
                                            <p>3 Bets Total</p>
                                            <div className='flex items-center gap-1'>
                                                <img src="/rollete/coinInputVector.svg" alt="" />
                                                <p>15</p>
                                            </div>
                                        </div>
                                        <div className='border-b-2 border-[#0C0D0F] w-full'></div>
                                        {/* Additional bets */}
                                        {Array.from({ length: 9 }, (_, i) => (
                                            <div key={i} className='py-2 px-3 flex items-center justify-between'>
                                                <p>Gamblify{i + 1}</p>
                                                <p>5</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='w-full max-w-sm mx-auto'>
                                <div className='bg-[#131620] text-[#666E97] py-3 px-4 rounded-md justify-between flex drop-shadow-custom mb-2 md:mb-7 cursor-pointer'>
                                    <p>PLACE BET</p>
                                    <p>WIN 2 X</p>
                                </div>
                                <div className='bg-[#22232F] w-full rounded-md border border-[#0C0D0F]'>
                                    <div className='text-[#C0C0C0] font-light'>
                                        <div className='flex items-center justify-between py-2 px-3'>
                                            <p>3 Bets Total</p>
                                            <div className='flex items-center gap-1'>
                                                <img src="/rollete/coinInputVector.svg" alt="" />
                                                <p>15</p>
                                            </div>
                                        </div>
                                        <div className='border-b-2 border-[#0C0D0F] w-full'></div>
                                        <div className='py-2 px-3 flex items-center justify-between'>
                                            <p>Gamblify</p>
                                            <p>5</p>
                                        </div>
                                        <div className='py-2 px-3 flex items-center justify-between'>
                                            <p>Gamblify</p>
                                            <p>5</p>
                                        </div>
                                        <div className='py-2 px-3 flex items-center justify-between'>
                                            <p>Gamblify</p>
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}

export default RolleteContent;
