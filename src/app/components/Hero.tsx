"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import ScrollText from "./Events/Scroll";

const space = Space_Grotesk({
  weight: ["700", "500"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center headerbackground">
      <div className="h-screen w-screen flex flex-col items-center justify-center text-center">
        <motion.h1
          className={`${panchang.className} xl:text-9xl text-3xl font-bold line-clamp-1 md:text-7xl sm:text-6xl lg:text-8xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, damping: 10 }}
        >
          SPECTRUM
        </motion.h1>
        <motion.div
          className="bg-gradient-to-b from-white to-[#111111] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2, damping: 10 }}
        >
          <h2 className={`md:text-4xl font-bold text-xl ${panchang.className}`}>
            2024
          </h2>
        </motion.div>
      </div>
      <motion.div
        className="bg-[#FFBA25] w-11/12 md:h-16 rounded-xl rounded-tl-none flex items-center md:justify-between text-black md:flex-row flex-col justify-center my-5 md:text-2xl text-sm "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2, ease: "easeIn" }}
      >
        <div>
          <h3 className="md:ml-16 font-bold">
            3<span className="text-purple-500">RD.</span> 4
            <span className="text-purple-500">TH.</span> APRIL
          </h3>
        </div>
        <div>
          <h3 className="md:mr-16 font-bold">
            / * GOA COLLEGE OF ENGINEERING */
          </h3>
        </div>
      </motion.div>

      <ScrollText
        text={"EXPO_ROBO WARS_ROBO SOCCER_HACKATHON_RC BOAT_UI/UX HACK"}
      />
    </div>
  );
};

export default Hero;
