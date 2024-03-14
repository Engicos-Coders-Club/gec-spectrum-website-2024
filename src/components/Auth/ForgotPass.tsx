"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const handleExit = () => {
  console.log("Exit");
};
const handleSubmit = () => {
  console.log("Submit");
};

const ForgotPass = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-auto w-[50vw] bg-black my-24 rounded-xl border border-[#3F3F3F] py-8 px-11 flex flex-col gap-4">
        <div className="w-full h-7 flex flex-col justify-between">
          <div className="h-full w-full flex justify-between items-center">
            <div className="h-full w-auto">
              <h1
                className={`${panchang.className} font-bold sm:text-2xl text-sm leading-7 text-[#FFBA25]`}
              >
                Forgot Password
              </h1>
            </div>
            <div className="size-6 cursor-pointer" onClick={handleExit}>
              <RxCross2 className="text-[#FA5622] sm:text-xl text-lg size-full font-bold"/>
            </div>
          </div>
        </div>
        <div className="w-full h-16 flex flex-col gap-1">
          <h2 className="text-white font-medium leading-5 text-sm">Enter Email</h2>
          <div className="w-full h-9 rounded-lg border-none">
            <input
              type="email"
              placeholder="Text Here"
              className="bg-[#323232] size-full rounded-lg py-2 px-4 inset-0 placeholder:text-white placeholder:text-sm placeholder:font-medium placeholder:leading-5"
            />
          </div>
        </div>

        <div className="w-full h-9 flex justify-center items-center">
          <div className="h-full w-24 bg-[#741CFF] rounded-r-2xl rounded-b-2xl">
            <button className="size-full py-2 px-4 font-bold text-sm" onClick={handleSubmit}>
              GET OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
