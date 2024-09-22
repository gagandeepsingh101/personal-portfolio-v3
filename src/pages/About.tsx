import React from 'react';
import codeImg from "../assets/icon-dev.svg";
import troubleshootImg from "../assets/troubleshoot.png";

const About: React.FC = () => {
  return (
    <div className='mx-auto h-fit p-2 flex flex-col justify-center items-center gap-4 md:w-11/12 lg:h-[86%]'>
      <div className='w-full h-full p-4 rounded-3xl flex flex-col justify-evenly gap-4 text-white'>
        <p className='w-full text-sm leading-relaxed text-justify md:text-md lg:text-lg flex flex-col gap-4'>
          <span>
            👋 Hello, I'm Gagandeep Singh, a recent graduate from India, passionate about web development.
            🌐 After completing my studies, I embarked on a journey to pursue my dreams, diving deep into the world of MERN stack development.
          </span>
          <span>
            💡 With proficiency in MongoDB, Express, React, and Node.js (MERN), I craft dynamic and responsive web applications that engage users and solve real-world problems. 🚀
          </span>
          <span>
            🎓 Equipped with a solid foundation in web technologies and a hunger for continuous learning, I'm eager to contribute to innovative projects and make a meaningful impact in the tech community.
          </span>
          <span>
            Let's build something remarkable together! 🌟
          </span>
        </p>


        <div className='w-full h-1/2 flex flex-wrap justify-evenly gap-6 lg:gap-0'>
          <h2 className='text-lg w-full font-bold md:text-xl lg:text-3xl'>What I Do</h2>

          <div className='w-full h-[27vh] px-3 py-5 flex flex-col gap-2 md:h-fit md:flex-row md:gap-10 bg-lightGray rounded-xl shadow-iconShadow lg:w-[45%]'>
            <img src={codeImg} alt="Web Development Icon" className='w-10 h-10 rounded-xl md:w-20 md:h-20' />
            <p className='w-full h-20 flex flex-col gap-2'>
              <span className='text-md font-bold md:text-lg'>Web Development</span>
              <span className='text-sm w-full'>Newbie Web Developer mostly working with ReactJS</span>
            </p>
          </div>

          <div className='w-full h-[27vh] px-3 py-5 flex flex-col gap-3 md:h-fit md:flex-row md:gap-10 bg-lightGray rounded-xl shadow-iconShadow lg:w-[45%]'>
            <img src={troubleshootImg} alt="Troubleshooting Icon" className='w-10 h-10 rounded-xl md:w-20 md:h-20' />
            <p className='w-full h-20 flex flex-col gap-2'>
              <span className='text-md font-bold md:text-lg'>Troubleshooting</span>
              <span className='w-full text-sm'>Newbie in solving problems related to computer and internet.</span>
            </p>
          </div>
        </div>
      </div>

      <button onClick={() => window.open("https://drive.google.com/file/d/1MALRLXBiSQRLeO4PtmXjPcEjoyDoQgu_/view?usp=sharing", "_target_blank")}
        className='w-fit bg-gradient-to-br from-lightYellow to-lightOrange rounded-xl text-black font-bold p-3 hover:inline-block hover:bg-clip-text hover:text-transparent hover:shadow-iconShadow transition-all duration-300 ease-in'>
        Download CV
      </button>
    </div>
  );
};

export default About;
