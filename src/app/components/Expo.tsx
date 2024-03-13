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
    <div className="w-screen h-screen" id='expo'>
     <ScrollingText text={"EXPO_ROBO WARS_ROBO SOCCER_HACKATHON_RC BOAT_UI/UX HACK"}/>
     <div className="w-screen p-10 flex justify-between flex-col md:flex-row">
      <div className="md:w-4/6 w-5/6 relative">
      <img src="glow-expo-build.svg" alt="" className='absolute w-[200%] md:left-80 left-52 blur-3xl rounded-full top-2/3 transform -translate-x-1/2 -translate-y-1/2 -z-10'/>
      <img src="expoImage.png" alt="" className=''/>
      </div>
        
        <div className="md:w-1/5 p-2 flex flex-col justify-center md:items-end items-center gap-[0.5rem] mt-8 md:mt-0">
        <div className={`${space.className} bg-[#741CFFC9] text-sm flex items-center justify-center w-2/3 font-bold rounded-3xl py-2 rounded-tl-none`}>FOR HIGH SCHOOLERS</div>
            <h2 className={`${panchang.className} font-bold md:text-7xl text-5xl text-end`}>EXPO</h2>
            <p className={`${space.className} text-[#FFBA25] md:text-end md:mt-8 mt-5 text-center py-2`}>Exhibit your innovations at our student expo this year. Open to High School and College students.</p>
            {/* <button className="bg-[#741CFF] rounded-3xl py-2 rounded-tl-none w-2/3">REGISTER NOW</button> */}
        </div>
    </div>

    </div>
  )
}

export default Expo