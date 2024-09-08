import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
      <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
            title="BSc in Software Engineering"
            subTitle="Kirinyaga University (2019 - 2023)"
            des=" I learned the design,development,testing and maintenance of software systemss,being equiped with skills in programming,data management,and software optimization."
          />
        </div>
      </div>
       
    </motion.div>
  );
}

export default Education