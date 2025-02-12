import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-evenly gap-1 items-center  p-6 md:p-12  mb-7 md:h-[80vh] ">
        <div className=" w-full md:w-1/2 h-full ">
            <Image src={'/kathir2.svg'} objectFit width={500} height={700} className='md:-translate-y-16'/>
        </div>
        <div className=" flex flex-col items-center justify-evenly w-full text-white md:w-1/2 h-full">
            <h1 className='text-3xl font-semibold text-white/70 mb-3'>About Me</h1>

            <div className="mb-3">
                <h1 className=' text-xl md:text-2xl text-white font-semibold'>Hey there!</h1>
                <p className=' text-[15px] md:text-justify md:text-xl font-semibold my-3'>I'm Kathir Karthik M, a pre-final year CSE student at KPR Institute of Engineering and Technology. 
                </p>
                <p className=' text-[12px] md:text-[17px] md:text-justify'>
                I'm passionate about building robust web and mobile applications and have collaborated with fellow developers and professionals to create impactful solutions. Always eager to learn and innovate! 
                </p>
            </div>

            <div className="bg-white/90 p-3 h-11 w-full"></div>

        </div>
    </section>
  )
}

export default About