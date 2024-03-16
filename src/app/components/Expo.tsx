'use client'
import localFont from 'next/font/local'
import { Space_Grotesk } from 'next/font/google'
import ScrollingText from './ScrollingText'
import GlowExpo from '../../../public/glow-expo-build.svg'
import ExpoImage from '../../../public/expoImage.png'
import Image from 'next/image'

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
    <div className="w-screen h-screen" id='expo'>
     <ScrollingText text={"EXPO_ROBO WARS_ROBO SOCCER_HACKATHON_RC BOAT_UI/UX HACK"}/>
     <div className="w-screen p-10 sm:p-10 sm:pr-20 flex justify-between flex-col md:flex-row">
      <div className="md:w-4/6 w-5/6 relative">
      <Image src={GlowExpo.src} height={GlowExpo.height} width={GlowExpo.width} alt="" className='absolute w-[200%] md:left-80 left-52 blur-3xl rounded-full top-2/4 transform -translate-x-1/2 -translate-y-1/2 -z-10'/>
      <Image src={ExpoImage.src} width={ExpoImage.width} height={GlowExpo.height} alt="" className=''/>
      </div>
        
        <div className="md:w-1/5 p-2 flex flex-col justify-center md:items-end items-center gap-[0.5rem] mt-8 md:mt-0">
        <div className={`${space.className} bg-[#741CFFC9] text-sm flex items-center justify-center px-5 whitespace-nowrap font-bold rounded-3xl py-2 rounded-tl-none`}>FOR HIGH SCHOOLERS</div>
            <h2 className={`${panchang.className} font-bold md:text-7xl text-5xl text-end`}>EXPO</h2>
            <p className={`${space.className} text-[#FFBA25] text-lg md:mt-8 mt-5 py-2 pl-2 text-center sm:text-right`}>Exhibit your innovations at our student expo this year. We invite all High School students in and around Goa to exhibit their creations.</p>
            {/* <button className="bg-[#741CFF] rounded-3xl py-2 rounded-tl-none w-2/3">REGISTER NOW</button> */}
        </div>
    </div>

    </div>
  )
}

export default Expo