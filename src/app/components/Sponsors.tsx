import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import chetak from "@/assets/sponsors/chetak-event.svg";
import ktm from "@/assets/sponsors/KTM-event.jpg";
import yanni from "@/assets/sponsors/yanni-plast.jpg";
import husqvarna from "@/assets/sponsors/husqvarna-motorcycles-event.png";
import vinsanworld from "@/assets/sponsors/vinsanworld.png";
import dempo from "@/assets/sponsors/dempo.jpeg";
import Image from "next/image";
import SponsorSection from "@/components/SponsorSection";

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
      className={`${space.className} w-screen h-full flex items-center flex-col my-10`}
      id="sponsors"
    >
      <div className="flex w-full items-center justify-center relative mt-10">
        <div className="h-0.5 gradient-five-colors w-full absolute"></div>
        <h2
          className={`${panchang.className} text-4xl sm:text-5xl md:text-7xl font-bold z-10 bg-[#06050a]`}
        >
          SPONSORS
        </h2>
      </div>
      <SponsorSection />
    </div>
  );
};

export default Sponsors;
