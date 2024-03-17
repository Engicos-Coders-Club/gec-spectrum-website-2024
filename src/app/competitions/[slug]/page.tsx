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
import { useRouter } from "next/navigation";
import PageHead from "@/app/components/PageHead";
import CardItem from "@/components/Competitions-Card/CardItem";

interface EventData {
  events: {
    date: Date;
    department: string;
    deptName: string;
    eventId: string;
    eventName: string;
    imageUrl: string;
  }[]
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

const CompetitionPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const [events, setEvents] = useState<EventData>({} as EventData);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/department/${params.slug}`
      );
      const data = await response.data;
      console.log(data)
      setEvents(data);
    })();
  }, [params.slug]);
/*
  const handleSubmit = () => {
    // console.log("Button is working");
    // const RegistrationLink = events?.event?.rulesAndRegulations?.find(
    //   (rule) => rule.topic === "Registration Link:"
    // )?.points[0];

    // if (RegistrationLink) {
    //   console.log("Registration Link:", RegistrationLink);
    //   window.location.href = RegistrationLink;
    // } else {
    //   console.error("Registration link not found or invalid.");
    //   // Optionally, you can show an error message to the user here.
    // }
    router.push(`/event/${params.slug}`);
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
        {rule.topic}
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
  };    */

  return (
    <main>
      <PageHead body="COMPETITIONS" title={events?.events && events?.events[0].deptName} faltutext="22" />
      <section className={`mt-8 ${space.className} container mx-auto mb-20`}>
        <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.events?.map((event, index:number) => (
            <CardItem key={index} obj={event} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CompetitionPage;
