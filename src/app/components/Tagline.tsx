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
    <div className="relative h-[50vh] ">
      <div
        className="h-[20vh] w-screen "
        style={{ backgroundImage: 'url("/Vector.svg")' }}
      ></div>
      <img className=" absolute h-[15rem] w-[auto] top-[-10vh] left-[-10vw] rotate-[25deg]" src="https://s3-alpha-sig.figma.com/img/52d7/c247/011c2659015ffd1b09c19a9e1e679abc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyWtkTEtycdTQ4i6UdG1Snx5j2R6OFCq97aTsBkHw5zbm3pLpB4dObVE0gt4n2vjIThK-qWLKLJ-3sE4K3ZVyc2tlpAVNPACNIWw3AsF-ihv72O8rNwGk94ZzqpzFEkoKeeTJSEbCpivVZxuJrKPRQv9LQ4ovyD2mWcLPoFrF-bg0OnxZlXgv8NYZ7nw0SKClFiLzxCwOzEKi2Erm60EZ6HVti5t~t0Ti8Q7xaasvc2o30WKx4BoH4uB45J9in0xdUsLHuHqd07gYDVitvs9vsAUuc3DjAFoNbUXf5auIzjWzC8tSWqociPiOcDpOfcEH1KZA1JYLNdm4leasWa4zQ__" alt="computer" />
      <img className="absolute h-[35rem] z-[-5]  right-[-26vw] top-[8vh] rotate-[-26deg] w-[auto]" src="https://s3-alpha-sig.figma.com/img/9882/f4b1/44b540a3c892da5a247649855a71b660?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XC~zYr7FZoXBqiUy3nSKTMh0k6P02xWpePUWY-INcdawNDTwhaHj6Xyrab~zI9TOfsnAOg8AZMBOQbZCF-bVe1NGEQJ0ykwoOHnViqJ2QNDotkbUV7fZFc0YHFcHgA6wSpZ4W6ACUMHBAsTgyHaL8N~6ExnRBOX0wK-CTzGKRbWhADy~jdhnj~EHXy1cEnvkUeqKBgb9Ly2uo6jwgeGZjEKm9-sGbXLbpMLesfSuoWL03DrEUQ0vhjannPU-QUFoxXPkVkaA75s3tZX30N3vmq~dmhM17bOmS7j3xaqC2KAqyfHAmxJvr3VdWZL3xkOohP5DsIQuJxn5Z4KlHPkmag__" alt="robot" />
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
