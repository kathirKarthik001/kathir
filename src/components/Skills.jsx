"use client"
import React from 'react';
import Image from 'next/image';
import Education from './Education';
import WorkCard from './WorkCard';

const Skills = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-evenly gap-1 items-center  p-4 md:p-3  mb-7 md:h-[80vh] bg-gray-300 ">

        <div className=" w-full  md:w-1/2 h-full flex items-center justify-center ">
            <Education/>
        </div>
        <div className=" w-full  md:w-1/2 h-full flex items-center justify-center ">
            <WorkCard/>
        </div>

    </section>
  )
}

export default Skills