import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

export default function Datacard({
  eventName,
  imageUrl,
  clubname,
  route,
}: {
  eventName: string;
  imageUrl: string; 
  clubname: string;
  route: string;


}) {
  return (
    <Link
      className="bg-mango rounded-xl rounded-tl-none overflow-hidden p-2 hover:scale-105 transition-transform delay-75"
      href={route} 
    >
      <Image
        src={imageUrl}
        alt="random"
        width={512}
        height={712}
        className="rounded-xl rounded-tl-none h-72 object-cover"
      />
      <div className="p-2 text-white">
        <p className="text-sm font-light uppercase text-yellow-700">
          {clubname}
        </p>
        <h2 className={`text-2xl font-bold text-black ${Space.className}`}>
          {eventName}
        </h2>
      </div>
    </Link>
  );
}
