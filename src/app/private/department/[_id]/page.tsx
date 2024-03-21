"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../axios-config";
import { useRouter, useSearchParams } from "next/navigation";

type Event = {
  events: {
    _id: string;
    eventId: string;
    eventName: string;
    deptName: string;
    contact: {
      coordinators: Array<{
        name: string;
        contact: string;
      }>;
    };
    rulesAndRegulations: Array<{
      topic: string;
      points: string[];
    }>;
  }[];
};

const Page: React.FC<{ params: { _id: string } }> = ({ params }) => {
  const { _id } = params;

  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const { data, isPending, isSuccess, error, isError } = useQuery({
    queryKey: ["events", _id],
    queryFn: async (): Promise<Event> => {
      const res = await axiosInstance.get(`events/department/${_id}`);
      return res.data;
    },
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="pt-20 sm:p-8 md:pt-20 lg:p-16 xl:p-20">
      <table className="table-auto w-full justify-center items-center text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">
              Event Name
            </th>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">
              Department
            </th>
          </tr>
        </thead>
        {isPending && (
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        )}
        <tbody>
          {isSuccess &&
            data.events.map((event, index) => (
              <tr key={index} className="bg-white">
                <td className="border font-semibold cursor-pointer hover:bg-green-200 text-black px-2 sm:px-4 py-2">
                  <Link
                    href={
                      `/private/department/${_id}/${event.eventId}?` +
                        createQueryString("eventName", event.eventName) || ""
                    }
                    className="w-full block hover:scale-95 transition-all"
                  >
                    {event.eventName}
                  </Link>
                </td>
                <td className="border text-black px-2 sm:px-4 py-2">
                  {event.deptName}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
