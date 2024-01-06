import React, { ReactElement } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Tooltip } from 'react-tooltip';
const CircularProgress: React.FC<{ percentage: number, icon: ReactElement ,iconName:string }> = ({ percentage, icon,iconName }) => {
    return (
        <div data-tooltip-id={`tooltip-${iconName}`} className=" relative w-fit h-fit mx-[7px] md:mx-[9px] my-3 lg:mx-6 lg:my-5">
            <CircularProgressbar value={percentage} className=' h-16 w-16 ring-darkBlack md:h-20 md:w-20 lg:w-24 lg:h-24' styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `#fbd56c`,
                trailColor: '#121212',
            })} />
            {icon}
            <h1 className='text-[10px] w-full text-center mt-2 md:text-base'>{iconName}</h1>
            <Tooltip id={`tooltip-${iconName}`} className='text-lightOrange backdrop-blur-md' place='bottom' content={percentage+"%"}/>
        </div>
    );
};

export default CircularProgress;
