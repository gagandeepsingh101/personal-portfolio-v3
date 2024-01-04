import React, { ReactElement } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Tooltip } from 'react-tooltip';
const CircularProgress: React.FC<{ percentage: number, icon: ReactElement ,iconName:string }> = ({ percentage, icon,iconName }) => {
    return (
        <div data-tooltip-id={`tooltip-${iconName}`} className=" relative w-fit h-fit mx-6 my-5">
            <CircularProgressbar value={percentage} className='w-24 h-24 ring-darkBlack' styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `#fbd56c`,
                trailColor: '#121212',
            })} />
            {icon}
            <h1 className='w-full text-center mt-2'>{iconName}</h1>
            <Tooltip id={`tooltip-${iconName}`} className='text-lightOrange backdrop-blur-md' place='bottom' content={percentage+"%"}/>
        </div>
    );
};

export default CircularProgress;
