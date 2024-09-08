import React from "react";
import Title from "../layouts/Title";
import Scard from "./Scard";
import { skillsData } from "../../data/sdata";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <Title des="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-20">
        {skillsData.map((item) => (
          <Scard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
