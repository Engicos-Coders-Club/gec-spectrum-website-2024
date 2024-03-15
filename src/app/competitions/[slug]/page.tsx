"use client";
import { EVENT_INFO } from "@/utils/data.example";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { RiLinkM } from "react-icons/ri";
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

const handleSubmit = () => {};
const handleRuler = () => {};

const page = ({ params }: { params: { slug: string } }) => {
  const matchingEvents = EVENT_INFO[params.slug];

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="size-full mt-20">
        <div className="h-[70%] w-screen flex items-center">
          <div className="h-full w-[66%] flex flex-col gap-4 justify-center pl-20">
            <div className="h-10 w-full">
              <div className="flex gap-2 w-40">
                <Link href="/competitions" className="flex gap-2">
                  <IoChevronBack className=" size-5" />
                  <p
                    className={`hover:underline mb-2 ${space.className} font-normal text-base leading-5`}
                  >
                    Back To Events
                  </p>
                </Link>
              </div>
            </div>
            <div className="h-40 w-full">
              <div className="w-auto h-32 flex flex-col gap-2">
                <h1
                  className={`${panchang.className} font-semibold text-2xl text-[#FA5622]`}
                >
                  {matchingEvents[0]?.subtitle}
                </h1>
                <h1
                  className={`${panchang.className} font-semibold text-6xl leading-[4rem]`}
                >
                  {matchingEvents[0]?.title}
                </h1>
              </div>
              <div className="w-auto h-8 flex items-center gap-2">
                <div className="h-full w-32 rounded-3xl border border-[#555555]">
                  <button
                    className={`size-full px-1 py-2 flex gap-2 items-center justify-center ${space.className}`}
                  >
                    <RiLinkM className="size-4 link" />{" "}
                    <span className=" font-medium text-xs leading-4">
                      SHARE EVENT
                    </span>
                  </button>
                </div>
                <div className="h-full w-32 rounded-3xl border border-[#555555]">
                  <button
                    className={`size-full px-1 py-2 flex gap-2 items-center justify-center ${space.className}`}
                  >
                    <FaInstagram className="size-4 link" />{" "}
                    <span className=" font-medium text-xs leading-4">
                      FOLLOW US
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[70%] h-32 flex flex-col gap-3">
              <h1 className={`${space.className} font-bold text-xl leading-6`}>
                WHAT'S IT?
              </h1>
              <h1>{matchingEvents[0].description}</h1>
            </div>
            <div className="w-full h-11 flex gap-7">
              <div className="h-full w-40 border border-[#741CFF] rounded-r-2xl rounded-b-2xl">
                <button
                  className={`${space.className} size-full py-2 px-4 font-semibold text-xl leading-6`}
                  onClick={handleSubmit}
                >
                  RULEBOOK
                </button>
              </div>
              <div className="h-full w-36 bg-[#741CFF] rounded-r-2xl rounded-b-2xl">
                <button
                  className={`${space.className} size-full py-2 px-4 font-semibold text-xl leading-6`}
                  onClick={handleSubmit}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>

          <div className="h-full w-[33%] flex flex-col items-center border-l border-[#FFBA25]">
            <div className="h-[60%] w-full flex items-center justify-center">
              <img
                src="/trophyImage.jpeg"
                alt="eventImage"
                className="size-full"
              />
            </div>
            <div className="h-[40%] w-full px-8 py-6 border-t border-[#FFBA25]">
              <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <h1
                  className={`${space.className} font-bold text-xl leading-6 tracking-[22%]`}
                >
                  PRIZES
                </h1>
                <div className="flex flex-col gap-2">
                  <h1
                    className={`${space.className} font-bold leading-10 text-4xl`}
                  >
                    {matchingEvents[0].prizes[0].rank}st ~{" "}
                    <span className="font-semibold text-tangerine">
                      $ {matchingEvents[0].prizes[0].cash}
                    </span>
                  </h1>
                  <h1
                    className={`${space.className} font-bold text-3xl leading-10 text-right`}
                  >
                    {matchingEvents[0].prizes[1].rank}nd ~{" "}
                    <span className="font-semibold text-tangerine">
                      $ {matchingEvents[0].prizes[1].cash}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20%] w-screen flex items-center justify-evenly border-y border-[#FFBA25]">
          <div className="w-[31%] h-auto flex justify-between items-center">
            <div
              className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
            >
              DATE
            </div>
            <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
              <h2 className=" font-bold leading-10 text-3xl">
                {matchingEvents[0].date}
              </h2>
            </div>
          </div>
          <div className=" border-l w-[32%] border-[#FFBA25] h-full">
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
                  {matchingEvents[0].team_size} ({matchingEvents[0].type})
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[33%] h-full px-7 flex justify-between items-center border-l border-[#FFBA25]">
            <div
              className={`h-full w-10 rotate-[270deg] ${space.className} font-bold flex justify-center items-center`}
            >
              CONTACT
            </div>
            <div
              className={`${space.className} text-[#FFBA25] w-60 h-full flex flex-col items-end justify-center gap-2`}
            >
              <Link
                href={matchingEvents[0].contacts[0].contact}
                className="text-right"
              >
                <h2 className="font-semibold leading-6 text-xl flex items-center gap-2">
                  {matchingEvents[0].contacts[0].name}
                  <span className="text-[#741CFF]">
                    <FaWhatsapp className="font-semibold text-xl" />
                  </span>
                </h2>
              </Link>
              <Link href={matchingEvents[0].contacts[1].contact}>
                <h2 className="font-semibold leading-6 text-xl flex items-center gap-2">
                  {matchingEvents[0].contacts[1].name}
                  <span className="text-[#741CFF]">
                    <FaWhatsapp className="font-semibold text-xl" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen py-20 px-20">
        <div className="size-full flex justify-between">
            <div className="h-[40%] w-[20%] flex flex-col gap-10">
                <h2 className={`${space.className} font-bold text-xs leading-4 tracking-[3%]`}>TABLE OF CONTENTS</h2>
                <div className="h-[70%] w-full flex flex-col gap-4 text-[#FFBA25]">
                    <Link href='#rules' className={`${space.className} hover:underline font-bold text-xs leading-4`}>RULES & REGULATIONS</Link>
                    <Link href='#arena' className={`${space.className} hover:underline font-bold text-xs leading-4`}>ARENA</Link>
                    <Link href='/' className={`${space.className} hover:underline font-bold text-xs leading-4`}>ROBOT SPECS</Link>
                    <Link href='/' className={`${space.className} hover:underline font-bold text-xs leading-4`}>GAMEPLAY</Link>
                    <div className="w-full h-7 rounded-3xl text-white border border-[#555555]">
                    <button
                    className={`size-full px-1 py-2 flex gap-2 items-center justify-center ${space.className}`}
                  >
                    <RiLinkM className="size-4 link" />{" "}
                    <span className=" font-medium text-xs leading-4">
                      SHARE EVENT
                    </span>
                  </button>
                    </div>
                </div>
            </div>
            <div className="h-full w-[75%] bg-black flex flex-col gap-10">
                <div className="h-auto w-[80%] flex flex-col gap-4">
                    <h1 id="#rules">RULES & REGULATIONS</h1>
                    <div>
                        {/* data can be mapped once api integration is done */}
                        <ul className={`list-disc ${space.className} font-normal text-base leading-5 tracking-[22%] text-[#FEFEFE]`}>
                            <li>Timely arrival is mandatory for all teams. Failure to comply will result in elimination, with the option to rejoin upon payment of a designated fee </li>
                            <li>A team can have a maximum of 4 members.</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="size-auto">
                <div className="h-auto w-[80%] flex flex-col gap-4">
                <h1 id="arena">ARENA</h1>
                    <div>
                        <ul className={`list-disc ${space.className} font-normal text-base leading-5 tracking-[22%] text-[#FEFEFE]`}>
                            <li>The arena dimensions are 8 feet in length and 4 feet in width. The arena has a 20 cm wide goal post on either side.</li>
                            <li>The arena is bounded from all sides.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
