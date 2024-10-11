import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Scard = ({ item: { title, icon } }) => {
  return (
    <div className="w-full px-6 h-60 py-6 rounded-lg flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:opacity-90 transition-opacity duration-300">
      <div className="h-52 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 translate-y-12 transition-transform duration-500">
          <div className="w-8 h-6 flex flex-col justify-between">
            {icon ? (
              <span className="text-3xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-titleFont font-bold text-black-300">
              {title}
            </h2>
            <span className="text-xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scard;
