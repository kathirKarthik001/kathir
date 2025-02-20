import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-evenly gap-1 items-center  p-6 md:p-3  mb-7 md:h-[80vh] bg-gray-900/40 ">
        <div className=" w-full md:w-[40%] h-full flex items-center justify-center ">
            <Image src={'/kathir2.svg'} width={500} height={700}
            className='object-cover w-[80%] h-[80%]'/>
        </div>

        <div className=" flex flex-col  p-4 items-center justify-evenly w-full text-white md:w-[60%] h-full">
            <h1 className='text-3xl font-semibold text-white/70 mb-3'>About Me</h1>

            <div className="mb-3">
                <h1 className=' text-xl md:text-2xl text-white font-semibold'>Who am I ?</h1>
                <p className=' text-[15px] md:text-justify md:text-xl font-semibold my-3'>My name is Kathir Karthik M, a pre-final year CSE student at KPR Institute of Engineering and Technology. 
                </p>
                <p className=' text-[12px] md:text-[17px] md:text-justify'>
                I'm passionate about building robust web and mobile applications and have collaborated with fellow developers and professionals to create impactful solutions. Always eager to learn and innovate! 
                </p>
            </div>

            <div className="bg-white/90 self-start flex items-center gap-7 justify-start  md:gap-7 w-full md:w-[80%] p-2 h-12 ">
              <div className="bg-red-400 w-8 h-8"></div>
              <div className="bg-red-400 w-8 h-8"></div>
              <div className="bg-red-400 w-8 h-8"></div>
              <div className="bg-red-400 w-8 h-8"></div>
            </div>

        </div>
    </section>
  )
}

export default About