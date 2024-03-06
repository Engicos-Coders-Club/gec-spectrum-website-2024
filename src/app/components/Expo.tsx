'use client'
import localFont from 'next/font/local'
import { Space_Grotesk } from 'next/font/google'
import ScrollingText from './ScrollingText'

const space = Space_Grotesk({
    weight: ['700','500'],
    subsets: ['latin'],
    display: 'swap',
  })

const panchang = localFont({
    src: '../../../public/Panchang-Variable.ttf',
    display: 'swap',
  })

const Expo = () => {
  return (
    <div className="w-screen h-screen">
     <ScrollingText text={"EXPO ROBOWARS ROBOSOCCER HACKATHON RCBOAT UI/UXHACK"}/>
     <div className="w-screen p-10 flex justify-between flex-col md:flex-row">
        <img src="expoImage.png" alt="" className="md:w-4/6 w-5/6"/>
        <div className="md:w-1/5 p-2 flex flex-col justify-center md:items-end items-center gap-8 mt-8 md:mt-0">
            <h2 className={`${panchang.className} font-bold md:text-7xl text-5xl text-end`}>EXPO</h2>
            <p className={`${space.className} text-[#FFBA25] md:text-end md:mt-8 mt-5 text-center`}>Exhibit your innovations at our student expo this year. Open to High School and College students.</p>
            <button className="bg-[#741CFF] rounded-3xl py-2 rounded-tl-none w-2/3">REGISTER NOW</button>
        </div>
    </div>

    </div>
  )
}

export default Expo