import React from 'react'
import draw from 'assets/images/illustration-laptop-desktop.svg';
import Image from 'next/image';

type Props = {}

const ThirdSection = (props: Props) => {
  return (
          <div className='w-full h-fit flex desktop:flex-row flex-col items-center justify-center mb-32'>
          <div className='relative desktop:left-[-200px] w-full desktop:h-[80vh] h-[40vh] sm:mb-16'>
                <Image src={draw} alt="draw" layout='fill' className='object-contain'/>
            </div>
            <div className='xl:px-32 px-20 sm:px-0 desktop:text-left text-center  desktop:w-3/4 w-11/12 xl:w-1/2'>
                <div>
                    <h2 className='text-[#1f3f5b] text-2xl mb-6'>Free, Open, Simple</h2>
                    <p className='desktop:w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, unde eveniet rem, ab facere Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, unde eveniet rem, ab facere commodi accusamus vitae culpa volu.</p>
                </div>
                <div className='mt-16'>
                    <h2 className='text-[#1f3f5b] text-2xl mb-6'>PowerFul Tooling</h2>
                    <p className='desktop:w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, unde eveniet rem, ab facere commodi accusamus vitae culpa volu.</p>
                </div>
            </div>
        </div>
  )
}

export default ThirdSection;
