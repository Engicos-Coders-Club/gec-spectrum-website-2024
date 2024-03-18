"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import CardItem from "@/components/Competitions-Card/CardItem";
import PageHead from "../components/PageHead";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../axios-config";
import { useQuery } from "@tanstack/react-query";
import { CompetitionsProps } from "@/utils/types/CompetitionCard";
import { useSearchParams } from "next/navigation";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

export default function Competitions() {
  const searchParams = useSearchParams();
  const dept = searchParams.get("dept");
  // const deptName = searchParams.get("deptName");

  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ["competitions"],
    queryFn: async (): Promise<CompetitionsProps> => {
      const query = dept ? `events/department/${dept}` : "events/";
      const res = await axiosInstance.get(query);
      return res.data;
    },
  });

  if (isPending)
    return <PageHead body="EXPLORE" title="COMPETITIONS" faltutext="**" />;
  return (
    <main>
      <PageHead
        body="EXPLORE"
        title="COMPETITIONS"
        faltutext={data?.events?.length || "/*"}
      />
      {isSuccess && (
        <section className={`mt-8 ${Space.className} container mx-auto mb-20`}>
          <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {data?.events?.map((event, index) => {
              return <CardItem key={index} eventDeets={event} />;
            })}
          </div>
        </section>
      )}
      {isError && (
        <p className="mx-auto text-center my-6">
          Oops! Data got lost in space 🪨
        </p>
      )}
    </main>
  );
}
