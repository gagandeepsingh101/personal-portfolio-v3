import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Header component
const Header: React.FC = () => {
  // Get the current pathname using useLocation hook from react-router-dom
  const { pathname } = useLocation();

  return (
    // Main container for the header
    <div className='w-full h-[12%] flex justify-between'>
      {/* Left section of the header containing the page title */}
      <div className='w-full lg:w-4/12 h-full text-left px-3 md:px-7 py-5 flex flex-col gap-3 justify-end pb-1 font-semibold'>
        {/* Dynamic page title based on the current pathname */}
        <p className='text-2xl md:text-3xl lg:text-4xl'>
          {pathname === "/" && "About Me"}
          {pathname === "/resume" && "Resume"}
          {pathname === "/portfolio" && "Portfolio"}
          {pathname === "/contact" && "Contact"}
        </p>
        {/* Horizontal line below the page title for decoration */}
        <div className='h-[6px] w-2/12 bg-gradient-to-r from-lightYellow to-lightOrange rounded-full md:w-1/12 lg:w-1/6'></div>
      </div>
      {/* Right section of the header containing navigation links */}
      <div className='z-50 rounded-tr-full rounded-tl-full fixed bg-[#00000088] border border-[#403d3d24] backdrop-blur-md py-3 left-0 bottom-0 w-full text-sm float-right rounded-bl-3xl flex justify-evenly items-center md:text-lg lg:bg-darkGrayShade2 lg:relative lg:w-6/12 lg:h-3/4 lg:rounded-tr-xl lg:rounded-tl-none lg:rounded-br-none'>
        {/* Navigation links using React Router's Link component */}
        <Link to={"/"} className={'hover:text-[#ffffff4e] ' + (pathname === '/' && "text-lightOrange font-bold hover:text-lightOrange")}>About</Link>
        <Link to={"/resume"} className={'hover:text-[#ffffff4e] ' + (pathname === '/resume' && "text-lightOrange font-bold hover:text-lightOrange")}>Resume</Link>
        <Link to={"/portfolio"} className={'hover:text-[#ffffff4e] ' + (pathname === '/portfolio' && "text-lightOrange font-bold hover:text-lightOrange")}>Portfolio</Link>
        <Link to={"/contact"} className={'hover:text-[#ffffff4e] ' + (pathname === '/contact' && "text-lightOrange font-bold hover:text-lightOrange")}>Contact</Link>
      </div>
    </div>
  )
}

export default Header
