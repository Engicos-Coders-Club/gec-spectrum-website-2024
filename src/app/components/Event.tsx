"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { PinContainer } from "./3dPin";
import { eventsData } from "@/assets/EventData";
import Image from "next/image";
import ElementSVG from "../../../public/Element.svg";
import Link from "next/link";

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
      className={`${space.className} w-screen mt-96 relative sm:mb-80 lg:mb-5`}
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

      <motion.p
        className="text-[#FFBA25] text-end flex flex-col ml-auto mr-10 mt-10 mb-2 md:mr-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        Explore our events under each department.{" "}
        <span>Click tile to know more.</span>
      </motion.p>
      <div className="md:hidden ml-auto w-fit mr-10 mt-4">
        <a
          title="Download Brochure"
          className="bg-primary p-2 px-5 rounded-full rounded-tl-none font-semibold hover:bg-violet-500"
          download={true}
          href="/GEC- Spectrum-Brochure-2024.pdf"
          target="_blank"
          rel="noreferrer"
        >
          BROCHURE
        </a>
      </div>
      <div className="flex flex-col">
        <div className="w-screen flex flex-wrap items-center justify-center z-[10] gap-10 p-10">
          {eventsData.map((events, index) => {
            return (
              <PinContainer key={index} title={events.event} href={events.id}>
                <div>
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-fit mx-auto mt-10"
        >
          <Link
            href="/competitions"
            className="bg-[#741CFFC9] px-5 whitespace-nowrap font-bold rounded-3xl py-2 rounded-tl-none"
          >
            BROWSE ALL COMPETITIONS
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Event;
