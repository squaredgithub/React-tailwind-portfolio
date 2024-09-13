import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-8 md:py-12 font-titleFont flex flex-col md:flex-row gap-10 md:gap-20"
      >
        <div>
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">
              2022-Present
            </p>
            <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
          </div>
          <div className="mt-10 md:mt-14 w-full border-l-[4px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
            <ResumeCard
              title="Software Engineer"
              subTitle="Freelance - (2022 - Present)"
              result="Kenya"
              des="Developed and delivered custom software solutions for diverse clients, focusing on web and desktop applications. Managed the full development lifecycle, from requirement analysis to deployment, ensuring high-quality code and client satisfaction. Specialized in Python, Django, React, HTML, CSS, Javascript, Node.js, PhP and Java offering flexible, remote collaboration for timely project completion."
            />
            <ResumeCard
              title="Information Communication Technology Officer"
              subTitle="County Government of Kirinyaga - (2022 June – 2022 September)"
              des="-Technical Support: Provided timely support to end-users, troubleshooting hardware and software issues, and delivering training sessions to enhance IT literacy across the organization.
              - Networking: Managed network infrastructure, including servers, routers, and switches, ensuring seamless operations and resolving technical issues promptly."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

