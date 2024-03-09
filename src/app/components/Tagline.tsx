"use client";
import { url } from "inspector";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap',
  })

const Tagline = () => {
  return (
    <div className="h-100vh w-screen ">
      <div
        className="h-[10vh] w-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url("/Vector.svg")' }}
      >
      </div>

      <div className={`${space.className} text-2xl text-center`} >
          “EMBRACE THE UNKNOWN & GLIDE <br /> WITH US THROUGH  THE COSMIC <br /> SPECTRUM”
        </div>
    </div>
  );
};

export default Tagline;
