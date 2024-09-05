import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SignUp from './signUp'
import Login from './login';
import Forgot from './forgot';
import { Link, useOutletContext } from 'react-router-dom';
import Deposit from './deposit/deposit';
import BtcDeposit from './deposit/btcDeposit';
import Withdraw from './withdraw/withdraw';
import BtcWithdraw from './withdraw/btcWithdraw';
import TokenWithdraw from './withdraw/tokenWithdraw';
import TokenDeposit from './deposit/tokenDeposit';
import { loginContext } from '../../context/context';

function Header({ setLoginUser, loginUser, setDespositPopUp, depositPopUp }) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [signUpPopUp, setSignUpPopUp] = useState(false)
    const [loginPopUp, setLoginPopUp] = useState(false)
    const [forgotPass, setForgotPass] = useState(false)

    const { userDetails } = useContext(loginContext)

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const navs = [
        {
            name: 'FAIRNESS',
            src: '/fairness.svg'
        },
        {
            name: 'SUPPORT',
            src: '/support.svg'
        },
        {
            name: 'AFFILIATE',
            src: '/affiliate.svg'
        },
    ]

    useEffect(() => {
        toggleMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [toggleMenu])

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleMediaQueryChange = (e) => {
            if (e.matches) {
                setToggleMenu(false)
            }
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, [toggleMenu]);

    function handleToggleSignUp() {
        setSignUpPopUp(true)
        setToggleMenu(false)
    }

    function handleToggleLogin() {
        setLoginPopUp(true)
        setToggleMenu(false)
    }

    useEffect(() => {
        if (loginUser) {
            setLoginPopUp(false)
        }
    }, [loginUser])


    const [btcDepositPopUp, setBtcDespositPopUp] = useState(false)
    const [TokenDepositPopUp, setTokenDespositPopUp] = useState(false)

    const [withDraw, setWithdraw] = useState('')

    const outlet = useOutletContext()

    function handleWalletCheck() {
        setDespositPopUp(true)
    }
    const [coinsDeposit, setCoinsDeposit] = useState('')
    const [saveCoinName, setSaveCoinName] = useState('')

    useEffect(() => {
        if (signUpPopUp || loginPopUp || forgotPass) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [signUpPopUp, loginPopUp, forgotPass]);

    useEffect(() => {
        if (btcDepositPopUp || TokenDepositPopUp || withDraw !== '' || depositPopUp) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [btcDepositPopUp, TokenDepositPopUp, withDraw, outlet]);

    return (
        <>
            <div className="bg-[#131620] max-w-full mx-auto py-3 px-4 relative font-['oswald']">
                {/* deposit */}
                {depositPopUp && (
                    <Deposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={setDespositPopUp} setWithdraw={setWithdraw} setTokenDespositPopUp={setTokenDespositPopUp} setSaveCoinName={setSaveCoinName} deposit={depositPopUp} withDraw={withDraw} />
                )}

                {coinsDeposit == 'bitcoin' && (
                    <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={setDespositPopUp} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} coinsDeposit={coinsDeposit} />
                )}

                {coinsDeposit == 'ethereum' && (
                    <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={setDespositPopUp} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
                )}

                {coinsDeposit == 'litecoin' && (
                    <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={setDespositPopUp} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
                )}

                {coinsDeposit == 'solana' && (
                    <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={setDespositPopUp} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
                )}

                {coinsDeposit == 'erc' && (
                    <TokenDeposit setCoinsDeposit={setCoinsDeposit} coinsDeposit={coinsDeposit} setTokenDespositPopUp={setTokenDespositPopUp} setDespositPopUp={setDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
                )}

                {TokenDepositPopUp && (
                    <TokenDeposit setCoinsDeposit={setCoinsDeposit} coinsDeposit={coinsDeposit} setTokenDespositPopUp={setTokenDespositPopUp} setDespositPopUp={setDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} deposit={depositPopUp} TokenDepositPopUp={TokenDepositPopUp} />
                )}
                {/* deposit */}
                {/* withdraw */}
                {withDraw === 'withdraw' && <Withdraw withDraw={withDraw} setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} setSaveCoinName={setSaveCoinName} />}
                {withDraw === 'bitcoin' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} withDraw={withDraw} />}
                {withDraw === 'ethereum' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} withDraw={withDraw} />}
                {withDraw === 'litecoin' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} withDraw={withDraw} />}
                {withDraw === 'solana' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} withDraw={withDraw} />}
                {withDraw === 'erc' && <TokenWithdraw setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} saveCoinName={saveCoinName} withDraw={withDraw} />}
                {withDraw === 'tokenwithdraw' && <TokenWithdraw setWithdraw={setWithdraw} setDespositPopUp={setDespositPopUp} saveCoinName={saveCoinName} withDraw={withDraw} />}
                {/* withdraw */}
                {
                    toggleMenu && (
                        <motion.div
                            className='bg-black absolute top-0 z-50 left-0 px-6 overflow-hidden overflow-y-auto md:hidden h-[100vh] scrollbar-hide'
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: '100%' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <div className='flex items-center justify-between my-2'>
                                <img src="/logo.svg" alt="" className='w-20  pt-1' />
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" fill='#ffffff' className='cursor-pointer' onClick={() => setToggleMenu(false)}>
                                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                </svg>
                            </div>

                            <motion.div
                                initial='hidden'
                                animate='visible'
                                transition={{ duration: 0.3, ease: 'easeInout' }}
                            >
                                <motion.ul
                                    className='w-fit text-[60px] flex flex-col gap-8 font-light text-[#ffffff] my-9'
                                    variants={listVariants}
                                >
                                    {
                                        navs.map((item, idx) => {
                                            return (
                                                <>
                                                    <div className='flex items-center gap-3 hover:font-bold cursor-pointer transition-all'>
                                                        <img src={item.src} alt="" className='w-7' />
                                                        <motion.li variants={itemVariants} key={idx} className='text-2xl cursor-pointer' >{item.name}</motion.li>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </motion.ul>
                                <div className='block sm:hidden my-4'>
                                    <select className='bg-[#22232F] rounded-[7px] text-[#FFFFFF] py-2  px-2 text-sm'>
                                        <option value="eng">ENG</option>
                                    </select>
                                </div>

                                {
                                    userDetails && userDetails._id ? '' : <div className='block sm:hidden'>
                                        <div className='flex flex-col justify-center gap-2 items-start'>
                                            <button onClick={handleToggleSignUp} className='bg-[#86F454] text-[#131620] text-sm py-2 md:py-3 px-4 rounded-[7px] mr-3 w-52'>SIGNUP</button>
                                            <button onClick={handleToggleLogin} className='bg-[#FFC701] text-[#131620] text-sm py-2 md:py-3 px-4 rounded-[7px] w-52'>LOGIN IN</button>
                                        </div>
                                    </div>
                                }
                            </motion.div>
                        </motion.div >
                    )
                }

                {
                    signUpPopUp && (
                        <SignUp setSignUpPopUp={setSignUpPopUp} setLoginPopUp={setLoginPopUp} />
                    )
                }

                {
                    loginPopUp && (
                        <Login setLoginPopUp={setLoginPopUp} setForgotPass={setForgotPass} setSignUpPopUp={setSignUpPopUp} setLoginUser={setLoginUser} />
                    )
                }

                {
                    forgotPass && (
                        <Forgot setForgotPass={setForgotPass} setSignUpPopUp={setSignUpPopUp} setLoginPopUp={setLoginPopUp} />
                    )
                }
                <div className='max-w-[1600px] mx-auto  flex justify-between items-center'>
                    <div className='flex items-center gap-10 lg:gap-32'>
                        <Link to='/' className='md:w-20 w-12  cursor-pointer'>
                            <img src="/logo.svg" alt="" />
                        </Link>
                        <div className=' hidden md:block'>
                            <div className='flex text-[#666E97] items-center gap-10'>
                                {
                                    navs.map((nav, idx) => {
                                        return (
                                            <div className='flex gap-2 cursor-pointer hover:text-white transition-all' key={idx}>
                                                <img src={nav.src} alt="" className='w-5' />
                                                <p className='font-semibold'>{nav.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div className=''>
                        <div className='flex items-center gap-4'>
                            <div className='sm:block hidden'>
                                <select className='bg-[#22232F] rounded-[7px] text-[#FFFFFF] md:py-1 px-2 text-sm cursor-pointer'>
                                    <option value="">ENG</option>
                                </select>
                            </div>

                            {
                                userDetails && userDetails._id ? (
                                    <div className='flex items-start'>
                                        <div className='bg-[#363743] flex items-center gap-2 py-2 sm:py-2 px-1 sm:px-3 rounded-sm rounded-tr-none rounded-br-none sm:text-sm text-[0.9rem] cursor-pointer hover:border border-green-500 hover:border-x-2 hover:border-y-2'>
                                            <img src="/IfUserLogged/doller.svg" alt="" />
                                            <p>$ 0.00</p>
                                        </div>
                                        <div className='flex items-center rounded-tl-none rounded-bl-none  gap-2 bg-[#6E34E2B2] py-2 sm:py-2 px-2 sm:px-3 rounded-sm text-white sm:text-sm text-[0.8rem] font font-light hover:border border-green-500 hover:border-x-2 hover:border-y-2 cursor-pointer' onClick={() => handleWalletCheck()}>
                                            <img src="/IfUserLogged/wallet.svg" alt="" />
                                            <button>Wallet</button>
                                        </div>
                                        <Link to={'/adminpanel'} className='sm:ml-4 ml-4 mt-1  sm:mt-0 sm:w-10 w-8 hover:w-11'>
                                            <img src="/IfUserLogged/user.svg" alt="" />
                                        </Link>
                                    </div>
                                )
                                    :
                                    <div className='sm:block hidden'>
                                        <button className='bg-[#86F454] text-[#131620] text-sm py-2 md:py-3 px-4 rounded-[7px] mr-3 hover:bg-[#75b856] hover:text-white transition-all' onClick={() => setSignUpPopUp(true)}>SIGNUP</button>
                                        <button className='bg-[#FFC701] text-[#131620] text-sm py-2 md:py-3 px-4 rounded-[7px] hover:bg-[#d6ba52] hover:text-white transition-all' onClick={() => setLoginPopUp(true)}>LOGIN IN</button>
                                    </div>
                            }
                            <div className='block  md:hidden' onClick={() => setToggleMenu(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" fill='white'></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header
