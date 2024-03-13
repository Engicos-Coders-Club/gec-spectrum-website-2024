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

const Coming = () => {
  return (
    <div
      className={`${space.className} w-screen h-screen flex items-center flex-col bg-black`}
      id='Coming'
    >
      <div className='w-screen h-full flex items-center justify-center flex-col mt-10'>
        <h3 className='text-4xl my-6 text-white'>Coming Soon</h3>
        <div className="rainbow-line h-1/2 w-1/2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mx-auto"></div>  {/* Updated styles */}
      </div>
    </div>
  )
}

export default Coming
