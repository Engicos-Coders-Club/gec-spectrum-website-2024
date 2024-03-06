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
      <div className="sm:flex-row flex flex-col-reverse sm:justify-center justify-normal mt-5 sm:mt-0 items-center sm:h-[70vh] w-[80vw] rounded-3xl bg-[#18181880] backdrop-blur-sm">
        <div className=" h-full sm:w-[40%] w-60 sm:border-r bordercolor sm:p-14">
          <div className="flex flex-col h-full w-full gap-10 sm:items-center">
            <div className="sm:h-auto sm:w-full w-48 flex justify-center ml-6">
              <img src="image 3.png" alt="logo" className="size-full" />
            </div>
            <div className="w-full h-56 rounded-3xl">
              <div className="w-full h-52 rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Goa+College+of+Engineering,+Ponda,+Goa,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  alt="Goa College of Engineering"
                  className="sm:h-full h-[90%] w-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-96 p-14 sm:w-[60%]">
            <div className="h-full w-full flex flex-col sm:gap-10 gap-5">
              <div className="flex flex-col justify-center">
                <h1
                  className={`text-[#FA5622] ${space.className} sm:font-bold font-medium sm:leading-6 sm:text-xl text-base`}
                >
                  CONTACT US AT
                </h1>
                <h1
                  className={`${space.className} font-medium sm:text-5xl sm:leading-[4rem] text-xl`}
                >
                  info@gecspectrum.com
                </h1>
              </div>
              <div>
                <p
                  className={`${space.className} font-normal sm:text-base sm:leading-5 text-sm`}
                >
                  <span className="font-bold">Name: </span>Hello World (Cultural
                  Secretary)
                </p>
                <p
                  className={`${space.className} font-normal sm:text-base sm:leading-5 text-sm`}
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
                  className={`${space.className} font-normal sm:text-base sm:leading-5 text-sm`}
                >
                  <span className="font-bold">Name: </span>Hello World (Cultural
                  Secretary)
                </p>
                <p
                  className={`${space.className} font-normal sm:text-base sm:leading-5 text-sm`}
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
              <div className="flex items-center gap-2 sm:mx-0 mx-10">
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                  <Link href="/"><RiInstagramFill className="size-5" /></Link>
                </div>
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                <Link href="/"><FaFacebookF className="size-5" /></Link>
                </div>
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                <Link href="/"><FaLinkedinIn className="size-5" /></Link>
                </div>
                <div className="size-9 bg-[#06050A] rounded-md flex justify-center items-center">
                <Link href="/"><FaXTwitter className="size-5 text-white bg-black" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[60vh] w-full top-[70] bottom-0 -z-10 footgrad"></div>
        <p
          className={`sm:mt-20 mt-5 text-[#FEFEFE] ${space.className} font-normal text-base leading-5`}
        >
          GEC Spectrum © 2024 All Rights Reserved.
        </p>
      </div>
  );
};

export default Footer;
