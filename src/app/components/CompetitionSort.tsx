import Link from "next/link";
import React, { useState } from "react";

const Teamdata = [
  {
    title: "COMPUTER",
    id: "65eed7fb2378ad4bb65db274",
  },
  {
    title: "INFORMATION TECHNOLOGY",
    id: "65eed7ed2378ad4bb65db272",
  },
  {
    title: "MECHANICAL",
    id: "65eed83e2378ad4bb65db27a",
  },
  {
    title: "ELECTRONICS & TELECOMM",
    id: "65eed8182378ad4bb65db276",
  },
  {
    title: "ELECTRICAL & ELECTRONICS",
    id: "65eed8352378ad4bb65db278",
  },
  {
    title: "CIVIL",
    id: "65eed8442378ad4bb65db27c",
  },
];

const CompetitionSort = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  return (
    <div>
      <div className="w-full flex justify-center mt-10 p-3 overflow-hidden">
        <div className="grid grid-rows-2 p-5 grid-cols-3 sticky top-0 gap-10  ${Space.className} lg:grid-cols-7 lg:gap-6 lg:grid-rows-1">
          <Link
            className={`hover:border-dotted hover:border hover:border-white border-gray-950 border p-3 rounded-full rounded-tl-none overflow-hidden md:w-44 w-28 flex items-center justify-center flex-col cursor-pointer text-center text-xs sm:text-base ${
              activeLink === null ? "bg-yellow-500 text-black" : ""
            }`}
            href={`/competitions`}
            onClick={() => setActiveLink(null)}
          >
            <p>ALL</p>
          </Link>

          {Teamdata.map((button, index) => {
            return (
              <Link
                className={`hover:border-dotted hover:border hover:border-white border-gray-950 border p-3 rounded-full rounded-tl-none overflow-hidden md:w-44 w-28 flex items-center justify-center flex-col cursor-pointer text-center text-xs sm:text-base ${
                  activeLink === button.id ? "bg-yellow-500 text-black" : ""
                }`}
                key={index}
                href={`?dept=${button.id}`}
                onClick={() => setActiveLink(button.id)}
              >
                <p>{button.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompetitionSort;
