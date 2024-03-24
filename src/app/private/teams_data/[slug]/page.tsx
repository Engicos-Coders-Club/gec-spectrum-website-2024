"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../axios-config";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface Event {
    eventName: string;
  }
interface Participant {
  _id: string;
  name: string;
  email: string;
  contact: string;
  college: string;
  verified: boolean;
  events: string[];
  idcard: string;
  teams: string[];
  __v: number;
}

interface Team {
  _id: string;
  teamName: string;
  eventId: string;
  paid: boolean;
  payment_screenshot: string;
  participants: string[];
  leader: string;
  __v: number;
}

interface TeamData {
  team: Team;
  participants: Participant[][];
}
const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const [token, setToken] = useState<string | null>(null);
  

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user") || "");
    if (token != "") setToken(token);
    
  }, []);
  const eventName = localStorage.getItem("eventName");



  const {
    data: teamsData,
    isPending: newIsPending,
    isSuccess: newIsSuccess,
    error: newError,
    isError: newIsError,
  } = useQuery({
    queryKey: ["eventTeams_whole", slug],
    queryFn: async (): Promise<TeamData[]> => {
      const res = await axiosInstance.get(`events/get-teams-whole/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
    enabled: !!token,
  });

  if (newIsPending) {
    return <div>Loading...</div>;
  }

  if (newIsError) {
    return <div className="text-white text-lg">Something went wrong!</div>;
  }

  return (
    <div className="mt-10 mx-10 overflow-x-hidden">
      <div className="mt-10 mx-10 overflow-x-hidden">
        <p className="text-mango uppercase font-semibold">Event Name</p>
     
     {
eventName
     }
      </div>

      <div className="flex justify-between items-center uppercase font-semibold mt-8">
        <p className="text-mango ">Team Details</p>
        <p className="text-tangerine ">
          Total teams: {newIsSuccess && teamsData.length}
        </p>
      </div>

      <p className="text-sm text-gray-200 block md:hidden">
        (scroll horizontal =&gt;)
      </p>
      <div className="overflow-x-auto">
        <table className="table-auto mt-2 w-full justify-center items-center mb-10 text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-2 sm:px-4 text-lg sm:text-xl py-2">Team</th>
              <th className="px-2 sm:px-4 text-lg sm:text-xl py-2">
                Team Leader
              </th>

              <th className="px-2 sm:px-4 text-lg sm:text-xl py-2">
                Participants
              </th>

              <th className="px-2 sm:px-4 text-lg sm:text-xl py-2">Verified</th>
              <th className="px-2 sm:px-4 text-lg sm:text-xl py-2">
                Payment Screenshot
              </th>
            </tr>
          </thead>
          {newIsPending && (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
          {teamsData.length == 0 && (
            <tbody>
              <tr>
                <td className="py-2">No lost souls found 👻</td>
              </tr>
            </tbody>
          )}
          <tbody>
            {teamsData.map((teamData: TeamData, index: number) => (
              <tr key={index} className="bg-white">
                <td className="border text-black cursor-pointer hover:translate-x-5  hover:font-bold px-2 sm:px-4 py-2">
                  {teamData.team && teamData.team.teamName}
                </td>
                <td className="border text-black px-2 sm:px-4 py-2">
                  {teamData.team && teamData.team.leader}
                </td>
                <td className="border flex flex-col text-black px-2 sm:px-4 py-2">
                  <table >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>College</th>
                        
                        <th>ID Card</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamData.participants.map(
                        (participantGroup: Participant[], groupIndex: number) =>
                          participantGroup.map(
                            (
                              participant: Participant,
                              participantIndex: number
                            ) => (
                              <tr key={`${groupIndex}-${participantIndex}`} >
                                <td>{participant.name}</td>
                                <td>{participant.email}</td>
                                <td className="p-3">{participant.contact}</td>
                                <td className="p-3" >{participant.college}</td>
                               
                                <td>
                                  <Image
                                    src={participant.idcard}
                                    width={100}
                                    height={100}
                                    alt="idcard"
                                  />
                                </td>
                              </tr>
                            )
                          )
                      )}
                    </tbody>
                  </table>
                </td>
                <td
                  className={`border px-2 text-black sm:px-4 py-2 ${
                    teamData.team.paid
                      ? "bg-green-300 text-black"
                      : "bg-red-300 text-black"
                  }`}
                >
                  {teamData.team.paid ? "Yes" : "No"}
                </td>
                <td className="border text-black px-2 sm:px-4 py-2">
                  <Image
                    src={teamData.team.payment_screenshot}
                    width={100}
                    height={100}
                    alt="payment"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
