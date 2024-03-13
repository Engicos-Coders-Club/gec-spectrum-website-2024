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
  const Text = text.split(" ");

  return (
    <div
      className="flex mt-0 md:h-10 lg:h-10 border-y-2 border whitespace-nowrap md:text-3xl text-1xl w-full overflow-hidden"
      style={{
        // backgroundImage: 'url("/Vector.svg")',
        // backgroundBlendMode: "multiply", // Achieve light grey background effect
        backgroundColor: "rgba(220, 220, 220, 0.5)", // Adjust opacity for desired greyness
      }}
    >
      <motion.div
        className="flex items-center text-yellow-500" // Set text color to yellow
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
            <span className="mx-2">{word}</span>
            <span className="mx-2">{"<<"}</span>
          </p>
        ))}
      </motion.div>
      <motion.div
        className="flex  items-center text-yellow-500" // Set text color to yellow
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
            <span className="mx-2">{word}</span>
            <span className="mx-2">{"<<"}</span>
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollText;
