import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

const space = Space_Grotesk({
  weight: ["700", "500", "300"],
  subsets: ["latin"],
  display: "swap",
});

interface ScrollingTextProps {
  text: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
  const Text = text.split(" ");
  return (
    <div
      className="flex rotate-3 mt-20 md:h-20 h-10 border-y border-dashed whitespace-nowrap md:text-5xl text-2xl w-full overflow-hidden"
    >
      <motion.div
        className="flex items-center"
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
          <p
            className={`${space.className} font-thin`}
            key={index}
          >
            <span className="mx-2">{word}</span>
            <span className="mx-2">{"//"}</span>
          </p>
        ))}
      </motion.div>
      <motion.div
        className="flex  items-center"
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
          <p
            className={`${space.className} font-thin`}
            key={index}
          >
            <span className="mx-2">{word}</span>
            <span className="mx-2">{"//"}</span>
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;
