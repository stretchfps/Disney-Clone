import React, { useState } from 'react'

import logo from './../assets/Images/logo.png'

import { BiSolidHome, BiSearchAlt, BiStar } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { RiMovie2Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";

import HeaderItem from './HeaderItem';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: BiSolidHome
        },
        {
            name: 'SEARCH',
            icon: BiSearchAlt
        },
        {
            name: 'WATCH LIST',
            icon: FaPlus
        },
        {
            name: 'ORIGINALS',
            icon: BiStar
        },
        {
            name: 'MOVIES',
            icon: RiMovie2Fill
        },
        {
            name: 'SERIES',
            icon: PiTelevisionBold
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex  gap-8 items-center'>
                <img src={logo} className='w-[100px] md:w-[120px] object-cover cursor-pointer' />
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
            <img src="https://cdn.pixabay.com/photo/2023/04/09/01/42/ai-generated-7910463_1280.jpg" className='w-[40px] rounded-full cursor-pointer' />
        </div>
    )
}

export default Header