"use client"
import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-evenly gap-1 items-center  p-6 md:p-3  mb-7 md:h-[80vh] bg-gray-900/40 ">

        <div className=" w-full bg-red-300 md:w-1/2 h-full flex items-center justify-center ">
            // schooling , degree with titles , major and  grade at left
        </div>

        <div className=" flex flex-col items-center justify-evenly w-full text-white md:w-1/2 h-full">

        <div className="  bg-green-300 md:h-1/2 w-full flex items-center justify-center ">
            // intern 
        </div>

        <div className=" bg-blue-300 md:h-1/2 w-full flex items-center justify-center  ">
            // intern
        </div>

        <div className="  bg-green-300 md:h-1/2 w-full flex items-center justify-center ">
            tech stack cards with logos and names in it
        </div>
            
        </div>
    </section>
  )
}

export default Skills