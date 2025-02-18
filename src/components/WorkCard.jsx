"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    date: "Apr 2024 - Sep 2024 ",
    title: "Full Stack Developer",
    company: "The Foundax Company",
    imgSource: "/velam.jpeg",
  },
  {
    date: "Jan 2024 - Feb 2024",
    title: "Full Stack Developer Intern",
    company: "Velam AI ",
    imgSource: "/velam.jpeg",
  },
];

const WorkCard = () => {
  return (
    <div className="w-full mx-auto px-4  bg-red-400 py-10">
      <ol className="bg-purple-300 space-y-4">
        {data.map((event, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex w-full"
          >
            {/* Image Container */}
            <div className=" bg-green-400 md:h-[100%] p-2 w-1/4 ">
              <Image
                src={event.imgSource}
                width={150}
                height={150}
                alt={event.title}
                className="rounded-lg shadow-lg object-cover w-full h-auto md:w-[100px]"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 sm:p-6 w-full md:w-3/4">
              <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400 block">
                {event.date}
              </time>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>

              <h3 className="text-md font-semibold text-gray-600 dark:text-white">
                {event.company}
              </h3>

              <p className="text-base text-gray-600 dark:text-gray-300">
                {event.description}
              </p>
            </div>

          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default WorkCard;
