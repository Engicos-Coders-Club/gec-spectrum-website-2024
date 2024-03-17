"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const space = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const Tagline = () => {
  return (
    <div className="relative mt-40 h-[50vh] w-screen flex items-center justify-center">
      <motion.div
        initial={{ x: -200, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: -100, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="z-20 absolute sm:left-[-13rem] -left-44 sm:top-8 -top-24"
      >
        {/* laptop thing is here */}
        <Image
          className="sm:h-80 hidden md:block h-64 w-[auto] rotate-[25deg]"
          height={200}
          width={200}
          src="https://s3-alpha-sig.figma.com/img/52d7/c247/011c2659015ffd1b09c19a9e1e679abc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyWtkTEtycdTQ4i6UdG1Snx5j2R6OFCq97aTsBkHw5zbm3pLpB4dObVE0gt4n2vjIThK-qWLKLJ-3sE4K3ZVyc2tlpAVNPACNIWw3AsF-ihv72O8rNwGk94ZzqpzFEkoKeeTJSEbCpivVZxuJrKPRQv9LQ4ovyD2mWcLPoFrF-bg0OnxZlXgv8NYZ7nw0SKClFiLzxCwOzEKi2Erm60EZ6HVti5t~t0Ti8Q7xaasvc2o30WKx4BoH4uB45J9in0xdUsLHuHqd07gYDVitvs9vsAUuc3DjAFoNbUXf5auIzjWzC8tSWqociPiOcDpOfcEH1KZA1JYLNdm4leasWa4zQ__"
          alt="computer"
        />
      </motion.div>
      <motion.div
        initial={{ x: 300, y: 300, opacity: 0 }}
        whileInView={{ x: 0, y: -100, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="z-20 absolute sm:-right-[27.5rem] -right-[22rem] sm:top-[6rem] top-96"
      >

        {/* robot thing is here */}
        <Image
          className="h-[40rem] hidden md:block  rotate-[-26deg] w-[auto]"
          height={600}
          width={600}
src="https://s3-alpha-sig.figma.com/img/9882/f4b1/44b540a3c892da5a247649855a71b660?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V2cUcMh2LVCLfDiEkeJxjBoxu33P1aGAYnkeLD6h9s6i2WUFqSGyqkejeu2-~yFJ3dwN8vtSeO~C07qlPSejjhfQoLsU15aZYOJezUii~M3rmW2boipfpS9N1Be6q8YzloKEhppCOnJj9umHVPYYrG3LaCbUcByRr0rsFdt5~Vq6XTey~0eCLS6w7A3Bg1uzi51tQDrHI5cfd18uPRnWVU7GJtzyCZHGURBrl5ashhXPVIi3KDVOv8SI--FBklnBuoVShGstBg7hXXpXeyBiMVZdXzw2YUpX5NRnC-aXRiD~Lmm-i93M5iPnbm5gfBS-sQg9PcbejbDJqJy6HWTEJw__"
          alt="robot"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className={`${space.className} text-3xl  text-center relative -z-10 w-screen`}
      >
        <motion.div
          className="h-[0.1rem] gradient-five-colors w-full absolute top-1/2 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        ></motion.div>
        <p className="z-20">
          “EMBRACE THE UNKNOWN & GLIDE <br /> WITH US THROUGH THE COSMIC <br />{" "}
          SPECTRUM”
        </p>
      </motion.div>
    </div>
  );
};

export default Tagline;
