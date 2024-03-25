import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

// ProjectItem component with props for project details
const ProjectItem: React.FC<{ projectImg: string; projectName: string, gitHubLink: string, liveLink: string }> = ({ projectImg, projectName, gitHubLink, liveLink }) => {
    return (
        <div className='w-5/6 my-3 py-1 overflow-hidden relative md:w-[45%] md:my-6 md:h-[100%] lg:w-[30%] lg:h-[40%]'>
            {/* Container for the project image and interaction overlay */}
            <div className='w-full h-4/5 bg-[#0000006c] relative overflow-hidden group rounded-md md:rounded-lg lg:rounded-xl '>
                {/* Project image */}
                <img
                    src={projectImg}
                    alt={projectName}
                    className='h-full w-full duration-300 ease-linear group-hover:scale-110 group-hover:opacity-30 group-hover:-z-50 transform transition-transform'
                />
                {/* Overlay for project interaction (view live, GitHub) */}
                <div className='absolute h-full w-full flex justify-center items-center gap-20 top-0 left-0 bg-[#0000006d] -translate-x-full duration-300 ease-linear group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                    {/* View live icon */}
                    <FaRegEye className="cursor-pointer text-lightYellow w-10 h-10 bg-darkBlack p-2 rounded-xl transition-all duration-300 ease-linear hover:bg-lightYellow hover:text-darkBlack" onClick={() => window.open(liveLink, "_target_blank")} />
                    {/* GitHub icon */}
                    <PiGithubLogoFill className="cursor-pointer text-lightYellow w-10 h-10 bg-darkBlack p-2 rounded-xl transition-all duration-300 ease-linear hover:bg-lightYellow hover:text-darkBlack" onClick={() => window.open(gitHubLink, "_target_blank")} />
                </div>
            </div>
            {/* Project name */}
            <p className='mt-2 text-center text-white'>{projectName}</p>
        </div>
    );
};

export default ProjectItem;
