import Image from 'next/image'
import React from 'react'
import draw from 'assets/images/illustration-editor-desktop.svg';

type Props = {}

const FirstSection = (props: Props) => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center gap-5 desktop:overflow-hidden my-32 sm:mb-80'>
        <h1 className='desktop:text-5xl text-2xl text-center text-[#1f3f5b]'>Designed For the future</h1>
        <div className='w-full h-fit flex desktop:flex-row flex-col-reverse items-center justify-center'>
            <div className='xl:px-32 px-20 sm:px-0 desktop:text-left text-center  desktop:w-3/4 w-11/12 xl:w-1/2'>
                <div>
                    <h2 className='text-[#1f3f5b] text-2xl mb-6'>Introducing an extendible editor</h2>
                    <p className='desktop:w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, unde eveniet rem, ab facere Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, unde eveniet rem, ab facere commodi accusamus vitae culpa volu.</p>
                </div>
                <div className='mt-16'>
                    <h2 className='text-[#1f3f5b] text-2xl mb-6'>Robust content management</h2>
                    <p className='desktop:w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, unde eveniet rem, ab facere commodi accusamus vitae culpa volu.</p>
                </div>
            </div>
            <div className='relative w-11/12 sm:h-[30vh] h-[25vh] desktop:h-[80vh]  desktop:right-[-200px] mb-10 desktop:mb-0'>
                <Image src={draw} alt="draw" layout='fill' className='object-contain'/>
            </div>

        </div>
    </div>
  )
}

export default FirstSection
