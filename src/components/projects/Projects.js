import React from 'react'
import Title from '../layouts/Title'
import { house,chat,carwash,commerce } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

         <ProjectsCard
          title="Telemedicine"
          des=" A Telemedicine web application that facilitates Doctor appointments booking and Virtual consultations remotely"
          src={commerce}
          websiteLink="https://telemed-sigma.vercel.app/"
        />
        <ProjectsCard
          title="Real Estate Web app"
          des=" A modern real Estate web app for propery listingbuying a nd selling.Used docker for containerization,ngnix for load balancing,django for backend,react for frontend and postgress for database. "
          src={house}
          githubLink= "https://github.com/squaredgithub/django-real-estate.git"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" A modern E commerce web app to buy latest clothes.I used MERN tech stack for database,creating REST api and state management."
          src={commerce}
          websiteLink="https://react-ecommerce4dev.netlify.app/"
        />
        <ProjectsCard
          title="Chatting App Clone"
          des="A modern whatsapp clone which can send or receive messages,files"
          src={chat}
        />
        <ProjectsCard
          title="Car wash management System"
          des=" A car and carpet wash management system that keeps the records of income and expenses and filters the data of certain duration which can be downloaded in a csv file for analysis.Used LAMP tech stack."
          src={carwash}
          websiteLink="https://carwash.smatbiz.co.ke/index.php"
        />
      </div>
    </section>
  );
}

export default Projects
