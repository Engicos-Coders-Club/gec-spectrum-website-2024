'use client'
import { Merriweather, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const panchang = localFont({
    src: "../../../public/Panchang-Variable.ttf",
    display: "swap",
  });
  const merri = Merriweather({
      weight: ["300", '400', '700', '900'],
      subsets: ["latin"],
      display: "swap"
  });
  const space = Space_Grotesk({
      weight: ["700", "500"],
      subsets: ["latin"],
      display: "swap",
  });
   
  const handleExit = () => {
    console.log("Exit");
}
  const handleSubmit = () => {
    console.log("Submit");
}

const Login = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="h-auto w-[50vw] bg-black my-24 rounded-xl border border-[#3F3F3F] py-8 px-11 flex flex-col gap-4">
      <div className="w-full h-16 flex flex-col justify-between">
        <div className="h-7 w-full flex justify-between items-center">
          <div className="h-full w-auto">
            <h1
              className={`${panchang.className} font-bold sm:text-2xl text-sm leading-7 text-[#FFBA25]`}
            >
              Login
            </h1>
          </div>
          <div className="sm:size-6 size-4" onClick={handleExit}>
            <RxCross2 className="text-[#FA5622] sm:text-xl text-lg size-full font-bold"/>
          </div>
        </div>
        <div className="h-5 w-full flex justify-center items-center "><p className={`${space.className} font-medium text-xs leading-5 text-center`}>Haven&apos;t registered yet? Sign up <Link href='/' className="hover:underline">here</Link></p></div>
      </div>
      <div className="w-full h-16 flex flex-col gap-1">
          <h2 className="text-white font-medium leading-5 text-sm">Name</h2>
          <div className="w-full h-9 rounded-lg border-none">
          <input type="text" placeholder="Text Here" className="bg-[#323232] size-full rounded-lg py-2 px-4 inset-0 placeholder:text-white placeholder:text-sm placeholder:font-medium placeholder:leading-5"/>
          </div>
      </div>
      <div className="w-full h-16 flex flex-col gap-1">
          <h2 className="text-white font-medium leading-5 text-sm">Password</h2>
          <div className="w-full h-9 rounded-lg border-none">
          <input type="password" placeholder="Text Here" className="bg-[#323232] size-full rounded-lg py-2 px-4 inset-0 placeholder:text-white placeholder:text-sm placeholder:font-medium placeholder:leading-5"/>
          </div>
      </div>
      <div className="h-5 w-full flex justify-end items-center "><Link href='/' className={`${space.className} hover:underline text-[#E3E3E3] text-xs leading-5`}>Forgot Password?</Link></div>
      
      <div className="w-full h-9 flex justify-center items-center">
          <div className="h-full w-24 bg-[#741CFF] rounded-r-2xl rounded-b-2xl">
              <button className="size-full py-2 px-4 font-bold text-sm" onClick={handleSubmit}>LOGIN</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Login