"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from 'next/font/google'
import { motion } from "framer-motion";
import { PinContainer } from "./3dPin";
const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const space = Space_Grotesk({
  weight: ['700','500'],
  subsets: ['latin'],
  display: 'swap',
})

const eventsData = [
  { title: "COMPUTER", event: "TECHNIX" },
  { title: "INFORMATION TECHNOLOGY", event: "TECHFLUENCE" },
  { title: "MECHANICAL", event: "TORQUE" },
  { title: "ELECTRONICS & TELECOMM", event: "RESONANCE" },
  { title: "ELECTRICAL & ELECTRONICS", event: "SPARKS" },
  { title: "CIVIL", event: "PRATIKRIYA" },
];

const Event = () => {
  return (
    <div className={`${space.className} w-screen mt-96 relative sm:h-[150vh] h-[250vh]`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"
      >
        <div className="absolute w-full h-full bg-gradient-to-br from-[#6B46C1] via-[#5933A6] to-[#4C1D95] rounded-[6rem] filter blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"
        ></div>
        <img src="Element.svg" alt="" className="z-0" />
      </div>
      <div className="relative">
        <motion.h1
          className={`${panchang.className} font-bold md:text-7xl ml-10 text-4xl`}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.2,delay:0.2}}
        >
          EVENTS
        </motion.h1>
        <div className="absolute gradient-five-colors h-[1px] w-screen top-1/2 -z-10"></div>
      </div>
      <div className="mt-10 mx-4 md:mx-20 text-xl">
        <motion.p className="text-[#FFBA25] text-end flex flex-col"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.2,delay:0.2}}
        >
          <span>Explore our events under each department.</span> Click to know
          more.
        </motion.p>
      </div>
      <div className="w-screen grid lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 grid-cols-1 items-center justify-center z-[100] gap-10 p-10 place-content-center">
        { eventsData.map((events,index)=>{
          return (
            <PinContainer title={events.event} href="">
              <div key={index}>
            <motion.div className="flex justify-center"
            initial={{opacity:0,y:10}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.2,delay:1}}
            >
         <div style={{backgroundImage:'url("eventBox.svg")'}} className="lg:w-[376px] lg:h-[344px] md:w-[356px] md:h-[326px] sm:w-[336px] sm:h-[307px] w-[300px] h-[277px] bg-cover overflow-hidden">
          <div className="flex items-center justify-center flex-col mt-20">
          <h2 className="ms:text-3xl text-2xl text-wrap text-center">{events.title}</h2>
          <h3 className="text-[#FFBA25]">DEPARTMENT</h3>
          <img src="https://s3-alpha-sig.figma.com/img/52d7/c247/011c2659015ffd1b09c19a9e1e679abc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDxUFEyAbNiLrLNuPOy0P9Op9onx1Mdn4ko7Xb88L2I2afCEWElFPdUGbfqDaYXMIl6g0c1NPyjBHHRyjnq18OIc1MeKFOTmfg3FbXPq3MqNY3VMbxpTcfE9E6-MDz2At1BAg811JnNqAt1~BNJu7h37ZtwAnuOwhaeRcMQt-Lz7wvQRPUOxKP8SG~YiRTRO0ZNeqrz31UYFlQ6vkaYkpZLVJGX7DqowC1cwQbAaQS9foqRSo1S6C1RqXxz1MtoqLXKJyrWFHNW2KqIiqhXu3AWgTXPmfjx-U1aLS1FwDf2I9JtM63zxrNEmFGJ7lPaoDg9mYZI92MEi2dC08Dla7w__" alt="" className="rotate-[24deg] -z-10"/>
          </div>
         </div>
        </motion.div>
          </div>
            </PinContainer>
          ) 
          
          
        })
      }    
      </div>
    </div>
  );
};

export default Event;
