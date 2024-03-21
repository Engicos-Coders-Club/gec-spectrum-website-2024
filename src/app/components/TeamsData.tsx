"use client";
import { useState } from "react";
import { Teamdata } from "@/utils/data.example";
import { Space_Grotesk } from 'next/font/google'
import { motion } from "framer-motion";

const space = Space_Grotesk({
    weight: ['700','500','300'],
    subsets: ['latin'],
    display: 'swap',
  })

const TeamsData = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<null | number>(null);

  const handleButtonClick = (index:number) => {
    setSelectedDepartment(index);
  };
  return (
    <div>
      <div className="w-full flex justify-center mt-10 p-3 overflow-hidden">
        <div className="grid grid-rows-2 p-5 grid-cols-3 sticky top-0 gap-10  ${Space.className} lg:grid-cols-9 lg:gap-4 lg:grid-rows-1">
          {Teamdata.map((button, index) => {
            return (
              <div
                className={`${
                  selectedDepartment === index ? "bg-[#FFBA25] text-black" : ""
                } hover:border-dotted hover:border hover:border-white border-gray-950 border p-3 rounded-full rounded-tl-none overflow-hidden md:w-32 w-28 flex items-center justify-center flex-col cursor-pointer`}
                key={index}
                onClick={() => handleButtonClick(index)}
              >
                <p>{button.title}</p>
                <p
                  className={`${
                    selectedDepartment === index
                      ? " text-white"
                      : "text-[#FFBA25]"
                  }  text-xs`}
                >
                  {button.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${space.className} flex w-screen h-auto`}>
        {selectedDepartment !== null && (
          <div className="gap-7 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 w-screen h-auto p-10 grid-cols-2">
            {Teamdata[selectedDepartment].people?.map((person, index) => {
              return (
                <motion.div className="relative border border-white hover:border-[#FFBA25]"
                key={`${selectedDepartment}-${index}`}
                initial={{y:50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1,delay:index/5}}

                >
                  <img
                    src={person.image}
                    alt="profile picture"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black p-3">
                    <h2 className="text-[#FFBA25] md:text-2xl text-xl">{person.name}</h2>
                    <h3 className="text-white font-light sm:text-base text-sm">{person.designation}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamsData;
