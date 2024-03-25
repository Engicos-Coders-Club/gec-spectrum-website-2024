import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";
import { MdArrowOutward } from "react-icons/md";

interface TileProps {
  text: string;
  subStr: string;
  href?: string;
}

const Tile = ({ text, subStr, href }: TileProps) => {
  return (
    <Link
      href={`${href}`}
      className="text-left py-3 px-5 bg-mango hover:bg-white transition uppercase rounded-b-lg rounded-r-3xl rounded-bl-3xl font-semibold grow group"
    >
      <div className="flex gap-2 justify-between items-center">
        <div>
          <p className="text-md text-red-500">{subStr}</p>
          <p className="text-xl  md:text-3xl lg:text-5xl text-black font-bold tracking-widest">
            {text}
          </p>
        </div>
        <MdArrowOutward className="ease-in-out duration-150 delay-75 text-tangerine size-16 group-hover:text-bgDark" />
      </div>
    </Link>
  );
};

export default Tile;
