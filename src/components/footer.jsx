import React from 'react'

function Footer() {

    const footerData = {
        games: [
            {
                game: 'ROULETTE',
            },
            {
                game: 'MINES'
            }
        ],

        INFORMATION: [
            {
                info: 'FAIRNESS',
            },
            {
                info: 'TERMS OF SERVICE'
            },
            {
                info: 'PRIVACY POLICY'
            },
            {
                info: 'AML POLICY'
            },
            {
                info: 'ABOUT US'
            },
        ],

        EVENTS: [
            {
                event: 'RACE',
            },
            {
                event: 'REWARDS'
            }
        ]
    }
    return (
        <>
            <div className="bg-[#131620] pt-12 mt-10 footer max-w-full mx-auto">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                        {/* Company Info Section */}
                        <div className="text-[#666E97] xl:w-1/3 w-full">
                            <img className="mb-8 xl:mb-12" src="/logo.svg" alt="Logo" />

                            <p className="mb-4 xl:mb-7 uppercase text-sm xl:text-base">
                                A multi-award winning crypto casino. With a player-centric approach, b1 has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience.
                            </p>
                            <p className="uppercase text-sm xl:text-base">
                                Crypto trading is not gambling, and therefore not covered by our gaming license
                            </p>
                        </div>

                        <div className="hidden xl:block border-r-2 border-[#54616A26]"></div>

                        <div className=" flex flex-wrap xl:flex-nowrap  gap-8 xl:gap-16 text-[#666E97] xl:w-2/3 w-full">
                            <div>
                                <h3 className="text-white text-lg xl:text-xl font-semibold">GAMES</h3>
                                {/* <p className="my-2  text-[1rem]  xl:text-base">ROULETTE</p>
                                <p className="my-2  text-[1rem]  xl:text-base">MINES</p> */}
                                {
                                    footerData['games'].map((game, idx) => {
                                        return (
                                            <p key={idx} className="my-2  text-[1rem] xl:text-base cursor-pointer hover:text-white transition-all">{game.game}</p>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <h3 className="text-white text-lg xl:text-xl font-semibold">INFORMATION</h3>
                                {/* <p className="my-2  text-[1rem]  xl:text-base">FAIRNESS</p>
                                <p className="my-2  text-[1rem]  xl:text-base">TERMS OF SERVICE</p>
                                <p className="my-2  text-[1rem]  xl:text-base">PRIVACY POLICY</p>
                                <p className="my-2  text-[1rem]  xl:text-base">AML POLICY</p>
                                <p className="my-2  text-[1rem]  xl:text-base">ABOUT US</p> */}
                                {
                                    footerData['INFORMATION'].map((info, idx) => {
                                        return (
                                            <p key={idx} className="my-2 text-[1rem] xl:text-base cursor-pointer hover:text-white transition-all">{info.info}</p>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <h3 className="text-white text-lg xl:text-xl font-semibold">EVENTS</h3>
                                <p className="my-2  text-[1rem] xl:text-base cursor-pointer hover:text-white transition-all">RACE</p>
                                <p className="my-2  text-[1rem] xl:text-base cursor-pointer hover:text-white transition-all">REWARDS</p>
                            </div>
                            <div>
                                <h3 className="text-white text-lg xl:text-xl font-semibold">GAMES</h3>
                                <p className="my-2  text-[1rem]  xl:text-base cursor-pointer hover:text-white transition-all">ROULETTE</p>
                                <p className="my-2  text-[1rem]  xl:text-base cursor-pointer hover:text-white transition-all">MINES</p>
                            </div>
                            <div>
                                <h3 className="text-white text-lg xl:text-xl font-semibold uppercase">Join our Community</h3>
                                <div className="flex gap-3 flex-wrap mt-4">
                                    <img src="/socialHandleSvg/telegram.svg" alt="Telegram" />
                                    <img src="/socialHandleSvg/git.svg" alt="GitHub" />
                                    <img src="/socialHandleSvg/twit-x.svg" alt="Twitter" />
                                    <img src="/socialHandleSvg/facebook.svg" alt="Facebook" />
                                    <img src="/socialHandleSvg/discord.svg" alt="Discord" />
                                    <img src="/socialHandleSvg/bitcoin.svg" alt="Bitcoin" />
                                    <img src="/socialHandleSvg/insta.svg" alt="Instagram" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='my-8 text-white font-light'>Sponsorship and Gaming Responsibilities</p>
                        <div className='flex md:justify-between md:items-center flex-wrap gap-10'>
                            <div className='w-20 md:w-28'>
                                <img className='w-full' src="/sponsor/sigma.svg" alt="" />
                            </div>
                            <div className='w-20 md:w-28'>
                                <img src="/sponsor/cloud9.svg" alt="" />
                            </div>
                            <div className='w-20 md:w-28'>
                                <img src="/sponsor/afa.svg" alt="" />
                            </div>
                            <div className='w-20 md:w-28'>
                                <img src="/sponsor/crypto.svg" alt="" />
                            </div>
                            <div className='w-20 md:w-28'>
                                <img src="/sponsor/itech.svg" alt="" />
                            </div>
                            <div className='w-20 md:w-28'>
                                <img src="/sponsor/gaming.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center my-8'>
                        <img src="/sponsor/eighteen.svg" alt="" />
                    </div>
                    <div className='border-b-2 border-[#54616A26]'></div>
                    <p className='text-center py-4 text-[#666E97] uppercase text-[0.8rem]'>©2024 B1. ALL RIGHTS RESERVED</p>
                </div>
            </div>

        </>
    )
}

export default Footer