"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

type Event = {
  eventId: string;
  eventName: string;
  fee: number;
  deptName: string;
  introduction: string;
  duration: string;
  prices: {
    firstPlace: number;
    secondPlace: number;
  };
  date: string;
  teamSize: number;
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
};

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // check if admin
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("role") as string) !== "admin") {
      toast.error("You are not authorized to view this page! Not admin :(");
      setIsAdmin(false);
      router.push("/private");
    } else {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    isAdmin &&
      fetch("https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text(); // use text(), not json()
        })
        .then((data) => {
          console.log(data);
          // If the data is in JSON format, parse it
          if (data) {
            const jsonData = JSON.parse(data);
            console.log(jsonData.events);
            setEvents(jsonData.events);
          }
        })
        .catch((error) => {
          console.log("Fetch error: ", error);
        });
  }, [isAdmin]);

  return (
    <div className="pt-20 sm:p-8 md:pt-20 lg:p-16 xl:p-20">
      <table className="table-auto w-full justify-center items-center">
        <thead className="text-left bg-gray-800">
          <tr>
            <th className="px-2 sm:px-4 text-lg md:text-xl py-2">Event Name</th>
            <th className="px-2 sm:px-4 text-lg md:text-xl py-2">Department</th>
            <th className="hidden sm:block px-2 sm:px-4 text-lg md:text-xl py-2">
              Event Id
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="bg-white">
              <td className="border font-semibold cursor-pointer hover:bg-green-200 text-black px-2 sm:px-4 py-2">
                <Link
                  href={
                    `/private/events/${event.eventId}?` +
                      createQueryString("eventName", event.eventName) || ""
                  }
                  className="w-full block hover:translate-x-1 transition-all"
                >
                  {event.eventName}
                </Link>
              </td>
              <td className="border text-black px-2 sm:px-4 py-2">
                {event.deptName}
              </td>
              <td className="hidden sm:block border text-black px-2 sm:px-4 py-2">
                {event.eventId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
