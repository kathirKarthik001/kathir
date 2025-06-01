import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" border-t mt-3  border-t-slate-50 bg-transparent w-full px-6 py-4 flex flex-col md:flex-row items-center  justify-between">
      {/* Logo */}
      <Link href="/" className="flex text-white items-center gap-2">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo"
          className="object-contain"
        />
        <span className="text-lg font-semibold">Kathir Karthik</span>
      </Link>

      {/* Social Media Links */}
      <div className="flex gap-5 mt-4 md:mt-0 text-gray-400">
        <Link href="https://github.com/kathirKarthik001" target="_blank">
          <FaGithub className="text-xl hover:text-white transition duration-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kathir-karthik-m-6b9b03257/"
          target="_blank"
        >
          <FaLinkedin className="text-xl hover:text-white transition duration-300" />
        </Link>
        <Link href="https://x.com/kathirkarthik52" target="_blank">
          <FaXTwitter className="text-xl hover:text-white transition duration-300" />
        </Link>
        {/* <Link href="" target="_blank">
          <FaInstagram className="text-xl hover:text-white transition duration-300" />
        </Link> */}
      </div>

      {/* Developer Credit */}
      <p className="text-sm mt-4 text-white md:mt-0">
        <span className="font-semibold text-white">A Kathir Creation</span> |
        2025
      </p>
    </footer>
  );
};

export default Footer;
