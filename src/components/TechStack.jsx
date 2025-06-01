"use client";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiCanva,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-teal-500 text-3xl" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500 text-3xl" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 text-3xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500 text-3xl" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-600 text-3xl" /> },
  { name: "Git", icon: <FaGit className="text-red-600 text-3xl" /> },
];

const TechStack = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" w-full h-auto p-6 rounded-lg shadow-lg flex flex-wrap justify-center gap-4"
      >
        <TooltipProvider>
          {skills.map((skill, index) => (
            <Tooltip key={index}>
              <TooltipTrigger className=" bg-gray-900/40 rounded-lg shadow-md flex items-center justify-center w-14 h-14 cursor-pointer">
                {skill.icon}
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black">
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </>
  );
};

export default TechStack;
