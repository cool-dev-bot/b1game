import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './sidebar'
import { motion } from 'framer-motion';
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};
function LandingPage() {

  const banner = [
    {
      img: 'https://i.ibb.co/fGfQhTc/edd742732116b345cc773be9d02d8f95.png'
    },

    {
      img: 'public/banner-main.svg'
    },

    {
      img: 'public/banner-main.svg'
    },
  ]
  const gamesPoster = [
    {
      img: 'public/slider-1.svg',

    },

    {
      img: 'public/slider-2.svg',

    },
    {
      img: 'public/slider-3.svg',
    },

    {
      img: 'public/slider-4.svg',
    },
    {
      img: 'public/slider-5.svg',
    },
    {
      img: 'public/slider-6.svg',
    },

  ]

  const [bannerCurrentImg, setBannerCurrentImg] = useState(0)
  const [bannerWidth, setBannerWidth] = useState(1200)

  function handleNext() {
    if (bannerCurrentImg < banner.length - 1) {
      setBannerCurrentImg(prev => prev + 1)
    } else {
      setBannerCurrentImg(0)
    }
  }

  function handlePrev() {
    if (bannerCurrentImg > 0) {
      setBannerCurrentImg(prev => prev - 1)
    } else {
      setBannerCurrentImg(banner.length - 1)
    }
  }

  const divBanner = useRef()

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (bannerCurrentImg < banner.length - 1) {
        setBannerCurrentImg(prev => prev + 1)
      } else {
        setBannerCurrentImg(0)
      }
    }, 1000)

    return (() => clearInterval(intervalId))
  }, [banner])


  useEffect(() => {
    if (divBanner.current) {
      setBannerWidth(divBanner.current.offsetWidth)
    }
  }, [divBanner, bannerCurrentImg])

  return (
    <>
      <motion.div
        className="max-w-[1500px] mx-auto font-['oswald'] px-3 sm:px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className='flex flex-col md:flex-row justify-between md:pr-10 my-4 md:py-5 gap-5 md:gap-10 lg:gap-12'>
          <Sidebar />
          <div className='md:w-[88%] md:mx-auto '>
            <div className='relative w-full'>
              {/* Navigation Buttons */}
              <button className='absolute top-[4.3rem] -left-5 transform -translate-y-1/2 cursor-pointer md:block hidden z-10' onClick={() => handlePrev()}>
                <img src="public/banner-left.svg" alt="Previous" />
              </button>
              <button className='absolute top-[4.3rem] right-6 transform -translate-y-1/2 cursor-pointer md:block hidden z-10' onClick={() => handleNext()}>
                <img src="public/banner-right.svg" alt="Next" />
              </button>

              {/* Image Slider */}
              <div className='flex max-w-[1200px] overflow-hidden pb-4 rounded-lg ' ref={divBanner}>
                {banner.map((item, idx) => (
                  <motion.img
                    className={`md:w-full md:h-[140px] object-contain md:object-cover banner transition-all flex-shrink-0 rounded-lg`}
                    style={{ transform: `translateX(-${bannerCurrentImg * bannerWidth}px)` }}
                    src={item.img}
                    alt={`Banner ${idx}`}
                    key={idx}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                  />
                ))}
              </div>
            </div>

            {/* updated */}
            <div className='flex mt-6 gap-x-4 mb-12 lg:mb-16 w-full max-w-[1200px] overflow-x-auto scrollbar-hide'>
              {gamesPoster.map((item, idx) => (
                <motion.div key={idx} className='flex-shrink-0 w-[220px] sm:w-[200px] md:w-[250px] lg:w-[300px]' initial="hidden" animate="visible" variants={imageVariants}>
                  <img className='w-full h-auto object-cover' src={item.img} alt={`Game poster ${idx}`} />
                </motion.div>
              ))}
            </div>
            {/* updated */}

            <div className='flex gap-8 overflow-hidden overflow-x-auto scrollbar-hide max-w-[1200px]'>
              {[...Array(5)].map((_, idx) => (
                <motion.div key={idx} className='flex-shrink-0 w-[220px] sm:w-[250px] md:w-[300px] lg:w-[380px]' initial="hidden" animate="visible" variants={imageVariants}>
                  <img className='w-full' src="https://s3-alpha-sig.figma.com/img/b32d/ac1c/9211cd04c8565bdd28390d5edabdfb71?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MmizEmBkGSuHbraBYRyoOAA2~1VZTPz3DoxsYVvLVoU8-HH07o7OY6Puj4USky-BKA9KUF09JEfjUVYSrIrIwncFX5zxIB6T8giDiolkcrZJAB-3UIJhIb1KHOFmRDxCLlK4QKOr1xjWUGHXDtAwOJ6hcw4hll6j~FuOifdaWCHwUTj2nTzGDmKwSGoljtEu9fP~42MVKP9IP-Kad34VS28JryoEF4i3349Y8NB9oFr6IYhpev~XEOtjWkY7VaSVvJmJ~OS7hqUBYUEt3VHk-VPNBSt3YzCU0QmWjNZcM8~isKyYN6WdACgbocXeUHxQqdgxBkYJ-2Isv0~gH6AGtg__" alt="" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>


    </>
  )
}

export default LandingPage