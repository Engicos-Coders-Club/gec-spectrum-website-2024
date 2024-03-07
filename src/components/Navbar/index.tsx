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
    <nav className="bg-black px-16 py-5 flex justify-between items-center">
        <div className="flex items-center gap-5">
            {
                !open ?
                <svg onClick={()=>setOpen((prev)=>!prev)} className="mb-2" width="45" height="18" viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="45" y2="1" stroke="white"/>
                    <line y1="9" x2="45" y2="9" stroke="white"/>
                    <line y1="17" x2="45" y2="17" stroke="white"/>
                </svg> :
                <FullWidth close={setOpen}/>
            }
            <div>
                <Image 
                    src={Logo.src}
                    width={Logo.width}
                    height={Logo.height}
                    className=""
                    alt="logo"
                />
            </div>
        </div>
        <div className="flex items-center gap-5">
            {
                links.map((link, i)=>(
                    <Link href={link.to} key={i} className=" hover:bg-dotted-border bg-black relative flex justify-center rounded-full overflow-hidden">
                        <div className="bg-black m-[1px] p-2 px-5 outline-dotted rounded-full outline-2 outline-black">
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