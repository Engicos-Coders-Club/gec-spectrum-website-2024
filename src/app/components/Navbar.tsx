"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { Space_Grotesk } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalHotel, MdArrowOutward } from "react-icons/md";
import { AiOutlineQuestion, AiOutlineTeam } from "react-icons/ai";
import { GoClock, GoPersonAdd } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { PiGlobeLight, PiTicketThin } from "react-icons/pi";
const space = Space_Grotesk({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setMenu(!menu);
  };

  let links = [
    {
      name: "HOME",
      icon: <IoHomeOutline color="#FA5622" size={40} />,
      link: "/",
    },
    {
      name: "ABOUT",
      icon: <AiOutlineQuestion color="#FA5622" size={40} />,
      link: "/",
    },
    {
      name: "SCHEDULE",
      icon: <GoClock color="#FA5622" size={40} />,
      link: "/",
    },
    {
      name: "COMPETITIONS",
      icon: <BsTrophy color="#FA5622" size={40} />,
      link: "/competitions",
    },
    {
      name: "EVENTS",
      icon: <PiTicketThin color="#FA5622" size={40} />,
      link: "/Events",
    },
    {
      name: "EXPO",
      icon: <PiGlobeLight color="#FA5622" size={40} />,
      link: "/#expo",
    },
    {
      name: "SPONSORS",
      icon: <GoPersonAdd color="#FA5622" size={40} />,
      link: "/#sponsors",
    },
    {
      name: "ACCOMODATION",
      icon: <MdOutlineLocalHotel color="#FA5622" size={40} />,
      link: "/Accommodations",
    },
    {
      name: "TEAM",
      icon: <AiOutlineTeam color="#FA5622" size={40} />,
      link: "/Teams",
    },
    {
      name: "CONTACT",
      icon: <FiPhone color="#FA5622" size={40} />,
      link: "/#contact",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between z-[100] p-5 text-white sm:px-10 px-6">
      <motion.div
        className="flex items-center sm:gap-6 gap-14"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative ">
          <button
            className="relative flex-col justify-center items-center mr-3 z-50"
            onClick={() => {
              setIsOpen(!isOpen);
              setMenu(!menu);
            }}
          >
            {menu ? (
              <CgClose className="text-[#FA5622] size-12" />
            ) : (
              <IoIosMenu className="text-white size-12" />
            )}
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, translateX: 400 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: -400 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-black z-40 flex"
              >
                <div className="md:w-1/12 sm:w-2/12 w-1/4 h-full bg-black flex justify-center items-end border border-[#FA5622]">
                  <img
                    src="GecLogo.png"
                    alt="GEC"
                    className="size-20 mb-5"
                  />
                </div>
                <div className="md:w-11/12 w-3/4 h-full">
                  {links.map((link, index) => (
                    <Link
                      href={link.link}
                      onClick={handleClick}
                      className="h-[10%] w-full flex border-y border-[#FA5622] group text-white hover:bg-white hover:text-black duration-500 hover:font-semibold text-lg sm:text-2xl md:text-7xl justify-center items-center gap-5"
                      key={index}
                    >
                      <div className="w-[10%] group-hover:w-0 h-full flex items-center justify-center ml-5 sm:ml-0">
                        {link.icon}
                      </div>
                      <div className="w-[90%] group-hover:w-full group-hover:ml-10 h-full flex justify-between sm:text-3xl text-2xl items-center duration-500">
                        <h1>{link.name}</h1>
                      </div>
                      <MdArrowOutward className="duration-150 h-[0px] group-hover:h-full" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link href={"/"} className="">
          <img
            src="/spectrum-logo.png"
            alt="Logo"
            className="w-64 rounded-2xl"
          />
        </Link>
      </motion.div>
      <motion.div
        className={`${space.className} hidden sm:flex gap-1 sm:gap-7 sm:text-lg items-center justify-center `}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href={"/competitions"}
          className="hover:border-dotted border border-transparent hover:border-white  p-2 rounded-full rounded-tl-none"
        >
          COMPETITIONS
        </Link>
        <Link
          href={"/#expo"}
          className="hover:border-dotted border border-transparent hover:border-white  p-2 rounded-full rounded-tl-none"
        >
          EXPO
        </Link>
        <Link
          href={"/#contact"}
          className="hover:border-dotted border border-transparent hover:border-white  p-2 rounded-full rounded-tl-none"
        >
          CONTACT
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
