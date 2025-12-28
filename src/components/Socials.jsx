import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      <div className=" self-start flex items-center text-white gap-6 justify-start  md:gap-7 w-full md:w-[80%] p-1 md:p-2 h-12 ">
        <Link href="https://github.com/kathirKarthik001" target="_blank">
          <FaGithub className="text-2xl  hover:text-white transition duration-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kathir-karthik-m-6b9b03257/"
          target="_blank"
        >
          <FaLinkedin className="text-2xl hover:text-white transition duration-300" />
        </Link>
        <Link href="https://x.com/kathirkarthik52" target="_blank">
          <FaXTwitter className="text-2xl hover:text-white transition duration-300" />
        </Link>
        <Link href="https://leetcode.com/u/Kathirkarthik001/" target="_blank">
          <SiLeetcode className="text-2xl hover:text-white transition duration-300" />
        </Link>
        <Link
          href="https://www.hackerrank.com/profile/22cs064_kpriet"
          target="_blank"
        >
          <SiHackerrank className="text-2xl hover:text-white transition duration-300" />
        </Link>
        <Link
          href="https://www.geeksforgeeks.org/user/kathirkarl59l/"
          target="_blank"
        >
          <SiGeeksforgeeks className="text-2xl hover:text-white transition duration-300" />
        </Link>
      </div>
    </>
  );
};

export default Socials;
