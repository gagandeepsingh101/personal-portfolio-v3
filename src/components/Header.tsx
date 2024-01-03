import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Header: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className=' w-full h-[12%] flex justify-between'>
      <div className='w-4/12 h-full text-left px-7 flex flex-col gap-4 justify-end font-semibold'>
        <p className='text-4xl'>
          {pathname==="/" && "About Me"}
          {pathname==="/resume" && "Resume"}
          {pathname==="/portfolio" && "Portfolio"}
          {pathname==="/contact" && "Contact"}
        </p>
        <div className='h-[6px] w-1/6 bg-gradient-to-tr from-lightYellow to-lightOrange rounded-full'></div>
      </div>
      <div className=' bg-darkGrayShade2 w-6/12 text-lg float-right h-2/3 rounded-tr-xl rounded-bl-3xl flex justify-evenly items-center'>
        <Link to={"/"} className={'hover:text-[#ffffff4e] ' + (pathname === '/' && "text-lightOrange font-bold")} >About</Link>
        <Link to={"/resume"} className={'hover:text-[#ffffff4e] ' + (pathname === '/resume' && "text-lightOrange font-bold")}>Resume</Link>
        <Link to={"/portfolio"} className={'hover:text-[#ffffff4e] ' + (pathname === '/portfolio' && "text-lightOrange font-bold")}>Portfolio</Link>
        <Link to={"/contact"} className={'hover:text-[#ffffff4e] ' + (pathname === '/contact' && "text-lightOrange font-bold")}>Contact</Link>
      </div>
    </div>
  )
}

export default Header
