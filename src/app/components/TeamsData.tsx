"use client";
import { useState } from "react";
import { Teamdata } from "@/assets/Teamdata";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const space = Space_Grotesk({
  weight: ["700", "500", "300"],
  subsets: ["latin"],
  display: "swap",
});

const TeamsData = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<null | number>(
    null
  );

  const handleButtonClick = (index: number) => {
    setSelectedDepartment(index);
  };
  return (
    // <div>
    //   <div className="w-full flex justify-center mt-10 p-3 overflow-hidden">
    //     <div className="grid grid-rows-2 p-5 grid-cols-3 sticky top-0 gap-10  ${Space.className} lg:grid-cols-9 lg:gap-4 lg:grid-rows-1">
    //       {Teamdata.map((button, index) => {
    //         return (
    //           <div
    //             className={`${
    //               selectedDepartment === index ? "bg-[#FFBA25] text-black" : ""
    //             } hover:border-dotted hover:border hover:border-white border-gray-950 border p-3 rounded-full rounded-tl-none overflow-hidden md:w-32 w-28 flex items-center justify-center flex-col cursor-pointer`}
    //             key={index}
    //             onClick={() => handleButtonClick(index)}
    //           >
    //             <p>{button.title}</p>
    //             <p
    //               className={`${
    //                 selectedDepartment === index
    //                   ? " text-white"
    //                   : "text-[#FFBA25]"
    //               }  text-xs`}
    //             >
    //               {button.subTitle}
    //             </p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    <div className={`${space.className} flex max-w-screen-2xl h-auto`}>
      {/* {selectedDepartment !== null && ( */}
      <div className="flex flex-wrap justify-center gap-6 mx-auto my-10">
        {Teamdata[8].people?.map((person, index) => {
          return (
            <motion.div
              className="relative border border-white hover:border-[#FFBA25] w-40 md:w-52"
              key={`${selectedDepartment}-${index}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index / 5 }}
            >
              <div className="relative w-full h-52 md:h-72">
                <Image
                  src={person.image}
                  fill
                  alt="profile picture"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="flex gap-2 items-stars justify-between p-3">
                <div className="">
                  <h2 className="text-[#FFBA25] md:text-lg text-sm sm:text-xl">
                    {person.name}
                  </h2>
                  <h3 className="text-white font-light text-xs sm:text-sm">
                    {person.designation}
                  </h3>
                </div>

                <Link
                  href={person.links?.github || ""}
                  className="hover:text-tangerine"
                  title="GitHub Profile link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* )} */}
    </div>
    // </div>
  );
};

export default TeamsData;
