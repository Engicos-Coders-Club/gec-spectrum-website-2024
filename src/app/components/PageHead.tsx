import localFont from 'next/font/local'
import { Space_Mono } from 'next/font/google'

const spacemono = Space_Mono({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })
const panchang = localFont({
    src: '../../../public/Panchang-Variable.ttf',
    display: 'swap',
  })

interface PageHeadProps {
  title:string,
  body:string,
  faltutext:string
}

const PageHead = ({body, title, faltutext}:PageHeadProps) => {
  return (
    <div className={`${panchang.className} w-screen md:h-56  h-40 flex border border-b-[#FFBA25] border-t-white border-x-0`}>
     <div className="w-4/6 h-full sm:p-16 p-10 sm:border-r border-[#FFBA25] flex items-start justify-center flex-col ">
        <h2 className="text-[#741CFF] font-semibold sm:text-2xl text-lg">{body}</h2>
        <h1 className='font-semibold sm:text-6xl text-5xl'>{title}</h1>
     </div>
     <div className="w-2/6 h-full sm:flex justify-center items-center hidden">
        <p className={`${spacemono.className} md:text-[10rem]  text-[#741CFF] text-7xl`}> {faltutext}</p>
     </div>
    </div>
  )
}

export default PageHead 