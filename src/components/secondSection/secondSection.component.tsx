import Image from 'next/image'
import React from 'react'
import mobileDraw from 'assets/images/illustration-phones.svg';
import circles from 'assets/images/bg-pattern-circles.svg';

type Props = {}

const SecondSection:React.FC<Props> = () => {
    return (
        <div className='w-full desktop:h-[45vh] h-[80vh] my-40 rounded-bl-[100px] rounded-tr-[100px] bg-[#2c2d3f] flex flex-col desktop:flex-row items-center justify-center gap-20 overflow-visible relative'>
            <div className='absolute desktop:w-[50%] w-full desktop:h-[45vh] h-[45vh] left-0 top-[-100px] desktop:top-0'>
                <Image src={circles} alt="circles"  layout='fill' className='desktop:object-cover object-contain w-full'/>
            </div>
            <div className='absolute desktop:relative desktop:top-0 top-[-150px] desktop:w-[50%] w-full desktop:h-[60vh] h-[45vh]'><Image src={mobileDraw} alt="mobile draw" layout='fill' className='object-contain' /></div>
            <div className='desktop:w-1/2 w-11/12 desktop:pl-20 absolute desktop:static
             bottom-16'>
                <h1 className='text-white text-3xl mb-10'>State of the Art Infrastructure</h1>
                <p className='desktop:w-3/4 w-full text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos quam similique consequatur eos laboriosam necessitatibus velit amet, qui blanditiis dignissimos soluta quod, facere modi deleniti doloremque sequi. Debitis, tenetur.</p>
            </div>
        </div>
    )
};

export default SecondSection;
