import React from 'react';

const About: React.FC = () => {
  return (
    <div className='w-11/12 mx-auto h-[86%]  p-2 flex flex-col gap-4 justify-center items-center '>
      <div className='w-full h-4/5 p-4 rounded-3xl flex flex-col gap-4 justify-center  bg-gradient-to-tr from-lightGray via-lightBlack to-lightGray text-white  shadow-lg'>
        <p className='text-sm leading-relaxed md:text-md lg:text-lg'>
          🚀 I'm a motivated individual with a passion for creativity and problem-solving.
        </p>
        <p className='text-sm leading-relaxed md:text-md lg:text-lg'>
          🌟 I want to use my skills in my professional journey.
        </p>
        <p className='text-sm leading-relaxed md:text-md lg:text-lg'>
          🔍 I'm driven to contribute to projects that make a positive impact. I focus on excellence and pay attention to details.
        </p>
        <p className='text-sm leading-relaxed md:text-md lg:text-lg'>
          📚 I love learning and staying updated with industry trends, always ready for new challenges.
        </p>
        <p className='text-sm leading-relaxed md:text-md lg:text-lg'>
          🤝 I'm committed to creating a collaborative work environment and thrive in fast-paced situations.
        </p>
        <p className='text-sm leading-relaxed md:text-md lg:text-lg'>
          ⚡ With excellent communication skills and a proactive approach to personal growth, I believe I can bring a fresh perspective and make a real difference in any professional field.
        </p>
      </div>
      <button onClick={() => window.open("https://drive.google.com/file/d/1UwICjElQd1zrQ6fC8wb24n8AfChBCOGo/view?usp=sharing", "_target_blank")} className=' w-fit bg-gradient-to-br from-lightYellow to-lightOrange rounded-xl text-black font-bold p-3 hover:inline-block hover:bg-clip-text hover:text-transparent hover:shadow-iconShadow transition-all duration-300 ease-in'>Download CV</button>
    </div>
  );
};

export default About;
