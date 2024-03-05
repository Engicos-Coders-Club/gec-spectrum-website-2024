import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const space = Space_Grotesk({
  weight: ["700", "500"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center items-center bg-[#18181880]">
      <div className="flex justify-center items-center h-[70vh] w-[80vw] rounded-3xl bg-[#18181880] backdrop-blur-sm">
        <div className=" h-full w-[40%] border-r bordercolor p-14">
          <div className="flex flex-col h-full w-full gap-10">
            <div className="h-auto w-full flex justify-center">
              <img src="image 3.png" alt="logo" className="size-auto" />
            </div>
            <div className="w-full h-56 rounded-3xl">
              <div className="w-full h-56 rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Goa+College+of+Engineering,+Ponda,+Goa,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  alt="Goa College of Engineering"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-[60%] p-14">
            <div className="h-full w-full flex flex-col gap-10">
              <div>
                <h1
                  className={`text-[#FA5622] ${space.className} font-bold leading-6 text-xl`}
                >
                  CONTACT US AT
                </h1>
                <h1
                  className={`${space.className} font-medium text-5xl leading-[4rem]`}
                >
                  info@gecspectrum.com
                </h1>
              </div>
              <div>
                <p
                  className={`${space.className} font-normal text-base leading-5`}
                >
                  <span className="font-bold">Name: </span>Hello World (Cultural
                  Secretary)
                </p>
                <p
                  className={`${space.className} font-normal text-base leading-5`}
                >
                  info@yahoo.com |{" "}
                  <Link
                    href="https://api.whatsapp.com/send?phone=917020977713"
                    className="hover:underline"
                  >
                    WhatsApp
                  </Link>
                </p>
              </div>
              <div>
                <p
                  className={`${space.className} font-normal text-base leading-5`}
                >
                  <span className="font-bold">Name: </span>Hello World (Cultural
                  Secretary)
                </p>
                <p
                  className={`${space.className} font-normal text-base leading-5`}
                >
                  info@yahoo.com |{" "}
                  <Link
                    href="https://api.whatsapp.com/send?phone=917020977713"
                    className="hover:underline"
                  >
                    WhatsApp
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <RiInstagramFill className="size-5" />
                </div>
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <FaFacebookF className="size-5" />
                </div>
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <FaLinkedinIn className="size-5" />
                </div>
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <FaXTwitter className="size-5 text-white bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[70vh] w-full top-[70] bottom-0 -z-10 footgrad"></div>
        <p
          className={`mt-20 text-[#FEFEFE] ${space.className} font-normal text-base leading-5`}
        >
          GEC Spectrum © 2024 All Rights Reserved.
        </p>
      </div>
  );
};

export default Footer;
