import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

const space = Space_Grotesk({
  weight: ["700", "500", "300"],
  subsets: ["latin"],
  display: "swap",
});

interface ScrollTextProps {
  text: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({ text }) => {
  const Text = text.split("_");

  return (
    <div className="flex mt-24 md:h-10 lg:h-16 border-y-2 whitespace-nowrap md:text-3xl text-xl w-full overflow-hidden bg-opacity-50 bg-gray-500">
      <motion.div
        className="flex items-center text-yellow-500"
        animate={{ x: "-100%" }}
        initial={{ x: "0%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          yoyo: Infinity,
          ease: "linear",
        }}
      >
        {Text.map((word, index) => (
          <p className={`${space.className} font-thin`} key={index}>
            <span className="mx-3">{word}</span>
            <span className="mx-3">{"<<"}</span>
          </p>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center text-yellow-500"
        animate={{ x: "-100%" }}
        initial={{ x: "0%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          yoyo: Infinity,
          ease: "linear",
        }}
      >
        {Text.map((word, index) => (
          <p className={`${space.className} font-thin`} key={index}>
            <span className="mx-3">{word}</span>
            <span className="mx-3">{"<<"}</span>
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollText;