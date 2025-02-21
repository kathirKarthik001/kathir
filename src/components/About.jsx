'use client'
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin,  FaInstagram } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6'
import { SiLeetcode , SiHackerrank , SiGeeksforgeeks} from "react-icons/si";
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
    <section className="flex flex-col-reverse md:flex-row md:justify-evenly gap-1 items-center  p-6 md:p-3  mb-7 md:h-[80vh] ">
        <div className=" w-full md:w-[40%] h-full flex items-center justify-center ">
            <Image src={'/kathir2.svg'} alt='pic' width={500} height={700}
            className='object-cover w-[80%] h-[80%]'/>
        </div>

        <div className=" flex flex-col  p-4 items-center justify-evenly w-full text-gray-400 md:w-[60%] h-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5}}
              className="font-semibold text-2xl text-center bg-transparent p-3 mb-3 text-white underline">
              About Me
            </motion.h1>

            <div className="mb-3">
                <h1 className=' text-xl md:text-2xl text-white font-semibold'>Who am I ?</h1>
                <p className=' text-[15px] text-white md:text-justify md:text-xl font-semibold my-3'>My name is Kathir Karthik M, a pre-final year CSE student at KPR Institute of Engineering and Technology. 
                </p>
                <p className=' text-[12px] md:text-[17px] md:text-justify'>
                I'm passionate about building robust web and mobile applications and have collaborated with fellow developers and professionals to create impactful solutions. Always eager to learn and innovate! 
                </p>
            </div>

            <div className=" self-start flex items-center text-white gap-7 justify-start  md:gap-7 w-full md:w-[80%] p-2 h-12 ">
            <Link href="https://github.com/kathirKarthik001" target="_blank">
              <FaGithub className="text-2xl  hover:text-white transition duration-300" />
             </Link>
            <Link href="https://www.linkedin.com/in/kathir-karthik-m-6b9b03257/" target="_blank">
              <FaLinkedin className="text-2xl hover:text-white transition duration-300" />
            </Link>
            <Link href="https://x.com/kathirkarthik52" target="_blank">
              <FaXTwitter className="text-2xl hover:text-white transition duration-300" />
            </Link>
            <Link href="https://leetcode.com/u/Kathirkarthik001/" target="_blank">
              <SiLeetcode className="text-2xl hover:text-white transition duration-300" />
            </Link>
            <Link href="https://www.hackerrank.com/profile/22cs064_kpriet" target="_blank">
              <SiHackerrank className="text-2xl hover:text-white transition duration-300" />
            </Link>
            <Link href="https://www.geeksforgeeks.org/user/kathirkarl59l/" target="_blank">
              <SiGeeksforgeeks className="text-2xl hover:text-white transition duration-300" />
            </Link>
            </div>

        </div>
    </section>

    <div id="education" className="p-7"></div>
    </>
  )
}

export default About