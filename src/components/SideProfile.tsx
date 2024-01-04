import React, { ReactElement } from 'react';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import profileImg from '../assets/profile-pic.png';

const iconStyle: string = "text-lightYellow w-12 h-12 p-3 rounded-xl shadow-iconShadow";
const InfoSection: React.FC<{ iconName: string, iconText: string, iconImage: ReactElement }> = ({ iconName, iconText, iconImage }) => {
    return (<div className='w-full h-fit flex justify-between items-center'>
        {iconImage}
        <p className='flex flex-col text-sm w-9/12 h-full overflow-hidden '>
            <span className='text-[#ffffff4e] text-wrap'>{iconName}</span>
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
    return (
        <div className='w-[20%] h-full flex flex-col justify-evenly items-center p-5 bg-lightBlack border border-[#ffffff24] rounded-xl'>
            <img srcSet={profileImg} alt="profile Image" className='bg-lightGray p-5 rounded-3xl w-[50%]' />
            <p className='font-bold text-2xl'>Gagandeep Singh</p>
            <p className='text-md font-semibold p-4 bg-[#2b2b2c] rounded-xl'>Frontend Developer</p>
            <hr className='border-[#ffffff30] w-full' />
            {InfoSectionArray.map(info => (<InfoSection iconName={info.iconName} iconText={info.iconText} iconImage={info.iconImage}></InfoSection>))}

            <div className='flex gap-4 justify-center items-center h-fit w-fit'>
                    <FaGithub className="w-5 h-5 cursor-pointer text-lightYellow hover:text-lightOrange"/>
                    < IoLogoLinkedin className="w-5 h-5 cursor-pointer text-lightYellow hover:text-lightOrange"/>
                    <FaXTwitter className="w-5 h-5 cursor-pointer text-lightYellow hover:text-lightOrange"/>
            </div>
        </div>
    )
}

export default SideProfile;
