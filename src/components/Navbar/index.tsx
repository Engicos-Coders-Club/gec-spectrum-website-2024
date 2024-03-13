"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useState } from "react";
import Link from "next/link";
import FullWidth from "./FullWidth";
import { motion } from "framer-motion";
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "COMPETITIONS",
      to: "/competitions",
    },
    {
      name: "EXPO",
      to: "#expo",
    },
    // {
    //     name:"SPONSORS",
    //     to: "#sponsors"
    // },
    {
      name: "CONTACT",
      to: "#contact",
    },
  ];
  return (
    <motion.nav
      className="px-10 sm:px-16 py-5 flex justify-between items-center fixed w-full backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between flex-1 lg:flex-auto lg:justify-start gap-5">
        {!open ? (
          <button className="cursor-pointer">
            <svg
              onClick={() => setOpen((prev) => !prev)}
              className="order-2 lg:order-1 mb-2"
              width="45"
              height="18"
              viewBox="0 0 45 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="45" y2="1" stroke="white" />
              <line y1="9" x2="45" y2="9" stroke="white" />
              <line y1="17" x2="45" y2="17" stroke="white" />
            </svg>
          </button>
        ) : (
          <FullWidth close={setOpen} />
        )}
        <div className="order-1 lg:order-2W">
          <Link href={"/"}>
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              className="cursor-pointer"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="items-center gap-5 hidden lg:flex">
        {links.map((link, i) => (
          <Link
            href={link.to}
            key={i}
            className=" border-light-50 relative flex justify-center rounded-full"
          >
            <div
              className="m-[1px] p-2 px-5 border border-dashed border-transparent hover:border-dotted hover:border-indigo-50"
              style={{ borderRadius: "0px 20px 20px 20px" }}
            >
              {link.name}
            </div>
          </Link>
        ))}

        {/* <button className="bg-primary p-2 px-5 rounded-full rounded-tl-none">
                BROCHURE
            </button> */}

        {/* <button className="bg-yellow-500 p-2 px-5 rounded-full rounded-tl-none text-black">
                SIGN IN
            </button> */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
