"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    title: "Spark Hub",
    description: "SparkHub is an e-learning platform for electronic components, offering tutorials, datasheets, 3D models, quizzes, and a blog section, and interactive tools.",
    imageUrl: "/projects/p1-sparkhub.webp",
    projectUrl: "https://spark-hub-one.vercel.app/",
    githubUrl: "https://github.com/kathirKarthik001/Spark-hub",
  },
  {
    title: "Book it",
    description: "Book-it is a Vite MERN-based digital hall booking system with seamless event scheduling, automated notifications, and scheduled jobs for efficient booking lifecycle management.",
    imageUrl: "/projects/p2-bookit.webp",
    projectUrl: "https://book-it-mern-app-mk.vercel.app",
    githubUrl: "https://github.com/kathirKarthik001/Book-it.git",
  },
  {
    title: "Savemytaxes",
    description: "SaveMyTaxes.in is a tax-saving consultancy firm that assists individuals and businesses with tax filings, compliance, and smart tax-saving strategies.Consists of a userapp , adminapp and landing page. Currently under reconstruction. Checkout my github for proof of work.",
    imageUrl: "/projects/p3-savemytax.webp",
    projectUrl: "https://savemytaxes-user-webapp.vercel.app/",
    githubUrl: "https://github.com/kathirKarthik001",
    isPrivate:"true"

  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-12 px-4">
    
      <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5}}
              className="font-semibold text-2xl text-center bg-transparent p-3 mb-3 text-white underline">
              Projects
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>

      <Link  href={"https://github.com/kathirKarthik001?tab=repositories"} target="_blank"  className=" mt-7 text-lg font-semibold text-white   hover:text-white flex w-full h-5 justify-center mb-14">

      Check out all my projects here <FiExternalLink size={24} />

      </Link>

      <div id="gallery" className="p-4"></div>

    </section>
  );
};

const ProjectCard = ({ title, description,isPrivate, imageUrl, projectUrl, githubUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } bg-gray-900/40 text-gray-300 rounded-lg md:h-52 shadow-lg overflow-hidden`}
    >
      {/* Image Section */}
      <div className="w-full bg-green-300 md:w-[30%]">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[70%] p-6 flex flex-col justify-between">

        <div>
          <div className="flex gap-3">
            <div className="text-xl font-semibold mb-2">{title}</div>
            {isPrivate && 
              <div className="bg-gray-300 h-fit px-2 font-semibold text-black w-fit rounded-lg">
              consultancy
              </div>
            }
            
          </div>
          <p className="text-gray-300 ">{description}</p>
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </Link>
          )}
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FiExternalLink size={24} />
            </Link>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectsSection;
