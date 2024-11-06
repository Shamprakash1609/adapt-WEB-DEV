import React, { useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importing LinkedIn icon
import simonimg from '../images/simon.jpg';
import shajahan from '../images/shajahan.jpg';
import sangeetha from '../images/sangeetha.jpg';
import subhiksha from '../images/Subhiksha.jpg';
import harini from '../images/harini.jpg';
import avatar from '../images/avatar.webp';
import samaustin from '../images/Sam Austin.png';
import Sham from'../images/ShamPrakash.jpeg';
import AOS from 'aos'; // Importing AOS
import 'aos/dist/aos.css'; // Importing AOS styles

const teamMembers = [
  {
    id: 1,
    image: shajahan,
    name: "Shahjahan",
    profession: "",
    linkedin: "https://www.linkedin.com/in/sahajahanmb",
  },
  {
    id: 2,
    image: samaustin,
    name: "Sam Austin",
    profession: "",
    linkedin: "https://www.linkedin.com/in/sam-austin-0401b2100/",
  },
  {
    id: 3,
    image: simonimg,
    name: "Simon Jacob",
    profession: "",
    linkedin: "https://www.linkedin.com/in/simonjacobcs26/",
  },
  {
    id: 4,
    image: Sham,
    name: "Shamprakash",
    profession: "",
    linkedin: "https://www.linkedin.com/in/shamprakash-r-51616b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    image: subhiksha,
    name: "Subhiksha Keerthi",
    profession: "",
    linkedin: "https://www.linkedin.com/in/subhiksha",
  },
  {
    id: 5,
    image: sangeetha,
    name: "Sangeetha",
    profession: "",
    linkedin: "https://www.linkedin.com/in/sangeetha-g-41926621b",
  },
  {
    id: 6,
    image: harini,
    name: "Harini",
    profession: "",
    linkedin: "https://www.linkedin.com/in/harinis",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-5 py-8 xl:px-10 xl:py-28 dark:text-black" id='Ourteam'>
      <div className="mb-16 flex w-full flex-col items-center justify-center text-center md:mb-32">
        <h2 className="mb-6 text-3xl font-bold">Our Team</h2>
        <p className="w-full sm:w-1/2">
        Driven by ambition, to reach impossible quality, that's our team, that's Adapt.        </p>
      </div>

      <div className="flex flex-col md:ml-12 md:flex-row">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className="group relative mb-6 flex justify-start rounded-full border-4 border-white transition-all duration-300 ease-in-out hover:-translate-x-20 md:mb-0 md:-ml-12 md:justify-center md:hover:-translate-x-0 md:hover:-translate-y-6 xl:border-8" 
            data-aos="fade-up" // Adding AOS animation
            data-aos-delay={index * 100} // Delay based on index
          >
            <div className="absolute left-6 top-7 w-full text-left opacity-0 transition-all duration-300 ease-linear group-hover:translate-x-24 group-hover:opacity-100 md:-top-12 md:left-0 md:text-center md:group-hover:-translate-y-6 md:group-hover:translate-x-0">
              <h3 className="text-base font-semibold xl:text-xl">{member.name}</h3>
              <h4 className="text-nowrap text-sm xl:text-base">{member.profession}</h4>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 text-white py-1 px-2 transition-colors duration-300 hover:bg-blue-700 shadow-md transform transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="mr-1 h-4 w-4" />
                <span className="text-xs font-semibold">Connect</span>
              </a>
            </div>
            <img
              src={member.image}
              className="size-28 rounded-full object-cover lg:size-32 xl:size-48 2xl:size-60"
              alt={`Team Member ${member.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
