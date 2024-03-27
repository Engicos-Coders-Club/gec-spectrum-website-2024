import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import chetak from "@/assets/sponsors/chetak-event.svg";
import ktm from "@/assets/sponsors/KTM-event.jpg";
import yanni from "@/assets/sponsors/yanni-plast.jpg";
import husqvarna from "@/assets/sponsors/husqvarna-motorcycles-event.png";
import Image from "next/image";
const space = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const Sponsors = () => {
  return (
    <div
      className={`${space.className} w-screen min-h-screen flex items-center flex-col py-10`}
      id="sponsors"
    >
      <div className="flex w-full items-center justify-center relative mt-20">
        <div className="h-0.5 gradient-five-colors w-full absolute"></div>
        <h2
          className={`${panchang.className} text-3xl sm:text-5xl md:text-7xl font-bold z-10 bg-[#06050a]`}
        >
          SPONSORS
        </h2>
      </div>
      <div className="w-full flex items-center justify-center flex-col mt-10">
        <h3 className="text-xl md:text-3xl mt-10 mb-6 uppercase font-semibold flex items-center gap-2">
          <span className="bg-mango size-3 md:size-5 rounded-full block">
            {" "}
          </span>{" "}
          Co SPONSORS
        </h3>
        <div className="mx-auto w-full">
          <a
            title="Yanni Infra Projects"
            href="https://www.yanniinfraprojects.com/"
            className={`bg-[#fff] w-52 mx-auto h-28 md:w-80 md:h-44 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-gray-400 border-4`}
          >
            <Image
              src={yanni}
              height={yanni.height}
              width={yanni.width}
              alt="Yanni Infra Projects"
              className="object-contain"
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full h-full flex items-center justify-center flex-col bg-black">
        <h3 className="text-xl md:text-3xl mt-10 mb-6 uppercase font-semibold flex items-center gap-2">
          <span className="bg-primary size-3 md:size-5 rounded-full block">
            {" "}
          </span>{" "}
          Event SPONSORS
        </h3>
        <div className="md:w-3/5 flex gap-5 md:gap-10  flex-col md:flex-row flex-wrap justify-around items-center">
          <a
            href="https://www.chetak.com/"
            title="Bajaj Chetak Electric Scooters"
            className={`bg-[#22d3ee] w-44 h-20 md:w-64 md:h-32 relative hover:scale-105 transition-transform duration-300 ease-in-out px-3 py-5 flex justify-center rounded-xl border-[#25a2b5] border-4`}
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
            title="KTM Race Motorcycles"
            href="https://www.ktm.com/en-in.html/"
            className={`bg-[#FF6600] w-44 h-20 md:w-64 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out px-3  flex justify-center items rounded-xl border-[#9b572a] border-4`}
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
            className={`bg-[#002550] w-44 h-20 md:w-64 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-sky-800 border-4`}
          >
            <Image
              src={husqvarna}
              height={husqvarna.height}
              width={husqvarna.width}
              alt="Husqvarna Motorcycles"
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
