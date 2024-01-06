import React from 'react';
import codeImg from "../assets/icon-dev.svg";
import troubleshootImg from "../assets/troubleshoot.png";

// Define the About functional component
const About: React.FC = () => {
  return (
    <div className='mx-auto h-fit p-2 flex flex-col justify-center items-center gap-4 md:w-11/12 lg:h-[86%]'>
      {/* Container for the main content */}
      <div className='w-full h-4/5 p-4 rounded-3xl flex flex-col justify-evenly gap-4 text-white'>
        {/* Introduction paragraph */}
        <p className='w-full text-sm leading-relaxed text-justify md:text-md lg:text-lg'>
          🚀 Hi, I'm Gagandeep Singh, a recent graduate with a passion for frontend development!
          💻 I blend clean code with captivating design to create visually stunning websites.
          🌟 Eager to learn and stay on top of the latest tech trends, I'm on a mission to make
          the digital world more beautiful and user-friendly. Let's collaborate and turn your
          ideas into extraordinary web experiences! 🌐🤝
        </p>
        
        {/* Container for "What I Doing" section */}
        <div className='w-full h-1/2 flex flex-wrap justify-evenly gap-6 lg:gap-0'>
          {/* Heading for the section */}
          <h2 className='text-lg w-full font-bold md:text-xl lg:text-3xl'>What I Doing</h2>
          
          {/* Web Development section */}
          <div className='w-full h-[27vh] px-3 py-5 flex flex-col gap-2 md:h-fit md:flex-row md:gap-10 bg-lightGray rounded-xl shadow-iconShadow lg:w-[45%]'>
            <img srcSet={codeImg} alt="" className='w-10 h-10 rounded-xl md:w-20 md:h-20' />
            <p className='w-full h-20 flex flex-col gap-2'>
              <span className='text-md font-bold md:text-lg'>Web Development</span>
              <span className='text-sm w-full'>Newbie Fronted Web Developer mostly working with ReactJS</span>
            </p>
          </div>
          
          {/* Troubleshooting section */}
          <div className='w-full h-[27vh] px-3 py-5 flex flex-col gap-3 md:h-fit md:flex-row md:gap-10 bg-lightGray rounded-xl shadow-iconShadow lg:w-[45%]'>
            <img srcSet={troubleshootImg} alt="" className='w-10 h-10 rounded-xl md:w-20 md:h-20' />
            <p className='w-full h-20 flex flex-col gap-2'>
              <span className='text-md font-bold md:text-lg'>Troubleshooting</span>
              <span className='w-full text-sm'>Newbie in solving problems related to computer and internet.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Download CV button */}
      <button onClick={() => window.open("https://drive.google.com/file/d/1UwICjElQd1zrQ6fC8wb24n8AfChBCOGo/view?usp=sharing", "_target_blank")}
        className='w-fit bg-gradient-to-br from-lightYellow to-lightOrange rounded-xl text-black font-bold p-3 hover:inline-block hover:bg-clip-text hover:text-transparent hover:shadow-iconShadow transition-all duration-300 ease-in'>
        Download CV
      </button>
    </div>
  );
};

// Export the About component as the default export
export default About;
