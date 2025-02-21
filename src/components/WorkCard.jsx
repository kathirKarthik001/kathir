"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TechStack from "./TechStack";
import Link from "next/link";

const data = [
  {
    date: "Apr 2024 - Sep 2024 ",
    title: "Full Stack Dev",
    company: "The Foundax Company",
    imgSource: "/foundax.webp",
    url:"https://www.thefoundaxcompany.com/"
  },
  {
    date: "Jan 2024 - Feb 2024",
    title: "Full Stack Dev Intern",
    company: "Velam AI ",
    imgSource: "/velam.webp",
    url:"https://www.vantageflow.in/"
  },
];

const WorkCard = () => {
  return (
    <div className="w-full flex  flex-col px-4 justify-start  md:h-full">

      <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5}}
      className="font-semibold text-2xl text-center bg-transparent p-3 text-white underline">
        Experiences
      </motion.h1>

      <ol>
        {data.map((event, index) => (
          <Link href={event.url} key={index} target="_blank">
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex w-full h-32  my-3"
          >

            <div className="  md:h-[100%] h-full w-[40%] md:w-1/4 ">
              <Image
                src={event.imgSource}
                width={250}
                height={250}
                alt={event.title}
                className={`rounded-l-md shadow-lg  object-contain ${
                event.imgSource.trim() === "/velam.webp" ? "object-cover" : "bg-white"
                } h-full w-full`}

              />
            </div>

            <div className=" rounded-r-md  shadow-md  flex flex-col pl-[10%] justify-center p-2 sm:p-6 w-full md:w-3/4 bg-gray-900/40">
              <time className="mb-1 text-sm font-medium text-gray-400 block">
                {event.date}
              </time>

              <h3 className="text-lg font-semibold text-white">
                {event.title}
              </h3>

              <h3 className="text-md font-semibold text-gray-400 dark:text-white">
                {event.company}
              </h3>
            </div>

          </motion.li>
          </Link>
        ))}
      </ol>
      
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5}}
      className=" w-full min-h-48 h-fit">
      <h1 className="text-white text-2xl font-semibold underline text-center">Tech Stack</h1>
        <TechStack/>
      </motion.div>
    </div>
  );
};

export default WorkCard;
