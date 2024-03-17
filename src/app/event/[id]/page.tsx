'use client'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { Space_Grotesk } from "next/font/google";
import { EVENT } from "@/utils/data.example";
import localFont from "next/font/local";
import { usePathname, useRouter } from "next/navigation";
import Checker from "@/assets/checker.png"
import Image from "next/image";
import { RiLink } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const space = Space_Grotesk({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const page = ({ params }: { params: { id:number } }) => {
  // const router = useRouter();
  // const { searchParams } = router; // Get search parameters object

  // // Extract the id from searchParams
  // const id = searchParams?.get('id');

  // console.log(`Event ID: ${id}`);


  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <div className="w-screen">
        <div className="w-full">
          <div className="w-screen pl-14 flex justify-between items-start"> 
            <div className="flex w-[66%] h-full py-10  flex-col gap-10">
              <div className="flex gap-2 w-20">
                <Link href="/" className="flex gap-2">
                  <IoChevronBack className=" size-5" />
                  <p
                    className={`hover:underline mb-2 ${space.className} font-normal text-base leading-5`}
                  >
                    Back
                  </p>
                </Link>
              </div>
              <div className="w-3/4 flex-1 h-full flex flex-col gap-5">
                <h1
                  className={`${panchang.className} font-semibold text-2xl text-[#FA5622]`}
                >
                  {EVENT[params.id]?.subtitle}
                </h1>
                <h1
                  className={`${panchang.className} font-semibold text-6xl leading-[4rem]`}
                >
                  {EVENT[params.id]?.title}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full">
                    <RiLink />
                    SHARE EVENT
                  </div>
                  <div className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full">
                    <FaInstagram />
                    FOLLOW US
                  </div>
                </div> 
                <div className="mt-5">
                  <p className="font-bold mb-2 text-lg text-mango">WHAT'S IT?</p>
                  <p>Pen is mightier than sword, but we geeks prefer to fight using code. Enter the arena to battle it out. Magic of your logic is what we care about.</p>
                  <div className="flex gap-5 items-center mt-10">
                    <button className=" border border-primary rounded-full rounded-tl-none p-1.5 px-5 hover:bg-primary">RULEBOOK</button>
                    <button className=" border border-primary rounded-full rounded-tl-none p-1.5 px-5 bg-primary">REGISTER</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[34.8%] border-l border-b border-[#FFBA25]">
                <Image 
                  src={Checker.src}
                  height={Checker.height}
                  width={Checker.width}
                  alt=""
                />
                <div className=" border-t border-[#FFBA25] flex flex-col items-center justify-center py-5">
                  <p className="text-2xl tracking-widest font-semibold mb-2">PRIZES</p>
                  <p className="text-4xl font-medium">1st ~ <span className="font-semibold text-tangerine">₹ 4000</span></p>
                  <p className="text-3xl font-medium mt-1">2nd ~ <span className="font-semibold text-tangerine">₹ 4000</span></p>
                </div>
            </div>
          </div>
          <div className="w-screen flex items-center justify-evenly border-y border-[#FFBA25]">
            <div className=" py-5 w-[33%] h-auto flex justify-between items-center pl-10">
              <div
                className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
              >
                FEE
              </div>
              <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
                <h2 className=" font-bold leading-10 text-3xl">
                  {EVENT[params.id].fee}
                </h2>
              </div>
            </div>
            <div className=" py-5  border-l border-r border-[#FFBA25] w-[33%] h-full">
              <div className="h-full mx-8 flex justify-between items-center">
                <div className="flex flex-row">
                  <div
                    className={`w-10 h-20 rotate-[270deg] flex justify-center ${space.className} font-bold`}
                  >
                    TEAM
                  </div>
                  <div
                    className={`w-2 h-20 rotate-[270deg] flex justify-center ${space.className} font-bold`}
                  >
                    SIZE
                  </div>
                </div>
                <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
                  <h2 className=" font-bold leading-10 text-3xl">
                    {EVENT[params.id].team_size} ({EVENT[params.id].type})
                  </h2>
                </div>
              </div>
            </div>
            <div className=" py-5 w-[33%] h-auto flex justify-between items-center pr-10">
              <div
                className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
              >
                DATE
              </div>
              <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
                <h2 className=" font-bold leading-10 text-3xl">
                  {EVENT[params.id].date}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-20">
          <div className="border border-primary py-10 px-7 flex justify-between items-center">
                <div
                  className={`h-full tracking-widest  w-10 rotate-[270deg] ${space.className} font-bold flex justify-center items-center`}
                >
                  CONTACT
                </div>
                <div
                  className={`${space.className} text-[#FFBA25] w-60 h-full flex flex-col items-end justify-center`}
                >
                  <Link
                    href={EVENT[params.id].contacts[0].contact}
                    className="text-right"
                  >
                    <h2 className="font-semibold leading-6 text-xl flex items-center gap-2">
                      {EVENT[params.id].contacts[0].name}
                      <span className="text-[#741CFF]">
                        <FaWhatsapp className="font-semibold text-xl" />
                      </span>
                    </h2>
                  </Link>
                  <Link href={EVENT[params.id].contacts[1].contact}>
                    <h2 className="font-semibold leading-6 text-xl flex items-center gap-2">
                      {EVENT[params.id].contacts[1].name}
                      <span className="text-[#741CFF]">
                        <FaWhatsapp className="font-semibold text-xl" />
                      </span>
                    </h2>
                  </Link>
                </div>
          </div>
          <div className="flex flex-col gap-5 uppercase">
            <p className="text-mango font-semibold text-3xl mt-10">DETAILS</p>
            <p className="text-mango font-semibold text-xl">DURATION: <span className="text-white">2 DAYS</span></p>
            <p className="text-mango font-semibold text-xl">max participation limit: <span className="text-white">2 DAYS</span></p>
            <p className="font-semibold text-lg">GAMEPLAY</p>
            <ul className=" list-disc ml-5">
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
            </ul>
            <p className="font-semibold text-lg">ARENA</p>
            <ul className=" list-disc ml-5">
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
              <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
