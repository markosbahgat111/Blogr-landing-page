import { NavBar } from 'components/navbar/navbar.component'
import Image from 'next/image'
import React from 'react'
import pattern from 'assets/images/bg-pattern-intro-desktop.svg';

interface Props {
    iconClass: number,
    handleOpenMenu: (value: number) => void
}

const Header:React.FC<Props> = ({iconClass, handleOpenMenu}) => {
  return (
    <div className='relative w-full h-[100vh] bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] rounded-bl-[150px] overflow-hidden'>
          <NavBar handleOpenMenu={handleOpenMenu} iconClass={iconClass} />
          <div className='absolute w-full h-[120vh] top-[-100px] overflow-visible' onClick={() => handleOpenMenu(0)}>
              <Image src={pattern} alt="pattern" layout='fill' className='object-cover w-full h-full' />
          </div>
        <div className='text-white text-center absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h1 className='desktop:text-7xl text-4xl md:whitespace-nowrap'>A modern publishing platform</h1>
            <h6 className='my-10'>Grow your audience and build your online brand</h6>
            <div className='mt-20 flex items-center justify-center desktop:gap-10 gap-5'>
                <button className='text-[#ff3d54] bg-white w-40 h-12 rounded-3xl font-bold'>Start For Free</button>
                <button className='border-2 w-36 h-12 rounded-3xl'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Header
