"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import ScrollingText from "../components/ScrollingText";
import GlowExpo from "../../../public/glow-expo-build.svg";
import ExpoImage from "../../../public/expoImage.png";
import Image from "next/image";

const space = Space_Grotesk({
  weight: ["700", "500"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const Expo = () => {
  return (
    <div className="w-screen h-screen overflow-hidden" id="expo">
      <div className="w-screen p-10 sm:p-10 flex justify-between flex-col-reverse items-center lg:items-stretch lg:flex-row gap-10 lg:gap-0 lg:h-screen">
        {/* image ------------ */}
        <div className="w-5/6 md:w-4/6 relative">
          <Image
            src={GlowExpo.src}
            height={GlowExpo.height}
            width={GlowExpo.width}
            alt=""
            className="absolute w-[200%] md:left-80 left-52 blur-3xl rounded-full top-2/4 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          />
          <Image
            src={ExpoImage.src}
            width={ExpoImage.width}
            height={GlowExpo.height}
            alt=""
            className="lg:absolute lg:-left-16 w-full"
          />
        </div>

        {/* text ------------ */}
        <div className="lg:w-1/5 p-2 flex flex-col justify-center items-center lg:items-end gap-[0.5rem] mt-8 md:mt-0">
          <div
            className={`${space.className} bg-[#731cff90] text-sm flex items-center justify-center px-4 whitespace-nowrap font-bold rounded-3xl py-1 rounded-tl-none`}
          >
            FOR HIGH SCHOOLERS
          </div>
          <h2
            className={`${panchang.className} font-bold lg:text-7xl text-5xl text-end`}
          >
            EXPO
          </h2>
          <p
            className={`${space.className} text-[#FFBA25] lg:text-lg md:mt-8 mt-5 py-2 pl-2 text-center lg:text-right`}
          >
            Exhibit your innovations at our student expo this year. We invite
            all High School students in and around Goa to exhibit their
            creations.
          </p>
          {/* <button className="bg-[#741CFF] rounded-3xl py-2 rounded-tl-none w-2/3">REGISTER NOW</button> */}
        </div>
      </div>
    </div>
  );
};

export default Expo;
