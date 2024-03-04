"use client";

import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import LineImage from "../assets/line.png";
import Link from "next/link";
import SampleEvent from "../assets/sample-event.jpg";
const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

const EventCard = () => {
  return (
    <div className="bg-black w-screen h-full">
      <div className="flex justify-between">
        <h1
          className={`font-bold ml-5  text-3xl mt-5 sm:text-6xl flex items-center font-panchang-bold`}
        >
          E V E N T S
        </h1>

        <Image
          src={LineImage}
          alt="line image"
          className="h-[1px] w-1/3 sm:w-1/2 my-auto"
        />
      </div>

      <div className="w-full flex justify-center mt-10 p-3">
        <div
          className={`grid grid-rows-2 grid-cols-3 gap-10 ${Space.className} lg:grid-cols-7 lg:gap-4`}
        >
          <Link 
            
            href="/"
            className="bg-yellow-500 p-3  rounded-full rounded-tl-none overflow-hidden"
          >
            <span className="text-black">ALL</span> <br />
            <p className="text-purple-700">Departments</p>
          </Link>
          <Link
            href="/"
            className="p-3 
                            hover:outline-dotted transition-all transition-duration-500 rounded-[30px] rounded-tl-none
                            "
          >
            Computer <br /> <p className="text-yellow-500">Technix</p>{" "}
          </Link>
          <Link
            href="/"
            className="p-3 
                            hover:outline-dotted transition-all transition-duration-500 rounded-[30px] rounded-tl-none
                            "
          >
            IT <br /> <p className="text-yellow-500">Techfluence</p>{" "}
          </Link>
          <Link
            href="/"
            className="p-3 
                            hover:outline-dotted transition-all transition-duration-500 rounded-[30px] rounded-tl-none
                            "
          >
            Mechanical <br /> <p className="text-yellow-500">Torque</p>{" "}
          </Link>
          <Link
            href="/"
            className="p-3 
                            hover:outline-dotted transition-all transition-duration-500 rounded-[30px] rounded-tl-none
                            "
          >
            ETC <br /> <p className="text-yellow-500">Resonance</p>{" "}
          </Link>
          <Link
            href="/"
            className="p-3 
                            hover:outline-dotted transition-all transition-duration-500 rounded-[30px] rounded-tl-none
                            "
          >
            ENE <br /> <p className="text-yellow-500">Sparks</p>{" "}
          </Link>
          <Link
  href="/"
  className="p-5 hover:outline-dotted col-start-2 col-span-1 lg:col-span-1 transition-all transition-duration-500 rounded-[30px] rounded-tl-none"
>
  Civil <br /> <p className="text-yellow-500">Pratikriya</p>{" "}
</Link>
        </div>
      </div>

      <div className={`mt-8 ${Space.className} container mx-auto mb-20`}>
        {/* hardcoded as of now , supposed to map from a .json file */}
        <div className="grid grid-cols-1  p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="bg-orange-600 rounded-xl rounded-tl-none overflow-hidden p-2">
            <Image
              src={SampleEvent}
              alt="random"
              className="rounded-xl rounded-tl-none"
            />
            <div className="p-2 text-white">
              <p className="text-sm">/* Type of event */</p>
              <h2 className="text-xl font-bold text-black">Event Name</h2>
              <p className="text-sm">Department Offering</p>
            </div>
          </div>
          <div className="bg-orange-600 rounded-lg rounded-tl-none overflow-hidden p-2">
            <Image
              src={SampleEvent}
              alt="random"
              className="rounded-xl rounded-tl-none"
            />
            <div className="p-2 text-white">
              <p className="text-sm">/* Type of event */</p>
              <h2 className="text-xl font-bold text-black">Event Name</h2>
              <p className="text-sm">Department Offering</p>
            </div>
          </div>
          <div className="bg-orange-600 rounded-lg rounded-tl-none overflow-hidden p-2">
            <Image
              src={SampleEvent}
              alt="random"
              className="rounded-xl rounded-tl-none"
            />
            <div className="p-2 text-white">
              <p className="text-sm">/* Type of event */</p>
              <h2 className="text-xl font-bold text-black">Event Name</h2>
              <p className="text-sm">Department Offering</p>
            </div>
          </div>
          <div className="bg-orange-600 rounded-lg rounded-tl-none overflow-hidden p-2">
            <Image
              src={SampleEvent}
              alt="random"
              className="rounded-xl rounded-tl-none"
            />
            <div className="p-2 text-white">
              <p className="text-sm">/* Type of event */</p>
              <h2 className="text-xl font-bold text-black">Event Name</h2>
              <p className="text-sm">Department Offering</p>
            </div>
          </div>
          <div className="bg-orange-600 rounded-lg rounded-tl-none overflow-hidden p-2">
            <Image
              src={SampleEvent}
              alt="random"
              className="rounded-xl rounded-tl-none"
            />
            <div className="p-2 text-white">
              <p className="text-sm">/* Type of event */</p>
              <h2 className="text-xl font-bold text-black">Event Name</h2>
              <p className="text-sm">Department Offering</p>
            </div>
          </div>
          <div className="bg-orange-600 rounded-lg rounded-tl-none overflow-hidden p-2">
            <Image
              src={SampleEvent}
              alt="random"
              className="rounded-xl rounded-tl-none"
            />
            <div className="p-2 text-white">
              <p className="text-sm">/* Type of event */</p>
              <h2 className="text-xl font-bold text-black">Event Name</h2>
              <p className="text-sm">Department Offering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

/* Line 29 */

/* events */
