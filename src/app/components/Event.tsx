"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { PinContainer } from "./3dPin";
import { eventsData } from "@/assets/EventData";
import Image from "next/image";
import ElementSVG from "../../../public/Element.svg";

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const space = Space_Grotesk({
  weight: ["700", "500"],
  subsets: ["latin"],
  display: "swap",
});

const Event = () => {
  return (
    <div
      className={`${space.className} w-screen mt-96 relative sm:h-[150vh] h-[300vh]  sm:mb-80 lg:mb-5`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50">
        <div className="absolute w-full h-full bg-gradient-to-br from-[#6B46C1] via-[#5933A6] to-[#4C1D95] rounded-[6rem] filter blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"></div>

        {/* <Image  hidden src={ElementSVG.src} height={ElementSVG.height} width={ElementSVG.width} alt="" className="z-0 hidden md:block" /> */}
      </div>
      <div className="relative">
        <motion.h1
          className={`${panchang.className} font-bold bg-[#06050a] w-fit md:text-7xl ml-10 text-4xl`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          EVENTS
        </motion.h1>
        <div className="absolute gradient-five-colors h-[1px] w-screen top-1/2 -z-10"></div>
      </div>
      <div className="mt-10 mx-4 md:mx-20 text-xl">
        <motion.p
          className="text-[#FFBA25] text-end flex flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <span>Explore our events under each department.</span> Click to know
          more.
        </motion.p>
      </div>
      <div className="flex flex-col">
        <div className="w-screen grid lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 grid-cols-1 items-center justify-center z-[100] gap-10 p-10 place-content-center">
          {eventsData.map((events, index) => {
            return (
              <PinContainer key={index} title={events.event} href="">
                <div>
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                  >
                    <div
                      style={{ backgroundImage: 'url("eventBox.svg")' }}
                      className="lg:w-[376px] lg:h-[344px] md:w-[356px] md:h-[326px] sm:w-[336px] sm:h-[307px] w-[300px] h-[277px] bg-cover overflow-hidden"
                    >
                      <div className="flex items-center justify-center flex-col mt-20">
                        <h2 className="ms:text-3xl text-2xl text-wrap text-center">
                          {events.title}
                        </h2>
                        <h3 className="text-[#FFBA25]">DEPARTMENT</h3>
                        <Image
                          src={events.image}
                          height={400}
                          width={400}
                          alt=""
                          style={{
                            transform: `rotate(${events.rotate})`,
                            marginTop: events.marginTop,
                          }}
                          className="-z-10"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </PinContainer>
            );
          })}
        </div>
{/* under the tiles */}
        <motion.p
          className={`${space.className} bg-[#741CFFC9] w-fit self-center  text-sm text-center px-5 whitespace-nowrap font-bold rounded-3xl py-2 rounded-tl-none`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          BROWSE ALL COMPETITIONS
        </motion.p>
      </div>
    </div>
  );
};

export default Event;
