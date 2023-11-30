import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import close from '../assets/images/icon-close.svg'
import menu from '../assets/images/icon-menu.svg'

type Props = {
  count: number,
  toggleCart: () => void
}
const Navbar: React.FC<Props> = ({ count, toggleCart }) => {
    const [active, setActive] = useState(false)

    const toggleActive = () => setActive(!active)
  return (
    <nav className='md:static z-10 fixed w-full bg-white flex justify-between items-center gap-x-10 md:py-10 py-5 px-5'>
        <div className='md:flex md:gap-x-10 md:items-baseline'>
            {active && <div className='md:hidden fixed top-20 bg-black bg-opacity-70  w-full h-full rounded-15' onClick={() => setActive(false)}></div>}
            <ul className='flex items-center gap-x-3'>
               <img onClick={() => toggleActive()} src={menu} alt="menu" className='md:hidden block'/>
               <img src={logo} alt="logo" />
            </ul>
            <ul className={`${active ? 'left-0' : 'left-[-100%]'} block pl-10 fixed top-0 left-0 h-full w-[70%] md:static md:pl-0 md:flex md:justify-between md:items-center md:gap-x-5 bg-white font-medium capitalize text-base`}>
                <li className='md:hidden block mt-10 mb-20' onClick={() => setActive(false)}>
                    <img src={close} alt="close" />
                </li>
                <li className='font-bold md:text-grayishBlue text-veryDarkBlue transition ease-in-out duration-300  hover:underline-offset-[57px] hover:text-orange hover:underline  cursor-pointer my-2 md:text-base text-lg font-sans'>collections</li>
                <li className='font-bold md:text-grayishBlue text-veryDarkBlue transition ease-in-out duration-300  hover:underline-offset-[57px] hover:text-orange hover:underline  cursor-pointer my-2 md:text-base text-lg font-sans'>men</li>
                <li className='font-bold md:text-grayishBlue text-veryDarkBlue transition ease-in-out duration-300  hover:underline-offset-[57px] hover:text-orange hover:underline  cursor-pointer my-2 md:text-base text-lg font-sans'>women</li>
                <li className='font-bold md:text-grayishBlue text-veryDarkBlue transition ease-in-out duration-300  hover:underline-offset-[57px] hover:text-orange hover:underline  cursor-pointer my-2 md:text-base text-lg font-sans'>about </li>
                <li className='font-bold md:text-grayishBlue text-veryDarkBlue transition ease-in-out duration-300  hover:underline-offset-[57px] hover:text-orange hover:underline  cursor-pointer my-2 md:text-base text-lg font-sans'>contact</li>
            </ul>
        </div>
        
        <div className='flex gap-x-5 md:gap-x-10 items-center'>
            <div className='cursor-pointer' onClick={() => toggleCart()}>
              {count > 0 && <span className='bg-orange text-white px-2 py-1 rounded-2xl font-bold relative top-2 right-[-8px] text-xs'>{count}</span>}
              <img src={cart} alt="cart" />
            </div>

            <img src={avatar} alt="cart" className='h:10 w-10 md:h-12 md:w-12 cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar