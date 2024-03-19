"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Event {
  eventName: string;
}

interface Team {
  teamName: string;
  leader: string;
  _id: string;
  participants: any[];
  paid: boolean;
  payment_screenshot: any;
}

// const initialTeams: Team[] = [
//   { name: "Team 1", leader: "Leader 1", paid: true },
//   { name: "Team 2", leader: "Leader 2", paid: false },
//   // Add more teams as needed
// ];

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [event, setEvent] = useState<Event>("" as any);
  const { slug } = params;

  //Event Name useeffect
  useEffect(() => {
    fetch(
      `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/${slug}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setEvent(data.event);
      })
      .catch((error) => {
        console.log("Fetch error: ", error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/get-teams/${slug}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTA2OTU5NTEsImV4cCI6MTcxMTEyNzk1MX0.3uOiqRvKdfmfgvohmMCv_u3B3Zoe1eKCJspG0MedRH4`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("this is the teams data");
        console.log(data);

        setTeams(data);
      });
  }, []);

 

  return (
    <div className="pt-40 md:mt-10 mt-10 sm:p-8  lg:pt-40 xl:p-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl justify-center">
        {event.eventName}
      </h1>
   
      <table className="table-auto mt-10 w-full justify-center items-center mb-10">
        <thead>
          <tr>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">Team</th>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">
              Team Leader
            </th>
            
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">Participants</th>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">Paid</th>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2">
              Payment Screenshot
            </th>
        
          </tr>
        </thead>
        <tbody>
  {teams && teams.map((team, index) => (
    <tr key={index} className="bg-white">
      <td className="border text-black px-2 sm:px-4 py-2">
        {team.teamName}
      </td>
      <td className="border text-black px-2 sm:px-4 py-2">
        {team.leader}
      </td>
      <td className="border flex flex-col text-black px-2 sm:px-4 py-2">
        {team.participants.map((participant: string, index: number) => (
          <div key={index}>{participant}</div>
        ))}
      </td>
      <td
        className={`border px-2 text-black sm:px-4 py-2 ${
          team.paid ? "bg-green-300 text-black" : "bg-red-300 text-black"
        }`}
      >
        {team.paid ? "Yes" : "No"}
      </td>
      <td className="border text-black px-2 sm:px-4 py-2">
        <Image src={team.payment_screenshot} width={100} height={100} alt="payment" />
      </td>
    
    </tr>
  ))}
</tbody>
      </table>
      </div>
  
  );
};

export default Page;
