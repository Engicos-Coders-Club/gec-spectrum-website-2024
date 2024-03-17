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
      className="bg-mango rounded-xl rounded-tl-none overflow-hidden p-2"
      href={`competitions/${eventDeets?.eventId}`}
    >
      <Image
        src={trophyImage}
        alt="random"
        className="rounded-xl rounded-tl-none"
      />
      <div className="p-2">
        <p className="text-sm font-light text-gray-500"> {secondaryname}</p>
        <h2 className={`text-3xl font-bold text-black ${Space.className}`}>
          {eventName}
        </h2>
        <p className="text-sm text-primary">{eventDeets?.deptName}</p>
      </div>
    </Link>
  );
}
