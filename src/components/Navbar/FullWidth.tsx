import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { MdArrowOutward, MdOutlineLocalHotel } from 'react-icons/md'
import GECLogo from "@/assets/geclogo.png"
import { AiOutlineQuestion, AiOutlineTeam } from 'react-icons/ai'
import { GoClock, GoPersonAdd } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { BsTrophy } from 'react-icons/bs'
import { PiGlobeLight, PiTicketThin } from 'react-icons/pi'

let links = [
  {
    name:"HOME",
    icon:<IoHomeOutline color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"ABOUT",
    icon:<AiOutlineQuestion color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"SCHEDULE",
    icon:<GoClock color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"COMPETITIONS",
    icon:<BsTrophy color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"EVENTS",
    icon:<PiTicketThin color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"EXPO",
    icon:<PiGlobeLight color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"SPONSORS",
    icon:<GoPersonAdd color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"ACCOMODATION",
    icon:<MdOutlineLocalHotel color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"TEAM",
    icon:<AiOutlineTeam color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  {
    name:"CONTACT",
    icon:<FiPhone color='#FA5622' size={20} className='duration-300 group-hover:w-[0px]'/>,
    link:"/"
  },
  
]

function FullWidth({close}:any) {
  return (
    <div className="h-screen w-screen entrance flex fixed top-0 left-0 bg-[#06050a] z-10">
      <div className="flex-1 flex flex-col h-full">
          {
            links.map((link,i)=>(
              <Link key={i} href={link.link} className="hover:bg-white flex-1 group border border-[#FA5622] flex items-center justify-between duration-500 hover:text-black text-2xl md:text-3xl  px-12 hover:font-semibold">
                <div className='flex gap-10 items-center'>
                  {link.icon}
                  <p>{link.name}</p>
                </div>
                <MdArrowOutward className='duration-150 h-[0px] group-hover:h-fit'/>
              </Link>
            ))
          }
          
      </div>
      <div className='flex flex-col h-full'>
        <button onClick={()=>close(false)} className='border-t border-b-2 border-r border-[#FA5622] h-[76px] flex items-center justify-center'>
          <svg width="97" height="35" viewBox="0 0 97 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.06066" y1="1.93934" x2="95.5937" y2="96.4724" stroke="#FA5622" stroke-width="3"/>
            <line y1="-1.5" x2="133.69" y2="-1.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 97.5331)" stroke="#FA5622" stroke-width="3"/>
          </svg>
        </button>
        <div className='border-b border-r flex items-end justify-center pb-5 border-[#FA5622] flex-1 '>
          <Image 
              src={GECLogo.src}
              width={GECLogo.width-20}
              height={GECLogo.height-20}
              className=""
              alt="logo"
          />
        </div>
      </div>
    </div>
  )
}

export default FullWidth