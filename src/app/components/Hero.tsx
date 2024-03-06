'use client'
import localFont from 'next/font/local'
import { Space_Grotesk } from 'next/font/google'
import { motion } from 'framer-motion'

const space = Space_Grotesk({
    weight: ['700','500'],
    subsets: ['latin'],
    display: 'swap',
  })

const panchang = localFont({
    src: '../../../public/Panchang-Variable.ttf',
    display: 'swap',
  })

const Hero = () => {
  return (
    <div className='h-screen w-fit flex flex-col items-center justify-center' style={{backgroundImage:'url("/Vector.svg")'}}>
        <div className='md:h-[80vh] h-[60vh] w-screen flex flex-col items-center justify-center text-center'>
            <motion.h1 className={`${panchang.className} xl:text-9xl text-5xl font-bold line-clamp-1 md:text-7xl sm:text-6xl lg:text-8xl`}
            initial={{ opacity:0}}
            animate={{ opacity: 1 }}
            transition={{ duration:2, damping: 10}}
            >SPECTRUM</motion.h1>
            <motion.div className='bg-gradient-to-b from-white to-[#111111] text-transparent bg-clip-text'
            initial={{ opacity:0}}
            animate={{ opacity: 1 }}
            transition={{delay:0.5, duration:2, damping: 10}}
            >
                <h2 className={`md:text-4xl font-bold text-xl ${panchang.className}`}>2024</h2>
            </motion.div>
        </div>
        <motion.div className='bg-[#FFBA25] w-11/12 md:h-10 rounded-xl rounded-tl-none flex items-center md:justify-between text-black  md:flex-row flex-col justify-center'

        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1,duration:2,ease:'easeIn'}}
        >
            <div>
                <h3 className={`${space.className} md:ml-16`}>2<span className='text-purple-500'>ND.</span> 3<span className='text-purple-500'>RD.</span> APRIL</h3>
            </div>
            <div>
                <h3 className={`${space.className} md:mr-16`}>/ * GOA COLLEGE OF ENGINEERING */</h3>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero