import Image from "next/image";
import trophyImage from "../../../public/trophyImage.jpeg";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { CompetitionCardProps } from "@/utils/types/CompetitionCard";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

export default function CardItem({
  eventDeets,
}: {
  eventDeets: CompetitionCardProps;
}) {
  let eventName = "";
  let secondaryname = "";

  if (eventDeets?.eventName) {
    const parts = eventDeets.eventName.split("(");
    eventName = parts[0].trim();
    secondaryname = parts[1]
      ? parts[1].substring(0, parts[1].length - 1).trim()
      : "";
  }

  return (
    <Link
      className="bg-mango rounded-xl rounded-tl-none overflow-hidden p-2 hover:scale-105 transition-transform delay-75"
      href={`competitions/${eventDeets?.eventId}`}
    >
      <Image
        src={eventDeets.imageUrl || trophyImage}
        alt="random"
        width={512}
        height={712}
        className="rounded-xl rounded-tl-none h-72 object-cover"
      />
      <div className="p-2 text-white">
        <p className="text-sm font-light uppercase text-yellow-700">
          {" "}
          {secondaryname || "Competition"}
        </p>
        <h2 className={`text-2xl font-bold text-black ${Space.className}`}>
          {eventName}
        </h2>
        <p className="text-sm text-primary mt-2">
          {"/*"} {eventDeets?.deptName}
        </p>
      </div>
    </Link>
  );
}
