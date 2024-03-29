import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { GoBook } from "react-icons/go";

// Resume component
const Resume: React.FC = () => {
  return (
    // Main container for the Resume section
    <div className='w-full overflow-hidden overflow-y-scroll flex flex-col md:py-7 lg:px-6 lg:py-3 lg:h-[86%] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lightOrange' >
      {/* Education section */}
      <div className='w-11/12 mx-auto h-fit relative flex flex-col py-3 gap-4 md:gap-6'>
        {/* Education title with icon */}
        <h2 className='w-11/12 mx-auto flex items-center gap-5 md:w-full '>
          <GoBook className="w-8 h-8 rounded-xl shadow-iconShadow text-lightYellow bg-lightGray p-2 md:w-12 md:h-12"></GoBook>
          <span className='text-lg font-semibold md:text-2xl lg:text-3xl'>Education</span>
        </h2 >
        {/* Individual education details */}
        <div className='w-[76.2%] h-fit relative flex flex-col gap-1 ml-auto md:w-[89.6%] lg:w-[93.5%]'>
          {/* Education Info Section 1 */}
          <div className='w-6 h-6 bg-darkGrayShade1 rounded-full p-2 absolute top-0 -translate-x-[50px]'>
            <div className='w-full h-full bg-lightYellow rounded-full'></div>
          </div>
          <h2 className='text-sm md:text-lg font-semibold'>Maharaja Ganga Singh University Bikaner</h2>
          <p className='text-sm text-lightOrange font-thin md:text-base'>2020-2023</p>
          <p className='text-sm md:text-base'>Graduated in BCA with an aggregate of 74%</p>
        </div>
        <div className='w-[76.2%] h-fit relative flex flex-col gap-1 ml-auto md:w-[89.6%] lg:w-[93.5%]'>
          {/* Education Info Section 2 */}
          <div className='w-6 h-6 bg-darkGrayShade1 rounded-full p-2 absolute top-0 -translate-x-[50px]'>
            <div className='w-full h-full bg-lightYellow rounded-full'></div>
          </div>
          <h2 className='text-sm md:text-lg font-semibold'>Guru HariKrishan Sr Sec Public School</h2>
          <p className='text-sm text-lightOrange font-thin md:text-base'>2018-2020</p>
          <p className='text-sm md:text-base'>Passout 12th with an aggregate of 79%</p>
        </div>
      </div>

      {/* Skills section */}
      <h2 className='w-[95%] mx-auto text-lg  font-bold md:text-2xl lg:my-3 lg:text-3xl'>My Skills</h2>
      {/* Skills progress bars */}
      <div className='w-[95%] mx-auto h-fit py-4 flex flex-col gap-5 bg-darkGrayShade2 my-2 rounded-xl'>
        {/* HTML and CSS skill */}
        <div className='w-11/12 mx-auto flex flex-col gap-3 '>
          <h2 className='text-sm font-bold md:text-lg lg:text-xl'>Frontend Development </h2>
          <ProgressBar bgColor='#febd5d70' labelColor='white' labelSize='15px' baseBgColor='#121212' height='18px' completed={95} />
        </div>

        {/* Javascript skill */}
        <div className='w-11/12 mx-auto flex flex-col gap-3 '>
          <h2 className='text-sm font-bold md:text-lg lg:text-xl'>Backend Development </h2>
          <ProgressBar bgColor='#febd5d70' labelColor='white' baseBgColor='#121212' labelSize='15px' height='18px' completed={80} />
        </div>

        {/* ReactJs skill */}
        <div className='w-11/12 mx-auto flex flex-col gap-3 '>
          <h2 className='text-sm font-bold md:text-lg lg:text-xl'>Programming </h2>
          <ProgressBar bgColor='#febd5d70' labelColor='white' baseBgColor='#121212' labelSize='15px' height='18px' completed={85} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
