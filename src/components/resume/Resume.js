import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';

const Resume = () => {
   const [educationData] = useState(true);

  return (
    <section id="education" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Education" />
      </div>
      
      {educationData && <Education />}

 
    </section>
  );
}

export default Resume