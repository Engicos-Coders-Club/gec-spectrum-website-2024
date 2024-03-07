import localFont from 'next/font/local'
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })

const panchang = localFont({
    src: '../../../public/Panchang-Variable.ttf',
    display: 'swap',
  })

const Sponsors = () => {
  return (
    <div className={`${space.className} w-screen h-screen flex items-center  flex-col`}>
       <div className='flex w-full items-center justify-center relative'>
        <div className='h-0.5 gradient-five-colors w-full absolute'></div>
        <h2 className={`${panchang.className} text-4xl sm:text-5xl md:text-7xl font-bold z-10 bg-black`}>SPONSORS</h2>
       </div>
       <div className='w-full h-full flex items-center justify-center flex-col mt-10'>
         <h3 className='text-4xl my-6'>TITLE SPONSORS</h3>
         <div className='w-2/3 h-3/5 md:w-3/5 md:h-2/3 flex gap-5 flex-col md:flex-row'>
            <div className='bg-white w-full h-full'></div>
            <div className='bg-white w-full h-full'></div>
         </div>
       </div>
       <div className='w-full h-full flex items-center justify-center flex-col'>
         <h3 className='text-4xl my-6'>CO-SPONSORS</h3>
         <div className='w-2/4 h-3/5 md:w-2/5 md:h-2/4 flex gap-5 flex-col md:flex-row'>
            <div className='bg-white w-full h-full'></div>
            <div className='bg-white w-full h-full'></div>
        </div>
       </div>
    </div>
  )
}

export default Sponsors