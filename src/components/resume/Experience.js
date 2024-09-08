import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <section
  id="experience">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-Present</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Freelance - (2021 - Present)"
            result="Kenya"
            des="Developed and delivered custom software solutions for diverse clients, focusing on web and desktop applications. Managed the full development lifecycle, from requirement analysis to deployment, ensuring high-quality code and client satisfaction. Specialized in Python,DjangoReact,HTML,CSS,Javascript,Node js,PhP,Django and Java offering flexible, remote collaboration for timely project completion."
          />
          <ResumeCard
            title="Information Communication Technology Officer"
            subTitle="County Government of Kirinyaga - (2022 June – 2022 September)"
            des="-Technical Support: Provided timely support to end-users, troubleshooting hardware and software issues, and
          delivering training sessions to enhance IT literacy across the organization.
-                    Networking: Managed network infrastructure, including servers, routers, and switches, ensuring seamless
            operations and resolving technical issues promptly.."
          />
        </div>
      </div>
     
    </motion.div>
    </section>
  );
};

export default Experience;