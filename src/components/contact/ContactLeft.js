import React from 'react'
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Francis Njuguna</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Reach out to me for my professional web development services,
          or Send a message here.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 791 078 031</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">njugunafrancis077@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
