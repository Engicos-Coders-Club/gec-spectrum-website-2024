"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { PinContainer } from "./3dPin";
import { eventsData } from "@/assets/EventData";
import Image from "next/image";
import Link from "next/link";
import EventsSection from "@/components/Events/EventsSection";
import { ImDownload } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";

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
    <div className={`${space.className} mt-20 relative sm:mb-10 lg:mb-5`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50">
        <div className="absolute w-full h-full bg-gradient-to-br from-[#6B46C1] via-[#5933A6] to-[#4C1D95] rounded-[6rem] filter blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"></div>

        {/* <Image  hidden src={ElementSVG.src} height={ElementSVG.height} width={ElementSVG.width} alt="" className="z-0 hidden md:block" /> */}
      </div>
      {/* heading */}
      <div className="flex w-full items-center justify-center relative mt-20">
        <div className="h-0.5 gradient-five-colors w-full absolute"></div>
        <h2
          className={`${panchang.className} text-3xl sm:text-5xl md:text-7xl font-bold z-10 bg-[#06050a] uppercase`}
        >
          activities
        </h2>
      </div>
      <div className="flex justify-between flex-wrap flex-col items-center  mt-16 mx-16 gap-6 md:gap-3">
        {/* left hand side */}
        <p className="text-2xl uppercase tracking-wide mt-8">Competitions</p>
        {/* right hand side */}
        <motion.div
          className="flex items-center justify-center flex-col gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="text-mango flex text-center">
            Explore our events under each department. Click tile to know more.
          </p>
          <a
            title="Download Brochure"
            className="bg-primary p-2 px-5 rounded-full w-fit mx-auto text-sm rounded-tl-none hover:bg-violet-500 flex gap-2 items-center"
            download={true}
            href="/GEC- Spectrum-Brochure-2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <ImDownload />
            BROCHURE
          </a>
        </motion.div>
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
          className="w-fit mx-auto mt-2 sm:mt-6"
        >
          <Link
            href="/competitions"
            className="bg-mango hover:bg-white text-bgDark px-5 whitespace-nowrap font-bold rounded-3xl py-2 rounded-tl-none flex items-center gap-4 justify-between"
          >
            BROWSE ALL COMPETITIONS <MdOutlineArrowOutward size={18} />
          </Link>
        </motion.div>
      </div>
      {/* <div className="mx-16 text-center">
        <motion.p
          className="text-3xl uppercase tracking-wide mt-24 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Events
        </motion.p>
      </div> */}
      <motion.div
        className="mt-24 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <EventsSection />
      </motion.div>
    </div>
  );
};

export default Event;
