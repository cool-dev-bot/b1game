import React, { useEffect, useMemo, useState, useRef } from 'react';
import Sidebar from '../sidebar';
import { motion, useAnimation } from 'framer-motion';
function RolleteContent() {
    const [showTimer, setShowTimer] = useState(true);
    const [countdown, setCountdown] = useState(5);
    const [currentCoin, setCurrentCoin] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);
    const controls = useAnimation();

    // Original list of coin images
    const coinImages = [
        'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg',
        'goldCoin.svg', 'diceCoin.svg', 'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg',
        'goldCoin.svg', 'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg',
        'goldCoin.svg', 'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg',
        'goldCoin.svg', 'silverCoin.svg', 'goldCoin.svg',
        'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg', 'goldCoin.svg',
        'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg', 'goldCoin.svg',
        'silverCoin.svg', 'goldCoin.svg', 'silverCoin.svg'
    ];

    // Duplicate the list to create a seamless loop effect
    const extendedCoinImages = useMemo(() => [...coinImages, ...coinImages], [coinImages]);

    // Refs for each coin image
    const coinRefs = useRef(extendedCoinImages.map(() => React.createRef()));
    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 1) {
                    clearInterval(timer);
                    setShowTimer(false); // Hide the timer when countdown ends
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [animationComplete]);

    useEffect(() => {
        const animate = async () => {
            const container = containerRef.current;
            const containerWidth = container.offsetWidth;

            // Dynamically calculate coin width based on the first coin's size
            const firstCoin = coinRefs.current[0].current;
            const coinWidth = firstCoin ? firstCoin.offsetWidth : 100;
            const totalWidth = extendedCoinImages.length * coinWidth;
            const maxStopPosition = totalWidth - containerWidth;

            // Calculate a random stop position within the valid range
            const randomStopPosition = Math.floor(Math.random() * (maxStopPosition + 1));

            // Start animation with easing and fixed duration
            await controls.start({
                x: `-${randomStopPosition}px`,
                transition: {
                    ease: "linear",
                    duration: 1, // Duration for smooth scrolling
                }
            });

            // Determine which coin is visible when the animation ends
            const containerRect = container.getBoundingClientRect();
            let visibleCoinIndex = null;

            coinRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const coinRect = ref.current.getBoundingClientRect();
                    // Check if the coin is within the container's viewport or partially visible
                    if (coinRect.left < containerRect.right && coinRect.right > containerRect.left) {
                        visibleCoinIndex = index;
                    }
                }
            });

            // Set the current coin based on the visible index
            if (visibleCoinIndex !== null) {
                setCurrentCoin(extendedCoinImages[visibleCoinIndex]);
            } else {
                setCurrentCoin(null); // No coin visible (unlikely case)
            }

            setAnimationComplete(true); // Indicate that animation is complete
        };

        if (!showTimer) {
            animate();
        }
    }, [showTimer, controls]);

    useEffect(() => {
        if (animationComplete) {
            // Wait for 2 seconds and then restart the animation
            const timeout = setTimeout(() => {
                setShowTimer(true); // Show timer again for the next round
                setCountdown(5); // Reset countdown for the next round
                setCurrentCoin(null); // Clear the current coin display

                // Reset animation position and controls
                controls.stop();
                controls.set({ x: 0 });
                setAnimationComplete(false); // Reset animation complete state
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [animationComplete, controls]);

    useEffect(() => {
        if (animationComplete) {
            // Wait for 2 seconds and then restart the animation
            const timeout = setTimeout(() => {
                setShowTimer(true); // Show timer again for the next round
                setCountdown(5); // Reset countdown for the next round
                setCurrentCoin(null); // Clear the current coin display

                // Reset animation position and controls
                controls.stop();
                controls.set({ x: 0 });
                setAnimationComplete(false); // Reset animation complete state
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [animationComplete, controls]);


    return (
        <div className="max-w-[1500px] h-full md:h-full mx-auto font-['oswald'] pl-4 pr-4 md:pr-0 sm:pl-4 md:pl-5"
            style={{
                backgroundImage: `url('/bg.jpg')`,
                backgroundSize: 'cover', // or 'contain' depending on the fit you want
                backgroundPosition: 'center',
            }}>
            <div className='flex flex-col md:flex-row justify-between md:pr-3 mb-4 py-5 md:py-6 gap-5 lg:gap-0'>
                <Sidebar />
                <motion.div className='md:w-[88%] md:mx-auto '
                >


                    <div className='relative w-full overflow-hidden mx-auto'>
                        {/* Conditional rendering of the timer */}
                        {showTimer && (
                            <div className='absolute inset-0 flex items-center justify-center bg-[#1a1c24bf] bg-opacity-20 z-10'>
                                <div className='text-center text-white'>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-sm font-light mb-1'>ROLLING</p>
                                        <p className='text-3xl'>{countdown}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Container for coins and line */}
                        <div className='relative coin-container' ref={containerRef}>
                            {/* Vertical Line */}
                            {!showTimer && <div className='absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-[2px] z-20' />}

                            {/* Rolling coins */}
                            <motion.div
                                className='flex justify-start items-center'
                                animate={controls}
                                style={{ display: 'flex', whiteSpace: 'nowrap' }}
                            >
                                {extendedCoinImages.map((coin, index) => (
                                    <div key={index} className='flex-shrink-0' ref={coinRefs.current[index]}>
                                        <img
                                            src={`/rollete/${coin}`}
                                            alt={`Coin ${coin.split('.')[0]}`}
                                            className="w-full max-w-[100px] h-auto"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Display the current visible coin */}
                        {currentCoin && (
                            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl z-30'>
                                {`Current Coin: ${currentCoin.split('.')[0]}`}
                            </div>
                        )}
                    </div>


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
