"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    date: "UG | PRESENT",
    title: "B.E. Computer Science and Engineering",
    description:
      "KPR Institute of Engineering and Technology",
    grade:"87 %"
  },
  {
    date: "HSC | 2022",
    title: "High School  : CS & Maths",
    description:
      "Vidhya Vikashni Matric Higher Secondary School",
    grade:"94 %"
  },
  {
    date: "SSLC | 2020",
    title: "Primary & Mid School",
    description:
      "St. Joseph’s  Matric Higher Secondary School",
    grade:"88 %"
  },
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
    
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        className="font-semibold text-2xl text-center bg-transparent p-3 mb-3 text-white underline">
        Education
      </motion.h1>

      <ol className="dark:border-gray-700">
          {data.map((event, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-4 ms-4 relative"
            >
              <div className="bg-gray-900/40 dark:bg-gray-800 shadow-md rounded-lg p-4 sm:p-6">
                <time className="mb-1 text-sm font-medium text-gray-400 ">
                  {event.date}
                </time>

                <h3 className=" text-md md:text-lg font-semibold text-white dark:text-white">
                  {event.title}
                </h3>

                <p className="text-base text-gray-400">
                  {event.description}
                </p>
                <p className="text-base text-gray-400">
                  score : {event.grade}
                </p>
              </div>
            </motion.li>
          ))}
      </ol>

    </div>
  );
};

export default Education;
