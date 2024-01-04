import React from 'react'
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.jpeg';
import ProjectItem from '../components/ProjectItem';

const projectItemArray: Array<{ projectImg: string, projectName: string, gitHubLink: string, liveLink: string }> = [
  { projectImg: project1, projectName: "Personal Portfolio v3", gitHubLink: "https://github.com/gagandeepsingh101/personal-portfolio-v3", liveLink: "https://personal-portfolio-v3-oj4q.onrender.com/" },
  { projectImg: project2, projectName: "Personal Portfolio v2", gitHubLink: "https://github.com/gagandeepsingh101/personal-portfolio-v2", liveLink: "https://personal-portfolio-v2-six.vercel.app/" },
  { projectImg: project3, projectName: "FlashCard Generator", gitHubLink: "https://github.com/gagandeepsingh101/flashcard-generator", liveLink: "https://flashcard-generator-three.vercel.app/" },
  { projectImg: project4, projectName: "Dish Dazzle Food App", gitHubLink: "https://github.com/gagandeepsingh101/dish-dazzle-food-app", liveLink: "https://food-ordering-app-gagandeepsingh101.vercel.app/" },
  { projectImg: project5, projectName: "Personal Portfolio v1", gitHubLink: "https://github.com/gagandeepsingh101/Personal-Portfolio", liveLink: "https://gagandeepsingh101.github.io/Personal-Portfolio/#home" },
  { projectImg: project6, projectName: "Weather App", gitHubLink: "https://github.com/gagandeepsingh101/weather-app", liveLink: "https://weather-app-f0481f.netlify.app/" },
]
const Portfolio: React.FC = () => {
  return (
    <div className='w-full h-[86%] flex justify-evenly items-center flex-wrap py-2'>
      {projectItemArray.map((item) => (
        <ProjectItem projectImg={item.projectImg} projectName={item.projectName} gitHubLink={item.gitHubLink} liveLink={item.liveLink} />
      ))}
    </div>
  )
}

export default Portfolio
