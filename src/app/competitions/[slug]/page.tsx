"use client";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { RiInstagramFill, RiLinkM } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { RWebShare } from "react-web-share";

interface EventData {
  event: {
    contact: {
      coordinators: {
        name: string;
        contact: string;
        _id: string;
      }[];
    };
    teamSize: {
      min: number;
      max: number;
    };
    rulesAndRegulations: {
      topic: string;
      points: string[];
      _id: string;
    }[];
    eventName: string;
    imageURL: string;
    introduction: string;
    prices: {
      firstPlace: number;
      secondPlace: number;
    };
    date: string;
  };
}

const space = Space_Grotesk({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const page = ({ params }: { params: { slug: string } }) => {
  const [events, setEvents] = useState<EventData>({} as EventData);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/${params.slug}`
      );
      const data = await response.data;
      setEvents(data);
    })();
  }, [params.slug]);

  const handleSubmit = () => {
    console.log("Button is working");
    const RegistrationLink = events?.event?.rulesAndRegulations?.find(
      (rule) => rule.topic === "Registration Link:"
    )?.points[0];

    if (RegistrationLink) {
      console.log("Registration Link:", RegistrationLink);
      window.location.href = RegistrationLink;
    } else {
      console.error("Registration link not found or invalid.");
      // Optionally, you can show an error message to the user here.
    }
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

  const renderRules = () => {
    return events?.event?.rulesAndRegulations?.map((rule, index) => (
      <Link
        key={index}
        href={`#${rule.topic}`}
        className={`${space.className} hover:underline font-bold text-xs leading-4`}
      >
        RULES & REGULATIONS
      </Link>
    ));
  };
  const renderRulesAndRegulations = () => {
    return events?.event?.rulesAndRegulations.map((rule, index) => (
      <div key={rule._id} className="w-full h-auto flex flex-col gap-4">
        <h1 id={`#${rule.topic}`}>{rule.topic}</h1>
        {Array.isArray(rule.points) ? (
          <ul
            className={`list-disc ${space.className} font-normal text-base leading-5 tracking-[22%] text-[#FEFEFE]`}
          >
            {rule.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>Invalid rule points</p>
        )}
      </div>
    ));
  };
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

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="size-full mt-20">
        <div className="h-[70%] w-screen flex items-center">
          <div className="h-full w-[66%] flex flex-col gap-4 justify-around pl-5 sm:pl-20">
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
            <div className="min-h-40 max-h-80 w-full">
              <div className="w-auto h-full flex flex-col gap-2">
                <h1
                  className={`${panchang.className} font-semibold text-2xl text-[#FA5622]`}
                >
                  {events?.event?.eventName.split("(")[1].slice(0, -1)}
                </h1>
                <h1
                  className={`${panchang.className} font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[4rem]`}
                >
                  {events?.event?.eventName?.split("(")[0]}
                </h1>
              </div>
              <div className="w-auto h-8 flex items-center gap-2">
                <div className="h-full w-32 rounded-3xl border border-[#555555]">
                  <RWebShare
                    data={{
                      text: "Share this event to your friends",
                      url: `https://gecspectrum.com/competitions/${params.slug}`,
                      title: "Spectrum",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button
                      className={`size-full px-1 py-2 flex gap-1 items-center justify-center ${space.className}`}
                    >
                      <RiLinkM className="size-4 link" />{" "}
                      <span className=" font-medium text-xs leading-4">
                        SHARE EVENT
                      </span>
                    </button>
                  </RWebShare>
                </div>
                <div className="h-full w-32 rounded-3xl border border-[#555555]">
                  <Link
                    href={
                      "https://www.instagram.com/gec.students.council24?igsh=MTF5c2wxd2pvY3pmNQ=="
                    }
                    className={`size-full px-1 py-2 flex gap-2 items-center justify-center ${space.className}`}
                  >
                    <RiInstagramFill className="size-4" />{" "}
                    <span className=" font-medium text-xs leading-4">
                      FOLLOW US
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[70%] h-32 mt-7 flex flex-col gap-3">
              <h1 className={`${space.className} font-bold text-xl leading-6`}>
                WHAT'S IT?
              </h1>
              <h1>{events?.event?.introduction.slice(0, 300) + "...more"}</h1>
            </div>
            <div className="w-full h-11 flex sm:gap-7 gap-4 sm:text-xl text-lg">
              <Link href="#rules">
                <div
                  className={`${space.className} h-full sm:w-40 w-32 border border-[#741CFF] rounded-r-2xl rounded-b-2xl py-2 px-4 font-semibold leading-6`}
                >
                  RULEBOOK
                </div>
              </Link>

              <div className="h-full w-28 sm:w-36 bg-[#741CFF] rounded-r-2xl rounded-b-2xl">
                <button
                  className={`${space.className} size-full py-2 px-4 font-semibold leading-6`}
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
                src={events?.event?.imageURL}
                alt="eventImage"
                className="size-full"
              />
            </div>
            <div className="h-[40%] w-full sm:px-8 px-3 py-6 border-t border-[#FFBA25]">
              <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <h1
                  className={`${space.className} font-bold text-xl leading-4 sm:leading-6 tracking-[22%]`}
                >
                  PRIZES
                </h1>
                <div className="flex flex-col sm:gap-2 gap-1 text-end">
                  <h1
                    className={`${space.className} font-bold sm:leading-10 leading-6 md:text-4xl sm:text-3xl text-xl`}
                  >
                    1st ~{" "}
                    <span className="font-semibold text-tangerine">
                      &#8377; {events?.event?.prices?.firstPlace}
                    </span>
                  </h1>
                  <h1
                    className={`${space.className} font-bold sm:leading-10 leading-6 text-right md:text-4xl sm:text-3xl text-xl`}
                  >
                    2nd ~{" "}
                    <span className="font-semibold text-tangerine">
                      &#8377; {events?.event?.prices?.secondPlace}
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
              <h2 className="sm:font-bold font-semibold sm:leading-10 sm:text-3xl text-xs text-start w-full">
                {formatDate(events?.event?.date)}
              </h2>
            </div>
          </div>
          <div className=" border-l w-[32%] border-[#FFBA25] h-full">
            <div className="h-full sm:mx-8 mx-4 flex justify-between items-center">
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
              <div
                className={`mr-7 ${space.className} text-[#FFBA25] text-end md:text-3xl sm:text-2xl text-xs`}
              >
                <h2 className=" font-bold leading-10">
                  Max:{events?.event?.teamSize?.max}/TEAM
                </h2>
                <h2 className=" font-bold leading-10 ">
                  Min:{events?.event?.teamSize?.min}/TEAM
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[33%] h-full sm:px-7 flex justify-between items-center border-l border-[#FFBA25]">
            <div
              className={`h-full w-10 rotate-[270deg] ${space.className} font-bold flex justify-center items-center`}
            >
              CONTACT
            </div>
            <div
              className={`${space.className} text-[#FFBA25] w-60 h-full flex flex-col items-end justify-center gap-2 sm:text-end text-start`}
            >
              {renderCoordinators()}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-screen py-20 sm:px-20 px-8">
        <div className="size-full flex justify-between">
          <div className="h-[40%] w-[20%] flex flex-col gap-10">
            <h2
              className={`${space.className} font-bold text-xs leading-4 tracking-[3%]`}
            >
              TABLE OF CONTENTS
            </h2>
            <div className="h-[70%] w-full flex flex-col gap-4 text-[#FFBA25]">
              {renderRules()}
              <div className="w-full h-7 rounded-3xl text-white border border-[#555555]">
                <RWebShare
                  data={{
                    text: "Share this event to your friends",
                    url: `https://gecspectrum.com/competitions/${params.slug}`,
                    title: "Spectrum",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button
                    className={`size-full px-1 py-2 flex gap-2 items-center justify-center ${space.className}`}
                  >
                    <RiLinkM className="size-4 link" />{" "}
                    <span className=" font-medium text-xs leading-4">
                      SHARE EVENT
                    </span>
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="h-full w-[75%] bg-black flex flex-col gap-10">
            {renderRulesAndRegulations()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
