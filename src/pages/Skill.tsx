import React, { ReactElement } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { DiBootstrap } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import { FaCss3, FaHtml5 } from 'react-icons/fa6';
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { SiMongodb, SiNetlify, SiRender, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux, TbBrandTypescript, TbBrandVscode } from "react-icons/tb";
import CircularProgress from '../components/CircularProgressBar';

const skillIconStyle: string = "text-lightOrange w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4";
const skillIconArrays: Array<{ percentage: number, icon: ReactElement, iconName: string }> = [
  { percentage: 95, icon: <FaHtml5 className={skillIconStyle} />, iconName: "HTML 5" },
  { percentage: 95, icon: <FaCss3 className={skillIconStyle} />, iconName: "CSS 3" },
  { percentage: 80, icon: <IoLogoJavascript className={skillIconStyle} />, iconName: "Javascript" },
  { percentage: 85, icon: <FaReact className={skillIconStyle} />, iconName: "Javascript" },
  { percentage: 90, icon: <SiTailwindcss className={skillIconStyle} />, iconName: "Tailwind CSS" },
  { percentage: 90, icon: <DiBootstrap className={skillIconStyle} />, iconName: "Bootstrap" },
  { percentage: 80, icon: <TbBrandTypescript className={skillIconStyle} />, iconName: "TypeScript" },
  { percentage: 70, icon: <TbBrandNextjs className={skillIconStyle} />, iconName: "NextJs" },
  { percentage: 60, icon: <TbBrandRedux className={skillIconStyle} />, iconName: "Redux Toolkit" },
  { percentage: 85, icon: <SiMongodb className={skillIconStyle} />, iconName: "MongoDB" },
]

const toolsconArrays: Array<{ percentage: number, icon: ReactElement, iconName: string }> = [
  { percentage: 100, icon: <TbBrandVscode className={skillIconStyle} />, iconName: "VsCode" },
  { percentage: 100, icon: <FaGithub className={skillIconStyle} />, iconName: "Github" },
  { percentage: 100, icon: <SiNetlify className={skillIconStyle} />, iconName: "Netlify" },
  { percentage: 100, icon: <IoLogoVercel className={skillIconStyle} />, iconName: "Vercel" },
  { percentage: 100, icon: <SiRender className={skillIconStyle} />, iconName: "Render" },
];
const Skill: React.FC = () => {
  return (
    <div className='w-full h-[86%] flex flex-col px-6 py-3' >
      <h2 className='text-2xl font-bold'>Frameworks and library</h2>
      <div className='flex justify-evenly flex-wrap p-1 mx-auto w-5/6 h-fit '>
        {skillIconArrays.map(skill => (
          <CircularProgress percentage={skill.percentage} icon={skill.icon} iconName={skill.iconName} ></CircularProgress>
        ))}
      </div>
      <h2 className='text-2xl font-bold'>Developer Tools</h2>
      <div className='flex flex-wrap justify-evenly w-5/6 mx-auto h-fit p-1'>
        {toolsconArrays.map(tool => (
          <CircularProgress percentage={tool.percentage} icon={tool.icon} iconName={tool.iconName} ></CircularProgress>
        ))}
      </div>
    </div>
  )
}

export default Skill
