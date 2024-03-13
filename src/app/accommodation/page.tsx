import Navbar from "@/components/Navbar";
import localFont from 'next/font/local';
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import Coming from "../ComingSoon/page";

const Space = Space_Grotesk({ subsets : ['latin'], weight: ['700', '600']});

const panchang = localFont({
  src: '../../../public/Panchang-Variable.ttf',
  display: 'swap',
});



export default function Accommodation() {

  return (
    <main>
      <section className="border border-gray-300 border-l-0 border-r-0">
        <Navbar />
      </section>
      <section className="w-full flex items-center h-48 border-b border-[#FFBA25]">
        <div className={`w-full sm:w-3/4 h-full flex items-center sm:border-r border-[#FFBA25]`}>
          <div className="p-5 mx-5 sm:mx-10 flex flex-col space-y-2 sm:space-y-5">
            <p className={`text-primary font-bold text-lg sm:text-xl ${panchang.className}`}>BOOK YOUR</p>
            <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold ${panchang.className}`}>ACCOMMODATION</p>
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center invisible sm:visible">
          <span className={`text-primary flex items-center text-8xl lg:text-9xl ${Space.className}`}>$~</span>
        </div>
      </section>
      <Coming></Coming>
    </main>
  );
}
