"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
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
};



const Page: React.FC<{ params: { _id: string } }> = ({ params }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const{ _id }= params;

  useEffect(() => {
    fetch(`https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/department/${_id}`)
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
  }, []);






  return (
    <div className="pt-20 sm:p-8 md:pt-20 lg:p-16 xl:p-20">
    <table className="table-auto w-full justify-center items-center">
      <thead>
        <tr>
          <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">Event Name</th>
          <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">Department</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index} className="bg-white">
            <td className="border font-semibold cursor-pointer hover:bg-green-200 text-black px-2 sm:px-4 py-2">
            <Link href={`/Admin/department/${event._id}/${event.eventId}`}>
                {event.eventName}
              </Link>
               
              
            </td>
            <td className="border text-black px-2 sm:px-4 py-2">{event.deptName}</td>
]          </tr>
        ))}
      </tbody>
    </table>
  </div>  
  );
};

export default Page;
