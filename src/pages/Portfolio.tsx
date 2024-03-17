import React from 'react';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.jpeg';
import project7 from '../assets/project7.jpeg';
import project8 from '../assets/project8.jpeg';
import project9 from '../assets/project9.jpeg';
import project10 from '../assets/project10.jpeg';

import ProjectItem from '../components/ProjectItem';

// Array containing project details
const projectItemArray: Array<{ projectImg: string, projectName: string, gitHubLink: string, liveLink: string }> = [
  { projectImg: project1, projectName: "Entertainment MERN App", gitHubLink: "https://github.com/gagandeepsingh101/entertainment-app", liveLink: "https://entertainment-app-frontend-110.onrender.com/" },
  { projectImg: project2, projectName: "Blog MERN App", gitHubLink: "https://github.com/gagandeepsingh101/Blog-App", liveLink: "https://frontend-blog-app-110.onrender.com/" },
  { projectImg: project3, projectName: "Basic User Auth App", gitHubLink: "https://github.com/gagandeepsingh101/User-Auth-System", liveLink: "https://user-auth-frontend-110.onrender.com/" },
  { projectImg: project4, projectName: "Basic CRUD Todo App", gitHubLink: "https://github.com/gagandeepsingh101/CRUD-TODO-App", liveLink: "https://crud-todo-frontend-110.onrender.com" },
  { projectImg: project5, projectName: "Get Youtube Subscriber Api", gitHubLink: "https://github.com/gagandeepsingh101/get-youtube-subscriber-backend-project", liveLink: "https://get-youtube-subscriber-110.onrender.com/" },
  { projectImg: project6, projectName: "Personal Portfolio v3", gitHubLink: "https://github.com/gagandeepsingh101/personal-portfolio-v3", liveLink: "https://gagandeep-singh-110.onrender.com" },
  { projectImg: project7, projectName: "Personal Portfolio v2", gitHubLink: "https://github.com/gagandeepsingh101/personal-portfolio-v2", liveLink: "https://personal-portfolio-v2-six.vercel.app" },
  { projectImg: project8, projectName: "Flashcard Generator", gitHubLink: "https://github.com/gagandeepsingh101/flashcard-generator", liveLink: "https://flashcard-generator-three.vercel.app/" },
  { projectImg: project9, projectName: "Dish Dazzle Food App", gitHubLink: "https://github.com/gagandeepsingh101/dish-dazzle-food-app", liveLink: "https://food-ordering-app-gagandeepsingh101.vercel.app/" },
  { projectImg: project10, projectName: "Personal Portfolio", gitHubLink: "https://github.com/gagandeepsingh101/Personal-Portfolio", liveLink: "https://gagandeepsingh101.github.io/Personal-Portfolio/#home" },
];

// Portfolio component
const Portfolio: React.FC = () => {
  return (
    // Main container for the portfolio section
    <div className='w-full h-[86%] flex justify-evenly flex-wrap py-2 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lightOrange'>
      {/* Mapping through the projectItemArray and rendering ProjectItem for each project */}
      {projectItemArray.map((item, index) => (
        <ProjectItem key={index} projectImg={item.projectImg} projectName={item.projectName} gitHubLink={item.gitHubLink} liveLink={item.liveLink} />
      ))}
    </div>
  );
}

export default Portfolio;
