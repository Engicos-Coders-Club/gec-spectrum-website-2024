"use client"
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ x: -200, y: 200,opacity:0}}
        whileInView={{ x: 0, y: -100,opacity:1}}
        transition={{ duration: 2, delay: 0.2 }}
        className="z-20"
      >
        <img
          className="absolute h-[15rem] w-[auto] top-[-6vh] rotate-[25deg] xl:left-[-10vw] lg:left-[-10vw] md:left-[-15vw] sm:left-[-20vw] left-[-30vw]"
          src="https://s3-alpha-sig.figma.com/img/52d7/c247/011c2659015ffd1b09c19a9e1e679abc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyWtkTEtycdTQ4i6UdG1Snx5j2R6OFCq97aTsBkHw5zbm3pLpB4dObVE0gt4n2vjIThK-qWLKLJ-3sE4K3ZVyc2tlpAVNPACNIWw3AsF-ihv72O8rNwGk94ZzqpzFEkoKeeTJSEbCpivVZxuJrKPRQv9LQ4ovyD2mWcLPoFrF-bg0OnxZlXgv8NYZ7nw0SKClFiLzxCwOzEKi2Erm60EZ6HVti5t~t0Ti8Q7xaasvc2o30WKx4BoH4uB45J9in0xdUsLHuHqd07gYDVitvs9vsAUuc3DjAFoNbUXf5auIzjWzC8tSWqociPiOcDpOfcEH1KZA1JYLNdm4leasWa4zQ__"
          alt="computer"
        />
      </motion.div>
      <motion.div
        initial={{ x: 300, y: 300, opacity: 0 }}
        whileInView={{ x: 0, y: -100, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="z-20"
      >
        <img
          className="absolute  sm:h-[40rem] sm:top-[-5vh]  rotate-[-26deg] w-[auto]  lg:right-[-30vw] md:right-[-44vw] sm:right-[-47vw] right-[-50vw]"
          src="https://s3-alpha-sig.figma.com/img/9882/f4b1/44b540a3c892da5a247649855a71b660?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XC~zYr7FZoXBqiUy3nSKTMh0k6P02xWpePUWY-INcdawNDTwhaHj6Xyrab~zI9TOfsnAOg8AZMBOQbZCF-bVe1NGEQJ0ykwoOHnViqJ2QNDotkbUV7fZFc0YHFcHgA6wSpZ4W6ACUMHBAsTgyHaL8N~6ExnRBOX0wK-CTzGKRbWhADy~jdhnj~EHXy1cEnvkUeqKBgb9Ly2uo6jwgeGZjEKm9-sGbXLbpMLesfSuoWL03DrEUQ0vhjannPU-QUFoxXPkVkaA75s3tZX30N3vmq~dmhM17bOmS7j3xaqC2KAqyfHAmxJvr3VdWZL3xkOohP5DsIQuJxn5Z4KlHPkmag__"
          alt="robot"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className={`${space.className} text-3xl text-center relative -z-10`}
      >
        <motion.div className="h-[0.1rem] gradient-five-colors w-full absolute top-1/2 -z-10"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 2, delay: 0.2}}
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
