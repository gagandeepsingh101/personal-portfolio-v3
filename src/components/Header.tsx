import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className=' w-full h-[12%] flex justify-between'>
      <div className='w-full lg:w-4/12 h-full text-left px-7 py-5 flex flex-col gap-3 justify-end pb-1 font-semibold'>
        <p className='text-2xl  md:text-3xl lg:text-4xl'>
          {pathname === "/" && "About Me"}
          {pathname === "/skill" && "Skill"}
          {pathname === "/portfolio" && "Portfolio"}
          {pathname === "/contact" && "Contact"}
        </p>
        <div className='h-[6px] w-2/12  bg-gradient-to-r from-lightYellow to-lightOrange rounded-full md:w-1/12 lg:w-1/6'></div>
      </div>
      <div className=' z-50 rounded-tr-full rounded-tl-full fixed bg-[#00000088] backdrop-blur-md py-3 left-0 bottom-0 w-full text-sm float-right rounded-bl-3xl flex justify-evenly items-center md:text-lg lg:bg-darkGrayShade2 lg:relative lg:w-6/12 lg:h-3/4 lg:rounded-tr-xl lg:rounded-tl-none lg:rounded-br-xl'>
        <Link to={"/"} className={'hover:text-[#ffffff4e] ' + (pathname === '/' && "text-lightOrange font-bold hover:text-lightOrange")} >About</Link>
        <Link to={"/skill"} className={'hover:text-[#ffffff4e] ' + (pathname === '/skill' && "text-lightOrange font-bold hover:text-lightOrange")}>Skill</Link>
        <Link to={"/portfolio"} className={'hover:text-[#ffffff4e] ' + (pathname === '/portfolio' && "text-lightOrange font-bold hover:text-lightOrange")}>Portfolio</Link>
        <Link to={"/contact"} className={'hover:text-[#ffffff4e] ' + (pathname === '/contact' && "text-lightOrange font-bold hover:text-lightOrange")}>Contact</Link>
      </div>
    </div>
  )
}

export default Header
