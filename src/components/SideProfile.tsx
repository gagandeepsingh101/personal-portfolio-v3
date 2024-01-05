import React, { ReactElement, useState } from 'react';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import profileImg from '../assets/profile-pic.png';

const iconStyle: string = "text-lightYellow w-12 h-12 p-3 rounded-xl shadow-iconShadow";
const InfoSection: React.FC<{ iconName: string, iconText: string, iconImage: ReactElement }> = ({ iconName, iconText, iconImage }) => {
    return (<div className='w-11/12 mx-1 my-2 flex justify-evenly items-center md:justify-between md:my-4 md:mx-3 md:w-[45%] lg:mx-1 lg:w-full lg:h-fit'>
        {iconImage}
        <p className='w-8/12 flex flex-col text-[12px] md:text-sm md:w-9/12 h-full overflow-hidden '>
            <span className=' text-[#ffffff4e] text-wrap'>{iconName}</span>
            <span className='truncate'>{iconText}</span>
        </p>
    </div>)
}
const InfoSectionArray: Array<{ iconName: string, iconText: string, iconImage: ReactElement }> =
    [{ iconName: "Email", iconText: "gagandeepsingh128548@gmail.com", iconImage: <MdOutlineEmail className={iconStyle} /> },
    { iconName: "Phone", iconText: "(+91) 6350271032", iconImage: <IoPhonePortraitOutline className={iconStyle} /> },
    { iconName: "Birthday", iconText: "Jan 04, 2003", iconImage: <SlCalender className={iconStyle} /> },
    { iconName: "Location", iconText: "Hanumangarh Jn, Rajasthan, India", iconImage: <MdOutlineLocationOn className={iconStyle} /> }]
const SideProfile: React.FC = () => {
    const [showMoreInfo, setShowMoreInfo] = useState(true);
    return (
        <div className={'w-11/12 my-4 relative flex flex-col  justify-evenly items-center px-2 py-5 md:p-5 bg-lightBlack border border-[#ffffff24] rounded-xl lg:w-[20%] transition-all duration-300 ease-linear overflow-hidden lg:h-full ' + (showMoreInfo ? "h-[75vh] md:h-[65vh]" : " h-[25vh] md:h-[30vh]")} >
            <button className='text-sm border-amber-400 border px-3 py-2 rounded-tr-xl rounded-bl-3xl md:text-xl absolute top-0 right-0 lg:hidden' onClick={() => setShowMoreInfo(!showMoreInfo)}>More Info</button>
            <div className='w-full my-5  flex justify-evenly items-center lg:flex-col lg:gap-3'>
                <img srcSet={profileImg} alt="profile Image" className='bg-lightGray w-[30%] p-1 rounded-lg  md:rounded-3xl md:p-5 md:w-[70%]  lg:w-[50%]' />
                <div className='w-[80%] h-full justify-center items-center  flex flex-col gap-4 lg:w-full lg:justify-evenly lg:items-center'>
                    <p className=' text-md font-bold md:text-2xl'>Gagandeep Singh</p>
                    <p className='text-sm font-semibold p-2 md:text-md md:p-4 bg-[#2b2b2c] rounded-xl w-fit'>Frontend Developer</p>
                </div>

            </div>
            {showMoreInfo && (<>
                <hr className={' border-[#ffffff30] w-full transition-all duration-300 ease-linear ' + (showMoreInfo ? "opacity-100" : "opacity-0")} />
                <div className={' flex flex-col  flex-wrap md:flex-row lg:flex-col transition-all duration-300 ease-linear ' + (showMoreInfo ? "opacity-100" : "opacity-0")}>
                    {InfoSectionArray.map(info => (<InfoSection iconName={info.iconName} iconText={info.iconText} iconImage={info.iconImage}></InfoSection>))}
                </div>

                <hr className={'  border-[#ffffff30] w-full lg:hidden transition-all duration-300 ease-linear ' + (showMoreInfo ? "opacity-100" : "opacity-0")} />
                <div className={'w-10/12 h-20  flex gap-4  items-center lg:justify-center lg:h-fit lg:w-fit transition-all duration-300 ease-linear ' + (showMoreInfo ? "opacity-100" : "opacity-0")}>
                    <FaGithub className="w-5 h-5 cursor-pointer text-lightYellow hover:text-lightOrange" />
                    < IoLogoLinkedin className="w-5 h-5 cursor-pointer text-lightYellow hover:text-lightOrange" />
                    <FaXTwitter className="w-5 h-5 cursor-pointer text-lightYellow hover:text-lightOrange" />
                </div>
            </>)}
        </div>
    )
}

export default SideProfile;
