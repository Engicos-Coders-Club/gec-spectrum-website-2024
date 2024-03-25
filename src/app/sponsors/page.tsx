import PageHead from "../components/PageHead";
import chetak from "@/assets/sponsors/chetak-event.svg";
import ktm from "@/assets/sponsors/ktm-event.jpg";
import yanni from "@/assets/sponsors/yanni-plast.jpg";
import husqvarna from "@/assets/sponsors/husqvarna-motorcycles-event.png";
import Image from "next/image";

const SponsorsPage = () => {
  return (
    <>
      <PageHead title="Sponsors" faltutext="$*" body="esteemed" />
      {/* <div className="w-full h-full flex items-center justify-center flex-col mt-10">
        <h3 className="text-4xl my-6">TITLE SPONSORS</h3>
        <div className="w-2/3 h-3/5 md:w-3/5 md:h-2/3 flex gap-5 flex-col md:flex-row">
          <div className="bg-white w-full h-full"></div>
          <div className="bg-white w-full h-full"></div>
        </div>
      </div> */}
      <div className="w-full h-full flex items-center justify-center flex-col mb-10">
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
            className={`bg-[#22d3ee] w-32 h-14 md:w-64 md:h-32 relative hover:scale-105 transition-transform duration-300 ease-in-out px-3 py-5 flex justify-center rounded-xl border-[#25a2b5] border-4`}
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
            className={`bg-[#FF6600] w-32 h-14 md:w-64 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out px-3  flex justify-center items rounded-xl border-[#9b572a] border-4`}
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
            title="Yanni Infra Projects"
            href="https://www.yanniinfraprojects.com/"
            className={`bg-[#fff] w-32 h-14 md:w-64 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-gray-400 border-4`}
          >
            <Image
              src={yanni}
              height={yanni.height}
              width={yanni.width}
              alt="Yanni Infra Projects"
              className="object-contain"
            />
          </a>
          <a
            title="Husqvarna Motorcycles"
            href="https://www.husqvarna-motorcycles.com/en-in.html/"
            className={`bg-[#002550] w-32 h-14 md:w-64 md:h-32 relative object-contain hover:scale-105 transition-transform duration-300 ease-in-out py-2 px-3 md:py-5 flex justify-center rounded-xl border-sky-800 border-4`}
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
    </>
  );
};
export default SponsorsPage;
