import React, { useEffect, useRef, useState } from 'react'
import { Link, useOutlet, useOutletContext } from 'react-router-dom'
import Sidebar from './sidebar'
import Deposit from './deposit/deposit'
import BtcDeposit from './deposit/btcDeposit'
import TokenDeposit from './deposit/tokenDeposit'
import Withdraw from './withdraw/withdraw'
import BtcWithdraw from './withdraw/btcWithdraw'
import TokenWithdraw from './withdraw/tokenWithdraw'
import { motion } from 'framer-motion';
// Animation variants
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
      img: 'https://s3-alpha-sig.figma.com/img/eee1/32e5/5dee5480a617c1739caf572bd39ab961?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKFcggz9AidBJ6TyHHGdKIdoPuJNM2A657IEdmiUK1sY~vlbqI5LMoxJ7bt6YhSRH695hAh8NGG-UrIGo99rz4ZJ2ASy~1uvbjNbtbtdPoTqXDXUVWDZP98Rc~MNBX6STbN7SpH3sjRzUGJO22NflxVPcDG4nkLfmxcx6TP~O6g7j92fs9LXJ~D1NjWxEtLwTlg2j0DYOG0M~6ekXUeZHqUmcsPvANCGTlmUWhKiPCBIQ~O1VIhnHv0frxJPkMQqEE~4T9uwmmrMRXl7KtDd5H8qJYQwJWQauAazaMphGV5~gj2HYNQeVaHgXGzn75bknFQ1JVe2KuEEHdoh2m3~Yw__'
    },

    {
      img: 'https://images.unsplash.com/photo-1639710342143-f87416f1a913?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
      img: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]
  const gamesPoster = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/ab10/a54b/41b5d7ca2f0e5122f5540aaa34f0d195?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMOBUlWf5McX3xdSPekO4ahEGbiEeLCoqVZo3sjgz~3B7RuulouOjbMHf68XiBKOjnwQwgJFtP8UQodXTWgOApW2b9usNTUBSXNm9XzSKVWycrAA2h9F-lS39890HDQnDNWUKzXjs5zpo6D3DQ9GkVhpdsEQJsxlR6iFTiBR5t3l-3TPTAWa2uiBMGduVXrQCrFYTYJ2dNxosh7RhVMneXBUqyu5UlmKr74gkcz2HrolMU6rG99N4QkihXrU1fMe6-Itr~BtL6CM2z-yRbRC8panqwmDhziJqPSKzIPBEBdKsuzLZAAR0EmcSTRrHQRQPKqGGvA5ZQm5V1cdrVszBw__',

    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/6df7/62f9/11ef45330cf5ca47bf3d0525f86cf672?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ld3WrVqXaEmy0-qzd~QMQ4vbvt38rNvA3zx3AdKZLRqgbsY83PieT0g0H1D3sDkey8qKW6IDZW~ru0MxQcbBSGrWqG-UxAtDylkaYwLieEuMzo7lVf~4qHa2QSK5Bg~wX5OOUaKWUgnfPqxJZGwvqBM6MixXamHXyFX7w~meklIVUxkbyEryN6-LHR0VqvNVrdsHT72pygmc2C38XUEf-pd0dZP51OuipWtvloY7uuNyHSMSU8RbrBgO-iuxjsucMxePnsjP132rWJbFvq1BM8jL2E60QqCLVaqguGVK7dQEnVL9n1hYXEFEbWQ21Xr77lImWepnTntIbwTxFObAAA__',

    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/5d2a/d0b4/edd742732116b345cc773be9d02d8f95?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdlwFtwthfFbFsEGDrHnAK6c1NEdCUlxS4tiYFJ4xfdvFEi6cv~jnVFkrPYpwYsVAaJq888cD0PxlMX7SdicER1hGtRmSOHYPL54jU0TkNl7E0lyzr4nbPdfVDFbEmTtwE4AOKRxjIgAJyFwG6odKTuYxOUtSKSktDrEPfW4GZWEPQqcpCVWX8l-xm9Mo~OO7zZi4N5z-1E-~BDQ6H9Lhyhz5Nd7I7kYosxG1DCB4aOrr0QgbFz3LK3ioUTrKC4KEZf~HzdL-m0HWbPPF4-TshgePY5USWUUGrc8nb63jXA9BbYlT6m5US34suRmEXBJj5NsdF6WoM1PY~ixx~wHAQ__',
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/3ce1/4753/9fdc801a2effc74f7b7d022c0f0f42b1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ua6k5WCVyY708-9p12~3Tnw~2PrBPr7jxlG~TIywoF~nS-b9cFbxVT2bs-MskPx3hu9A3x7gwzokV2cynidhHunV2MtcBxpv3FSiQd57UAsyunQjt3fzxJaDgLx6GJ3fFjMwY~RZ~p-ykAYgf0RiuHyhqS7kwt9iphwcvjtUVjL2mfkc25z0T9eXv3Dp-99bCkgUYKaQNhBv5m6x306uva0UjZ8e5o9YLLT6nEOU1vOvSpp2rG76zfLlqzAHEzhN8QqltiUfmy3ov~Jyjimdx-4vGKn-7a0nErhwJcx2HMTihRUrXAyCL0qy6KQRml1BDkDWKFlMFLTOOx5tyayBGw__',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/3ce1/4753/9fdc801a2effc74f7b7d022c0f0f42b1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ua6k5WCVyY708-9p12~3Tnw~2PrBPr7jxlG~TIywoF~nS-b9cFbxVT2bs-MskPx3hu9A3x7gwzokV2cynidhHunV2MtcBxpv3FSiQd57UAsyunQjt3fzxJaDgLx6GJ3fFjMwY~RZ~p-ykAYgf0RiuHyhqS7kwt9iphwcvjtUVjL2mfkc25z0T9eXv3Dp-99bCkgUYKaQNhBv5m6x306uva0UjZ8e5o9YLLT6nEOU1vOvSpp2rG76zfLlqzAHEzhN8QqltiUfmy3ov~Jyjimdx-4vGKn-7a0nErhwJcx2HMTihRUrXAyCL0qy6KQRml1BDkDWKFlMFLTOOx5tyayBGw__',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/3ce1/4753/9fdc801a2effc74f7b7d022c0f0f42b1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ua6k5WCVyY708-9p12~3Tnw~2PrBPr7jxlG~TIywoF~nS-b9cFbxVT2bs-MskPx3hu9A3x7gwzokV2cynidhHunV2MtcBxpv3FSiQd57UAsyunQjt3fzxJaDgLx6GJ3fFjMwY~RZ~p-ykAYgf0RiuHyhqS7kwt9iphwcvjtUVjL2mfkc25z0T9eXv3Dp-99bCkgUYKaQNhBv5m6x306uva0UjZ8e5o9YLLT6nEOU1vOvSpp2rG76zfLlqzAHEzhN8QqltiUfmy3ov~Jyjimdx-4vGKn-7a0nErhwJcx2HMTihRUrXAyCL0qy6KQRml1BDkDWKFlMFLTOOx5tyayBGw__',
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

  const [btcDepositPopUp, setBtcDespositPopUp] = useState(false)
  const [TokenDepositPopUp, setTokenDespositPopUp] = useState(false)

  const [withDraw, setWithdraw] = useState('')

  const outlet = useOutletContext()

  useEffect(() => {
    if (btcDepositPopUp || TokenDepositPopUp || withDraw !== '' || outlet[3]) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [btcDepositPopUp, TokenDepositPopUp, withDraw, outlet]);

  const [coinsDeposit, setCoinsDeposit] = useState('')
  const [saveCoinName, setSaveCoinName] = useState('')

  return (
    <>
      <motion.div
        className="max-w-[1500px] mx-auto font-['oswald'] px-3 sm:px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* deposit */}
        {outlet[3] && (
          <Deposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={outlet[2]} setWithdraw={setWithdraw} setTokenDespositPopUp={setTokenDespositPopUp} setSaveCoinName={setSaveCoinName} deposit={outlet[3]} withDraw={withDraw} />
        )}

        {coinsDeposit == 'bitcoin' && (
          <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={outlet[2]} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} coinsDeposit={coinsDeposit} />
        )}

        {coinsDeposit == 'ethereum' && (
          <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={outlet[2]} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
        )}

        {coinsDeposit == 'litecoin' && (
          <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={outlet[2]} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
        )}

        {coinsDeposit == 'solana' && (
          <BtcDeposit setCoinsDeposit={setCoinsDeposit} setDespositPopUp={outlet[2]} setTokenDespositPopUp={setTokenDespositPopUp} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
        )}

        {coinsDeposit == 'erc' && (
          <TokenDeposit setCoinsDeposit={setCoinsDeposit} coinsDeposit={coinsDeposit} setTokenDespositPopUp={setTokenDespositPopUp} setDespositPopUp={outlet[2]} setWithdraw={setWithdraw} saveCoinName={saveCoinName} />
        )}

        {TokenDepositPopUp && (
          <TokenDeposit setCoinsDeposit={setCoinsDeposit} coinsDeposit={coinsDeposit} setTokenDespositPopUp={setTokenDespositPopUp} setDespositPopUp={outlet[2]} setWithdraw={setWithdraw} saveCoinName={saveCoinName} deposit={outlet[3]} TokenDepositPopUp={TokenDepositPopUp} />
        )}
        {/* deposit */}
        {/* withdraw */}
        {withDraw === 'withdraw' && <Withdraw withDraw={withDraw} setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} setSaveCoinName={setSaveCoinName} />}
        {withDraw === 'bitcoin' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} withDraw={withDraw} />}
        {withDraw === 'ethereum' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} withDraw={withDraw} />}
        {withDraw === 'litecoin' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} withDraw={withDraw} />}
        {withDraw === 'solana' && <BtcWithdraw setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} withDraw={withDraw} />}
        {withDraw === 'erc' && <TokenWithdraw setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} saveCoinName={saveCoinName} withDraw={withDraw} />}
        {withDraw === 'tokenwithdraw' && <TokenWithdraw setWithdraw={setWithdraw} setDespositPopUp={outlet[2]} saveCoinName={saveCoinName} withDraw={withDraw} />}
        {/* withdraw */}

        <div className='flex flex-col md:flex-row justify-between md:pr-10 my-4 md:py-5 gap-5 md:gap-10 lg:gap-12'>
          <Sidebar />
          <div className='md:w-[88%] md:mx-auto '>
            <div className='relative w-full'>
              {/* Navigation Buttons */}
              <button className='absolute top-[4.3rem] -left-5 transform -translate-y-1/2 cursor-pointer md:block hidden z-10' onClick={() => handlePrev()}>
                <img src="/left.svg" alt="Previous" />
              </button>
              <button className='absolute top-[4.3rem] right-6 transform -translate-y-1/2 cursor-pointer md:block hidden z-10' onClick={() => handleNext()}>
                <img src="/right.svg" alt="Next" />
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

export default LandingPage;