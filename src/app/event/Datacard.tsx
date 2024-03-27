import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { PiPlus } from "react-icons/pi";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

export default function Datacard({
  eventName,
  imageUrl,
  clubname,
  route,
  desc,
}: {
  eventName: string;
  imageUrl: string;
  clubname: string;
  route: string;
  desc?: string;
}) {
  return (
    <Link
      className="border border-white/[0.5] p-4  transition-transform delay-75 relative group"
      href={route}
    >
      <PiPlus className="absolute h-6 w-6 -top-3 -left-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <PiPlus className="absolute h-6 w-6 -bottom-3 -left-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <PiPlus className="absolute h-6 w-6 -top-3 -right-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <PiPlus className="absolute h-6 w-6 -bottom-3 -right-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />

      <Image
        src={`${imageUrl}`}
        alt="random"
        width={512}
        height={712}
        className="h-72 object-cover"
      />
      <div className="p-2 text-white">
        <p className="text-sm font-light uppercase text-primary">{clubname}</p>
        <h2
          className={`text-2xl font-semibold tracking-wider text-white uppercase ${Space.className}`}
        >
          {eventName}
        </h2>
        <p className="text-sm text-white/50 mt-3 font-light hidden w-0  group-hover:w-full group-hover:block">
          {desc}
        </p>
      </div>
    </Link>
  );
}
