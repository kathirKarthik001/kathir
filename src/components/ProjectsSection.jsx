"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Project One",
    description: "A cool project about AI.",
    imageUrl: "/project1.jpg",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example/project1",
  },
  {
    title: "Project Two",
    description: "An amazing React app.",
    imageUrl: "/project2.jpg",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example/project2",
  },
  {
    title: "Project Three",
    description: "A full-stack web app.",
    imageUrl: "/project3.jpg",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example/project3",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-12 px-4">
    
      <h2 className="text-3xl text-white underline font-semibold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 gap-8 mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, imageUrl, projectUrl, githubUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } bg-gray-800 text-white rounded-lg md:h-52 shadow-lg overflow-hidden`}
    >
      {/* Image Section */}
      <div className="w-full bg-green-300 md:w-[40%]">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[60%] p-6 flex flex-col justify-between">

        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
          )}
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FiExternalLink size={24} />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectsSection;
