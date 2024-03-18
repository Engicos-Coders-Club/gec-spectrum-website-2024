"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../axios-config";
import localFont from "next/font/local";
import Register from "@/components/Competitions/Register";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { GoLink, GoLinkExternal } from "react-icons/go";
import { ToastContainer } from "react-toastify";

const panchang = localFont({
  src: "../../../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const CompetitionsRegister = ({ params }: { params: { slug: string } }) => {
  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ["compRegistration"],
    queryFn: async (): Promise<any> => {
      const res = await axiosInstance.get(`/events/${params.slug}`);
      return res.data;
    },
  });

  // console.log(data);
  return (
    <div className="w-full my-6">
      {isSuccess && (
        <>
          <div className="header mx-5 md:mx-10 flex flex-col gap-2 mb-3">
            <h1
              className={`${panchang.className} text-mango text-3xl lg:text-5xl font-bold my-2 flex gap-2 items-center`}
            >
              {data?.event?.eventName?.split("(")[0] || data?.event?.eventName}{" "}
              <Link href={`/competitions/${params.slug}`} title="Event Rules">
                <GoLink className="text-blue-500 hover:text-blue-100" />
              </Link>
            </h1>
          </div>
          <div className="flex w-ful justify-normal border-t border-b border-[#FFBA25] flex-wrap">
            <div className="mx-5 md:mx-10 mt-6 grow flex flex-col items-center justify-center">
              <p className="text-lg lg:text-xl font-medium">
                Registration Fee:{" "}
                <span className="text-tangerine text-2xl">
                  Rs. {data.event.fee}
                </span>
              </p>
              <div className="flex gap-2 mt-4">
                <p className="text-lg lg:text-xl font-medium">Team Size:</p>
                <div className={`text-2xl text-tangerine`}>
                  {data && data?.event?.teamSize.min} -
                  {data && data?.event?.teamSize.max}
                  {data && data?.event?.teamSize.max > 1 && " (TEAM)"}
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center py-5 grow">
              <p className="text-xl md:text-2xl tracking-widest font-semibold mb-2">
                PRIZES
              </p>
              {isSuccess &&
                (data?.event?.prices.secondPlace === 0 ? (
                  <div>
                    <p className="text-2xl md:text-4xl font-medium text-tangerine">
                      ₹ {data && data?.event?.prices.firstPlace}
                    </p>
                    <p className="uppercase text-right italic">pool</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl md:text-4xl font-medium">
                      1st ~{" "}
                      <span className="font-semibold text-tangerine">
                        ₹ {data && data?.event?.prices.firstPlace}
                      </span>
                    </p>
                    <p className="text-2xl md:text-3xl font-medium mt-1">
                      2nd ~{" "}
                      <span className="font-semibold text-tangerine">
                        ₹ {data && data?.event?.prices.secondPlace}
                      </span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <Register
            minTeam={data?.event.teamSize.min}
            maxTeam={data?.event.teamSize.max}
            eventId={params.slug}
          />
        </>
      )}
    </div>
  );
};
export default CompetitionsRegister;
