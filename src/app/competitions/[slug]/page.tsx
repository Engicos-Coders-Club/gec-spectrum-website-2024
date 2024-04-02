"use client";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { usePathname, useRouter } from "next/navigation";
import Checker from "@/assets/checker.png";
import Image from "next/image";
import { RiLink } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Register from "@/components/Competitions/Register";
import axios from "axios";
import { Key } from "react";
import { UrlObject } from "url";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../axios-config";
import { getTeamData } from "@/utils/getTeamSize";

const space = Space_Grotesk({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

const panchang = localFont({
  src: "../../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const checkParticipationLimit = (limit: number): string => {
  if (!limit || limit === -1) return "--";
  return limit.toString();
};

const generatePriceLabel = (eventId: string): string => {
  if (
    eventId === "65f738fad2db77daa4efccc2" ||
    eventId === "65f73980d2db77daa4efcdfd"
  )
    return " / BOT";
  return " / TEAM";
};

const displayFee = (fee: number): string => {
  if (fee === 0) return "FREE";
  return `₹ ${fee}`;
};

const reRouteCompetitionLink = (eventId: string, pathname: string): string => {
  if (eventId === "65f5c3460197f7897ad54efa")
    return "https://unstop.com/hackathons/spectrathon-goa-college-of-engineering-930111";
  // else if (eventId === "65f5b01e0197f7897ad54ecb")
  //   return "https://unstop.com/p/celestial-canvas-uiux-design-competition-goa-college-of-engineering-939386";
  return pathname + "/register";
};

const getDateFormat = (dateString: string): string => {
  const date = new Date(dateString);

  // Define an array with short month names
  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month from the date object and use it to index the array
  const monthShort = monthNamesShort[date.getMonth()];

  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${monthShort} ${year}`;
};

const CTFData = (slug: string): string => {
  if (slug === "65f5c7620197f7897ad54f65")
    return "🚀 Get ready for the ultimate cybersecurity challenge! CTF{5P3CT4UMC7F_I5_3E5T} Capture the Flag event around. Diverse challenges, real-world scenarios, and fantastic prizes await. Don't miss out! #SpectrumCTF 🛡️🔒";
  return "";
};

const EventPage = ({ params }: { params: { slug: string } }) => {
  const pathname = usePathname();
  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ["singleCompetition"],
    queryFn: async (): Promise<any> => {
      const res = await axiosInstance.get(`/events/${params.slug}`);
      return res.data;
    },
  });

  const renderCoordinators = () => {
    if (isSuccess)
      return (
        data as {
          event: {
            contact: {
              coordinators: {
                contact: string | UrlObject;
                name: string | null | undefined;
              }[];
            };
          };
        }
      )?.event?.contact?.coordinators.map(
        (
          coordinator: {
            contact: string | UrlObject;
            name: string | null | undefined;
          },
          index: Key | null | undefined
        ) => (
          <Link key={index} href={`https://wa.me/91${coordinator.contact}`}>
            <h2 className="font-semibold sm:leading-6 leading-3 sm:text-xl text-base mt-2 flex items-center sm:gap-2 gap-1 w-full hover:underline underline-offset-2">
              {coordinator.name}
              <span className="text-[#741CFF]">
                <FaWhatsapp className="font-semibold text-xl" />
              </span>
            </h2>
          </Link>
        )
      );
  };

  if (isError)
    return (
      <div className="text-center my-4">Oops! We lost data in the space 🚀</div>
    );
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <div className="w-screen">
        <div className="w-full">
          <div className="w-screen md:pl-14 grid grid-cols-1 md:grid-cols-3">
            <div className="flex col-span-2 h-full py-10 px-10 md:px-0 flex-col gap-10">
              <div className="flex gap-2 w-20">
                <Link href="/competitions" className="flex gap-2">
                  <IoChevronBack className=" size-5" />
                  <p
                    className={`hover:underline mb-2 ${space.className} font-normal text-base leading-5`}
                  >
                    Back
                  </p>
                </Link>
              </div>
              <div className="sm:w-3/4 flex-1 h-full flex flex-col gap-5">
                <h2
                  className={`${panchang.className} font-semibold text-lg md:text-2xl lg:text-3xl text-[#FA5622] uppercase`}
                >
                  {isSuccess &&
                    data &&
                    (data?.event?.eventName.split("(")[1]?.slice(0, -1) ||
                      "Competition")}
                </h2>
                <h1
                  className={`${panchang.className} font-extrabold break-words text-2xl sm:text-4xl md:text-6xl md:leading-[4rem]`}
                >
                  {isSuccess &&
                    data &&
                    (data?.event?.eventName?.split("(")[0] ||
                      data?.event?.eventName)}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: document.title,
                            text: `${
                              data && data?.event?.eventName
                            } | GEC Spectrum 2024`,
                            url: window.location.href,
                          })
                          .then(() => console.log("Successful share"))
                          .catch((error) =>
                            console.log("Error sharing:", error)
                          );
                      }
                      console.log(CTFData(params.slug));
                    }}
                    className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full"
                  >
                    <RiLink className="text-blue-500" />
                    SHARE EVENT
                  </button>
                  <Link
                    href={"https://www.instagram.com/gecspectrum/"}
                    className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full"
                  >
                    <FaInstagram className="text-pink-500" />
                    FOLLOW US
                  </Link>
                </div>
                <div className="mt-5">
                  <p className="font-bold mb-2 text-lg text-mango">
                    WHAT&apos;S IT?
                  </p>
                  <p className="text-justify">
                    {isSuccess && data && data?.event?.introduction}
                  </p>
                  <div className="flex gap-5 items-center mt-10 flex-wrap">
                    <a
                      href={isSuccess ? data.event.rulebook : "#"}
                      target="_blank"
                      rel="noreferrer"
                      title="Detailed Rulebook"
                      className="border border-primary rounded-full rounded-tl-none p-1.5 px-5 hover:bg-primary/30"
                    >
                      RULEBOOK
                    </a>
                    {isSuccess && (
                      // <Link
                      //   href={reRouteCompetitionLink(data.event._id, pathname)}
                      //   target="_blank"
                      //   rel="noreferrer"
                      // >
                      <button
                        className="border border-primary rounded-full rounded-tl-none p-1.5 px-5 bg-primary hover:bg-violet-700 disabled:bg-violet-900/80 disabled:border-violet-900/80 disabled:text-white/60"
                        disabled
                        title="Online registrations are closed"
                      >
                        REGISTER
                      </button>
                      // </Link>
                    )}
                    {data?.event?._id === "65f5c3460197f7897ad54efa" && (
                      <Link href="https://docs.google.com/document/d/13L4HzIT0P11BKg1DkxAILj7Zgb-dKQQHr4is51iX7Zg/edit?usp=drivesdk">
                        <button className=" border border-mango rounded-full rounded-tl-none p-1.5 px-5 bg-mango hover:bg-yellow-500 text-bgDark">
                          PROBLEM STATEMENTS
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full col-span-1 border-l border-b border-[#FFBA25]">
              {isSuccess ? (
                <Image
                  src={data?.event?.imageURL || Checker.src}
                  alt="random"
                  width={512}
                  height={712}
                  className="rounded-xl rounded-tl-none h-72 object-cover"
                />
              ) : (
                <Image
                  src={Checker.src}
                  height={Checker.height}
                  width={Checker.width}
                  alt=""
                  className="hidden md:block"
                />
              )}
              <div className=" border-t border-[#FFBA25] flex md:flex-col items-center justify-between md:justify-center py-5">
                <p className="text-xl md:text-2xl tracking-widest font-semibold mb-2 rotate-[270deg] md:rotate-[0deg]">
                  PRIZES
                </p>
                {isSuccess &&
                  (data?.event?.prices.secondPlace === 0 ? (
                    <div className="mr-10 md:mr-0">
                      <p className="text-2xl md:text-4xl font-medium text-tangerine">
                        ₹ {data && data?.event?.prices.firstPlace}
                      </p>
                      <p className="uppercase text-right italic">pool</p>
                    </div>
                  ) : (
                    <div className="mr-10 md:mr-0">
                      <p className="text-2xl md:text-4xl font-medium">
                        1st ~{" "}
                        <span className="font-semibold text-tangerine">
                          ₹ {data && data?.event?.prices.firstPlace}
                        </span>
                      </p>
                      <p className="text-2xl md:text-3xl font-medium mt-1">
                        2nd ~{" "}
                        <span className="font-semibold text-tangerine">
                          ₹ {data && data?.event?.prices.secondPlace}
                        </span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-screen grid grid-cols-1 md:grid-cols-3 items-center justify-evenly border-y border-[#FFBA25]">
            <div className=" py-5 h-auto flex justify-between items-center">
              <div
                className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
              >
                FEE
              </div>
              {isSuccess && (
                <div
                  className={`mr-7 ${space.className} text-[#FFBA25] md:text-3xl text-xl font-bold`}
                >
                  {displayFee(data?.event?.fee)}
                  <span className="text-lg italic font-normal">
                    {generatePriceLabel(data.event._id)}
                  </span>
                </div>
              )}
            </div>
            <div className=" py-5  border-t md:border-l border-b md:border-r border-[#FFBA25]">
              <div className="mx-8 flex justify-between items-center">
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
                {isSuccess && (
                  <div
                    className={`md:mr-7 ${space.className} text-[#FFBA25]  md:text-3xl text-xl font-bold`}
                  >
                    {getTeamData(
                      data?.event?.teamSize.min,
                      data?.event?.teamSize.max
                    )}
                    {data && data?.event?.teamSize.max > 1 && (
                      <span className="text-lg italic font-normal">
                        {" "}
                        / TEAM
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className=" py-5 md:flex-1 h-auto flex justify-between items-center">
              <div
                className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
              >
                DATE
              </div>
              {isSuccess && (
                <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
                  <h2 className=" font-bold leading-10 md:text-3xl text-xl">
                    {getDateFormat(data && data?.event?.date)}
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-10 md:p-20">
          <div className="border border-primary py-4 sm:py-10 px-7 flex flex-col sm:flex-row justify-between items-center">
            <div
              className={`h-full tracking-widest text-sm md:text-base  w-10 sm:rotate-[270deg] ${space.className} font-bold flex justify-center items-center`}
            >
              CONTACT
            </div>
            <div
              className={`${space.className} text-[#FFBA25] min-w-60 w-auto h-full flex flex-col items-center mt-2 sm:mt-0 sm:items-end justify-center`}
            >
              {renderCoordinators()}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-mango font-semibold text-3xl mt-10 uppercase">
              DETAILS
            </p>
            <p className="text-mango font-semibold text-xl uppercase">
              DURATION:{" "}
              <span className="text-white">
                {isSuccess && data && data.event?.duration}
              </span>
            </p>
            <p className="text-mango font-semibold text-xl uppercase">
              max participation limit:{" "}
              <span className="text-white">
                {isSuccess &&
                  checkParticipationLimit(data?.event?.participationLimit)}
              </span>
            </p>
            <p className="font-semibold text-xl uppercase text-mango">
              Rules and Regulations
            </p>
            <ul className=" list-disc ml-5 text-gray-200 text-justify md:text-left">
              {isSuccess &&
                data &&
                data.event?.rulesAndRegulations.map((rule: any, i: number) => (
                  <li key={i} className="mb-8">
                    <p className="text-lg font-semibold">{rule.topic}</p>
                    <ol className=" list-decimal">
                      {rule.points.map((point: string, k: number) => (
                        <li key={k} className="ml-5 mb-2">
                          {point}
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div>
        <Register />
      </div> */}
    </div>
  );
};

export default EventPage;
