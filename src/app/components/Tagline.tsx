"use client";
import { url } from "inspector";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const Tagline = () => {
  return (
    <div className="h-100vh w-screen ">
      <div
        className="h-[10vh] w-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url("/Vector.svg")' }}
      ></div>

      <div className={`${space.className} text-3xl text-center relative`}>
        <div className="h-[0.1rem] gradient-five-colors w-full absolute top-1/2 -z-10"></div>
        <p className="z-10">
          “EMBRACE THE UNKNOWN & GLIDE <br /> WITH US THROUGH THE COSMIC <br />{" "}
          SPECTRUM”
        </p>
      </div>
    </div>
  );
};

export default Tagline;
