"use client";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Logo from "@/assets/spectrum-logo.png";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

const space = Space_Grotesk({
  weight: ["700", "500"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div
      className="min-h-screen h-auto max-w-screen relative flex flex-col justify-center items-center bg-[#06050a] overflow-hidden sm:mt-0 mt-52"
      id="contact"
    >
      <motion.div
        className="z-10 sm:flex-row flex flex-col-reverse sm:justify-center justify-normal mt-5 sm:mt-0 items-center sm:min-h-[70vh] w-[90vw] rounded-3xl bg-[#18181880] backdrop-blur-sm "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" h-full sm:w-[40%] w-60 sm:border-r bordercolor sm:p-14">
          <div className="flex flex-col h-full w-full gap-10 sm:items-center">
            <div className="sm:h-auto sm:w-full w-48 flex justify-center ml-6">
              <Image
                src={Logo}
                width={230}
                height={150}
                alt="logo"
                className="object-contain"
              />
            </div>
            <div className="w-full h-72 rounded-3xl">
              <div className="w-full h-72 rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Goa+College+of+Engineering,+Ponda,+Goa,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  className="sm:h-full h-[90%] w-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <motion.p
              className={`mt-5 text-[#FEFEFE] ${space.className} font-normal sm:text-base text-sm leading-5 text-center sm:mb-0 mb-2`}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Found bugs? &nbsp;
              <a
                href={`https://api.whatsapp.com/send?phone=917972321283`}
                target="_blank"
                className="underline text-mango hover:text-gray-300" // Optional styling for hover effect
              >
                Report here
              </a>
            </motion.p>
          </div>
        </div>
        <div className=" h-full w-96 p-14 sm:w-[60%]">
          <div className="h-full w-full flex flex-col sm:gap-10 gap-5">
            <div className="flex flex-col justify-center">
              <p
                className={`text-[#FA5622] ${space.className} sm:font-bold font-medium sm:leading-6 sm:text-sm md:text-md md:text-xl text-base`}
              >
                CONTACT US AT
              </p>
              <a
                href="mailto:gecstudentscouncil@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={`${space.className} font-medium text-lg  md:text-2xl lg:text-3xl xl:text-3xl md:leading-[4rem] sm:leading-7 sm:text-xs `}
              >
                gecstudentscouncil@gmail.com
              </a>
            </div>
            <div>
              <p
                className={`${space.className} font-normal sm:text-base sm:leading-5 text-sm`}
              >
                <span className="font-bold">Avnish Cabral </span> (Chairman,
                Students&apos; Council)
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=918237673292"
                className="hover:underline flex gap-2 text-primary font-normal sm:text-base sm:leading-5 text-sm mt-1"
              >
                WhatsApp <LuExternalLink />
              </Link>
            </div>
            <div>
              <p
                className={`${space.className} font-normal sm:text-base sm:leading-5 text-sm`}
              >
                <span className="font-bold">Dakshat Patil </span> (Technical
                Head - Spectrum)
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=918669072165"
                className="hover:underline flex gap-2 text-primary font-normal sm:text-base sm:leading-5 text-sm mt-1"
              >
                WhatsApp <LuExternalLink />
              </Link>
            </div>
            <div>
              <p
                className={`text-[#FA5622] ${space.className} sm:font-bold font-medium sm:leading-6 text-center md:text-left sm:text-sm md:text-md md:text-xl text-base uppercase mb-4`}
              >
                socials
              </p>
              <div className="flex justify-center md:justify-normal gap-5 sm:mx-0 mx-10">
                <Link
                  href="https://www.instagram.com/gecspectrum/"
                  className="size-9 bg-mango text-black hover:bg-mango/80 rounded-md flex justify-center items-center"
                  title="Instagram"
                >
                  <RiInstagramFill className="size-5" />
                </Link>
                {/* <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <Link href="/"><FaFacebookF className="size-5" /></Link>
                  </div> */}
                <Link
                  href="https://www.linkedin.com/school/gecgoa/"
                  className="size-9 bg-mango text-black hover:bg-mango/80 rounded-md flex justify-center items-center"
                  title="LinkedIn"
                >
                  <FaLinkedinIn className="size-5" />
                </Link>

                {/* <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <Link href="/"><FaXTwitter className="size-5 text-white" /></Link>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* After Footer Images */}
      <div className="absolute h-[60vh] w-full top-[70] bottom-0 -z-10 footgrad flex justify-between "></div>
      <motion.div
        className="absolute bottom-[-46vh] left-[-30vw] hidden md:flex"
        initial={{ x: -200, y: 200 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/a5e9/ebea/c8597b32e62c2ca8c0426b7e632cb7e0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVm-rp-Toq~ZCYSh90tBG0ifXCJsxpm4C~dTe4kxZevVXwSZkGA-jaZD3sXJsGSF-Zn8roGch4cJxgsCCzZRBZjaY7RckIdEvJYHkB0AF1JfVxLGX9TJ4P7BIBucC-eU6KNH5Ctv1ryos7LQf1ITFHpNrqTTEAIDJuRyRQR8ccQMxh~9yYheVj5jN-60WJsR3Gn~a9~G0b2lKqwiOYNS6xoCslpeDt~2DU3GXoPSq~b17sEv4AUPE9u2mnJVDasN4rH~F4~rfk6P7L-TtdpsNF2bbUf2m0GULBhZ830ccUxV7jzJT61KaQV3hF-IGRbfPfAis4yS-3E3gWHQC8vykA__"
          height={1000}
          width={1000}
          alt="planet"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[-20vh] right-[-30vw] -z-0 hidden md:flex"
        initial={{ x: 300, y: 300 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/6d06/58bb/86129c537e9a2dce530146dbdb22096d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCsALS8HCl1wPFSFQPN4DYds81ax3A~wVna50HuTG-nKp8fX8-fQlS4pkgVOh-12jsfYIt4pysX8~7BXh2lGQ8s-zwLULr0dJVAdPEoFaj9wcH9sCNCxlgFlHunE6Z1EyBigWYU~OcoQxbPwB6mTDxjQCFITi8JOvcrjYNn314RJ-lxlZmZ1omtTfmDYY72C8TU95CPWwZ-lcAnj9cf7j2eaUCiosmeST~cDPg5rIGV7hdSS7vaTkOC-awpk7eM31HyIEY~HVy68qdMDQbqeGBr1AEGEAon3LhYmRfiJcyf-BoEhaVF5H3V2BiEOVfaoUvTkWzpTwsKRmR0vw4MGQw__"
          height={1000}
          width={1000}
          alt="speceship"
        />
      </motion.div>

      <motion.p
        className={`sm:mt-20 mt-5 text-[#FEFEFE] ${space.className} font-normal sm:text-base text-sm leading-5`}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        GEC Spectrum © 2024 All Rights Reserved.
      </motion.p>
      <motion.p
        className={`mt-2 mb-2 text-[#FEFEFE] ${space.className} font-normal sm:text-base text-xs leading-5`}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Made with ❤️ by GEC Coders&apos; Club
      </motion.p>
    </div>
  );
};

export default Footer;
