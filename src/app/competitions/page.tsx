"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import CardItem from "@/components/Competitions-Card/CardItem";
import PageHead from "../components/PageHead";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../axios-config";
import { useQuery } from "@tanstack/react-query";
import { CompetitionsProps } from "@/utils/types/CompetitionCard";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

export default function Competitions() {
  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ["competitions"],
    queryFn: async (): Promise<CompetitionsProps> => {
      const res = await axiosInstance.get("events/");
      return res.data;
    },
  });

  console.log(data);

  return (
    <main>
      <PageHead body="EXPLORE" title="COMPETITIONS" faltutext="24" />
      {isSuccess && (
        <section className={`mt-8 ${Space.className} container mx-auto mb-20`}>
          <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {data.events.map((event, index) => (
              <CardItem key={index} eventDeets={event} />
            ))}
          </div>
        </section>
      )}
      {isError && <p className="mx-auto">Oops! Data got lost in space 🪨</p>}
    </main>
  );
}
