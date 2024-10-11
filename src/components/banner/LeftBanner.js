import React from 'react'
import CV from './FRANCIS_NJUGUNA_CV.pdf';

const LeftBanner = () => {
    
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">

        <h1 className="text-6xl font-bold text-black">
          Hi, I am{" "} <span className="text-black capitalize">Francis Njuguna</span>
        </h1>

        {/*<h2 className="text-4xl font-bold text-white">
          a Full Stack Developer
         
        </h2>*/}
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Software Engineer,a digital marketer, a tech enthusiast, a hardworking, self-driven, always seeking to expand my skill set and
        stay ahead of the latest technology.I do my duties diligently to the best of my knowledge. With strong analytical
        skills while executing my tasks, my strength lies in creativity for problem solving and to transform ideas to real
        world applications.Passion to deliver keeps me going.
        </p>
      </div>
      <a href={CV} className="mt-5 inline-block">
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300">
            Download Resume
          </button>
      </a>
    </div>
  );
}

export default LeftBanner