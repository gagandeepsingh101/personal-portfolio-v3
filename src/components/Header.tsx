import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Header: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className=' w-full h-[12%] flex justify-between'>
      <div className='w-4/12 h-full text-left px-7 flex flex-col gap-3 justify-end pb-1 font-semibold'>
        <p className='text-4xl'>
          {pathname==="/" && "About Me"}
          {pathname==="/skill" && "Skill"}
          {pathname==="/portfolio" && "Portfolio"}
          {pathname==="/contact" && "Contact"}
        </p>
        <div className='h-[6px] w-1/6 bg-gradient-to-r from-lightYellow to-lightOrange rounded-full'></div>
      </div>
      <div className=' bg-darkGrayShade2 w-6/12 text-lg float-right h-3/4 rounded-tr-xl rounded-bl-3xl flex justify-evenly items-center'>
        <Link to={"/"} className={'hover:text-[#ffffff4e] ' + (pathname === '/' && "text-lightOrange font-bold hover:text-lightOrange")} >About</Link>
        <Link to={"/skill"} className={'hover:text-[#ffffff4e] ' + (pathname === '/skill' && "text-lightOrange font-bold hover:text-lightOrange")}>Skill</Link>
        <Link to={"/portfolio"} className={'hover:text-[#ffffff4e] ' + (pathname === '/portfolio' && "text-lightOrange font-bold hover:text-lightOrange")}>Portfolio</Link>
        <Link to={"/contact"} className={'hover:text-[#ffffff4e] ' + (pathname === '/contact' && "text-lightOrange font-bold hover:text-lightOrange")}>Contact</Link>
      </div>
    </div>
  )
}

export default Header
