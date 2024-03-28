// ExploreTile.tsx
import Tile from "./tile/Tile";
import Link from "next/link";
import localFont from "next/font/local";

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

interface ExploreTileProps {}

const ExploreTile: React.FC<ExploreTileProps> = () => {
  return (
    <div className="mt-10 mb-24 px-8 sm:px-10 md:px-20 relative">
      <div className="flex flex-row items-center justify-center md:justify-start space-y-0 space-x-9">
        <div className="relative">
          <h1
            className={`text-lg md:text-2xl lg:text-5xl text-white font-semibold uppercase ${panchang.className}`}
          >
            Explore
          </h1>
        </div>
        <div className="absolute -left-10 h-[1px] w-screen gradient-border -z-10"></div>
      </div>

      <div className="flex flex-col gap-5 sm:mt-16 my-10 max-w-screen-xl mx-auto">
        <Tile href="/sponsors" text="* Sponsors" subStr="esteemed" />
        <Tile
          href="https://forms.gle/pvemV4a3EAZbiDFQ6"
          text="* rooms"
          subStr="book"
        />
        <Tile href="/teams" text="* team" subStr="meet the" />
        <Tile href="/event" text="* events" subStr="interesting" />
      </div>
    </div>
  );
};

export default ExploreTile;
