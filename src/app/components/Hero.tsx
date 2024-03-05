import localFont from 'next/font/local'
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({
    weight: ['700','500'],
    subsets: ['latin'],
    display: 'swap',
  })

// Font files can be colocated inside of `app`
const panchang = localFont({
    src: '../../../public/Panchang-Variable.ttf',
    display: 'swap',
  })

const Hero = () => {
  return (
    <div className='h-fit w-fit flex flex-col items-center justify-center' style={{backgroundImage:'url("/Vector.svg")'}}>
        <div className='md:h-[80vh] h-[60vh] w-screen flex flex-col items-center justify-center text-center'>
            <h1 className={`${panchang.className} md:text-9xl text-4xl font-bold line-clamp-1`}>SPECTRUM</h1>
            <div className='bg-gradient-to-b from-white to-[#111111] text-transparent bg-clip-text'>
                <h2 className={`md:text-4xl font-bold text-xl ${panchang.className}`}>2024</h2>
            </div>
        </div>
        <div className='bg-[#FFBA25] w-11/12 md:h-10 rounded-xl rounded-tl-none flex items-center md:justify-between text-black  md:flex-row flex-col justify-center'>
            <div>
                <h3 className={`${space.className} md:ml-16`}>2<span className='text-purple-500'>ND.</span> 3<span className='text-purple-500'>RD.</span> APRIL</h3>
            </div>
            <div>
                <h3 className={`${space.className} md:mr-16`}>/ * GOA COLLEGE OF ENGINEERING */</h3>
            </div>
        </div>
    </div>
  )
}

export default Hero