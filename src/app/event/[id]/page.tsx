'use client'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { Space_Grotesk } from "next/font/google";
import { EVENT } from "@/utils/data.example";
import localFont from "next/font/local";
import Register from "@/components/Competitions/Register";
import axios from "axios";
import { useEffect, useState } from "react";

const space = Space_Grotesk({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../../public/Panchang-Variable.ttf",
  display: "swap",
});


const page = ({ params }: { params: { id:string } }) => {
  const [events, setEvents] = useState({})
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/${params.id}`
      );
      const data = await response.data;
      setEvents(data);
    })();
  }, [params.id]);
  
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Reversing the date format
  return `${day}-${month}-${year}`;
};
const renderCoordinators = () => {
  return events?.event?.contact?.coordinators.map((coordinator, index) => (
    <Link key={index} href={coordinator.contact}>
      <h2 className="font-semibold sm:leading-6 leading-3 sm:text-xl text-xs flex items-center sm:gap-2 gap-1 w-full">
        {coordinator.name}
        <span className="text-[#741CFF]">
          <FaWhatsapp className="font-semibold text-xl" />
        </span>
      </h2>
    </Link>
  ));
};

  return (
    <div className="h-screen w-screen overflow-x-hidden mt-20">
      <div className="h-[89vh] w-screen">
        <div className="h-[70%] w-full my-5">
          <div className="h-[65%] w-screen px-14 flex flex-col gap-10">
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
            <div className="w-auto h-32 flex flex-col gap-5">
              <h1
                className={`${panchang.className} font-semibold text-2xl text-[#FA5622]`}
              >
                {events?.event?.eventName && events.event.eventName.split("(")[1]?.slice(0, -1)}
              </h1>
              <h1
                className={`${panchang.className} font-semibold text-6xl leading-[4rem]`}
              >
                {events?.event?.eventName && events.event.eventName.split("(")[0]}
              </h1>
            </div>
          </div>
          <div className="h-[35%] w-screen flex items-center justify-evenly border-y border-[#FFBA25]">
            <div className="w-[33%] h-auto flex justify-between items-center">
              <div
                className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
              >
                DATE
              </div>
              <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
                <h2 className=" font-bold leading-10 text-3xl">
                {formatDate(events?.event?.date)}
                </h2>
              </div>
            </div>
            <div className=" border-l border-[#FFBA25] w-[33%] h-full">
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
                <h2 className=" font-bold leading-10">
                  Max:{events?.event?.teamSize?.max}/TEAM
                </h2>
                <h2 className=" font-bold leading-10 ">
                  Min:{events?.event?.teamSize?.min}/TEAM
                </h2>
                </div>
              </div>
            </div>
            <div className="w-[33%] h-auto px-7 flex justify-between items-center">
              <div
                className={`h-full w-10 rotate-[270deg] ${space.className} font-bold flex justify-center items-center`}
              >
                CONTACT
              </div>
              <div
                className={`${space.className} text-[#FFBA25] w-60 h-full flex flex-col items-end`}
              >
                {renderCoordinators()}
              </div>
            </div>
          </div>
        </div>
        <div><Register /></div>
      </div>
    </div>
  );
};

export default page;
