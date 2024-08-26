import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {

    const pathname = useLocation()

    return (
        <div className='flex flex-row md:flex-col flex-wrap gap-5 items-center py-5 bg-[#131620] md:h-[500px] px-3 rounded-lg'>
            <Link to={'/'} className='flex flex-row md:flex-col items-center gap-1 cursor-pointer'>
                {pathname.pathname == '/' ? <img src="/homesidebar.svg" alt="" /> : <img src="/sidebar/homeunclicked.svg" alt="" />}

                <p className={`${pathname.pathname == '/' ? 'text-[#fde797]' : 'text-[#666E97]'}`}>HOME</p>
            </Link>

            <Link to={'/roulette'} className='flex flex-row md:flex-col items-center gap-1  cursor-pointer'>
                {pathname.pathname == '/roulette' ? <img src="/sidebar/rouletteclicked.svg" alt="" /> : <img src="/roulette.svg" alt="" />}
                <p className={`${pathname.pathname == '/roulette' ? 'text-[#fde797]' : 'text-[#666E97]'}`}>ROULETTE</p>
            </Link>
        </div>
    )
}

export default Sidebar