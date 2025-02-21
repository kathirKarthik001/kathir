"use client"
import React from 'react';
import Education from './Education';
import WorkCard from './WorkCard';

const Skills = () => {
  return (
    <section className="flex flex-col md:flex-row   gap-1  p-4 md:p-3 mb-7 md:max-h-fit md:min-h-[80vh]  ">

        <div className="  w-full md:w-1/2 md:min-h-full ">
            <Education/>
        </div>
        <div className="  w-full md:w-1/2 md:min-h-full ">
            <WorkCard/>
        </div>
    </section>
  )
}

export default Skills