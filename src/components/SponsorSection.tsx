"use client";
import chetak from "@/assets/sponsors/chetak-event.svg";
import ktm from "@/assets/sponsors/KTM-event.jpg";
import yanni from "@/assets/sponsors/yanni-plast.jpg";
import husqvarna from "@/assets/sponsors/husqvarna-motorcycles-event.png";
import vinsanworld from "@/assets/sponsors/vinsanworld.png";
import dempo from "@/assets/sponsors/dempo.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import visteon from "@/assets/sponsors/visteon.png";

const SponsorSection = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col mt-10">
        <h3 className="text-xl md:text-3xl mt-10 mb-6 uppercase font-semibold flex items-center gap-2">
          <span className="bg-tangerine size-3 md:size-5 rounded-full block">
            {" "}
          </span>{" "}
          Title SPONSORS
        </h3>
        <motion.div
          className="md:w-3/5 flex gap-5 md:gap-10 flex-col md:flex-row flex-wrap justify-around items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <a
            title="Vinsan World"
            href="https://vinsanworld.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#fff] w-64 h-32 mx-auto md:w-96 lg:w-1/2 md:h-60 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-gray-400 border-4`}
          >
            <Image
              src={vinsanworld}
              height={vinsanworld.height}
              width={vinsanworld.width}
              alt="Vinsan World Logo"
              className="object-contain p-3"
            />
          </a>
          <a
            title="The House of Dempo"
            href="https://www.dempos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#fff] w-64 h-32 mx-auto md:w-96 lg:w-1/2 md:h-60 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-sky-200 border-4`}
          >
            <Image
              src={dempo}
              height={dempo.height}
              width={dempo.width}
              alt="The House of Dempo Logo"
              className="object-contain"
            />
          </a>
        </motion.div>
      </div>
      <br />
      {/* ------------ Co sponsors ------------- */}
      <div className="w-full flex items-center justify-center flex-col mt-10">
        <h3 className="text-xl md:text-3xl mt-10 mb-6 uppercase font-semibold flex items-center gap-2">
          <span className="bg-mango size-3 md:size-5 rounded-full block">
            {" "}
          </span>{" "}
          Co SPONSORS
        </h3>
        <motion.div
          className="mx-auto w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <a
            title="Yanni Infra Projects"
            href="https://www.yanniinfraprojects.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#fff] w-52 mx-auto h-28 md:w-80 md:h-48 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-gray-400 border-4`}
          >
            <Image
              src={yanni}
              height={yanni.height}
              width={yanni.width}
              alt="Yanni Infra Projects"
              className="object-contain"
            />
          </a>
        </motion.div>
      </div>
      <br />

      {/* ------------ Event Sponsors ------------- */}
      <div className="w-full h-full flex items-center justify-center flex-col bg-black">
        <h3 className="text-xl md:text-3xl mt-10 mb-6 uppercase font-semibold flex items-center gap-2">
          <span className="bg-primary size-3 md:size-5 rounded-full block">
            {" "}
          </span>{" "}
          Event SPONSORS
        </h3>
        <motion.div
          className="md:w-3/5 flex gap-5 md:gap-10  flex-col md:flex-row flex-wrap justify-around items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <a
            href="https://www.chetak.com/"
            title="Bajaj Chetak Electric Scooters"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#22d3ee] w-44 h-20 md:w-60 md:h-32 relative hover:scale-105 transition-transform duration-300 ease-in-out px-3 py-5 flex justify-center rounded-xl border-[#25a2b5] border-4`}
          >
            <Image
              src={chetak}
              height={chetak.height}
              width={chetak.width}
              alt="Bajaj Chetak Electric Scooters"
              className="object-contain"
            />
          </a>
          <a
            title="Visteon | Spectrathon Sponsor"
            href="https://www.visteon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gray-50 w-44 h-20 md:w-60 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-orange-300 border-4`}
          >
            <Image
              src={visteon}
              height={visteon.height}
              width={visteon.width}
              alt="Visteon"
              className="object-contain"
            />
          </a>
          <a
            title="KTM Race Motorcycles"
            href="https://www.ktm.com/en-in.html/"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#FF6600] w-44 h-20 md:w-60 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out px-3  flex justify-center items rounded-xl border-[#9b572a] border-4`}
          >
            <Image
              src={ktm}
              height={ktm.height}
              width={ktm.width}
              alt="KTM Race Motorcycles"
              className="object-contain"
            />
          </a>
          <a
            title="Husqvarna Motorcycles"
            href="https://www.husqvarna-motorcycles.com/en-in.html/"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#002550] w-44 h-20 md:w-60 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-sky-800 border-4`}
          >
            <Image
              src={husqvarna}
              height={husqvarna.height}
              width={husqvarna.width}
              alt="Husqvarna Motorcycles"
              className="object-contain"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
};
export default SponsorSection;
