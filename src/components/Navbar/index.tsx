"use client"

import Image from "next/image"
import Logo from "@/assets/logo.png"
import { useState } from "react"
import Link from "next/link"
import FullWidth from "./FullWidth"
function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    {
        name:"COMPETITIONS",
        to: "#competitions"
    },
    {
        name:"EXPO",
        to: "#expo"
    },
    {
        name:"SPONSORS",
        to: "#sponsors"
    },
    {
        name:"CONTACT",
        to: "#contact"
    }
  ]
  return (
    <nav className="bg-[#06050a] px-10 sm:px-16 py-5 flex justify-between items-center">
        <div className="flex items-center justify-between flex-1 lg:flex-auto lg:justify-start gap-5">
            {
                !open ?
                <svg onClick={()=>setOpen((prev)=>!prev)} className="order-2 lg:order-1 mb-2" width="45" height="18" viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="45" y2="1" stroke="white"/>
                    <line y1="9" x2="45" y2="9" stroke="white"/>
                    <line y1="17" x2="45" y2="17" stroke="white"/>
                </svg> :
                <FullWidth close={setOpen}/>
            }
            <div className="order-1 lg:order-2W">
                <Image 
                    src={Logo.src}
                    width={Logo.width}
                    height={Logo.height}
                    className=""
                    alt="logo"
                />
            </div>
        </div>
        <div className="items-center gap-5 hidden lg:flex">
            {
                links.map((link, i)=>(
                    <Link href={link.to} key={i} className=" hover:bg-dotted-border bg-[#06050a] relative flex justify-center rounded-full overflow-hidden">
                        <div className="bg-[#06050a] m-[1px] p-2 px-5 outline-dotted rounded-full outline-2 outline-black">
                            {link.name}
                        </div>
                    </Link>
                ))
            }
            
            <button className="bg-primary p-2 px-5 rounded-full rounded-tl-none">
                BROCHURE
            </button>
        </div>
    </nav>
  )
}

export default Navbar