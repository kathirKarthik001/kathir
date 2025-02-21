"use client";
import { motion } from "framer-motion";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaFigma, 
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux, SiExpress, SiMongodb, 
  SiFirebase, SiMysql, SiPostman, SiCanva 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-600" /> },
  { name: "Git", icon: <FaGit className="text-red-600" /> },
];

const TechStack = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" w-full h-auto p-6 rounded-lg shadow-lg flex flex-wrap justify-center gap-4"
    >
      <TooltipProvider>
        {skills.map((skill, index) => (
          <Tooltip key={index}>
            <TooltipTrigger className="p-3 bg-white rounded-lg shadow-md flex items-center justify-center w-14 h-14 cursor-pointer">
              {skill.icon}
            </TooltipTrigger>
            <TooltipContent>
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
