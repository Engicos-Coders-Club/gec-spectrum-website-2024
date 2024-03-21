"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../../axios-config";
import { useSearchParams } from "next/navigation";

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

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const [token, setToken] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const eventName = searchParams.get("eventName");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user") || "");
    if (token != "") setToken(token);
  }, []);

  const {
    data: teamsData,
    isPending,
    isSuccess,
    error,
    isError,
  } = useQuery({
    queryKey: ["eventTeams", slug],
    queryFn: async (): Promise<Team[]> => {
      const res = await axiosInstance.get(`events/get-teams/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    enabled: !!token,
  });

  if (isError) <div className="text-white text-lg">Something went wrong!</div>;
  return (
    <div className="mt-10 mx-10 overflow-x-hidden">
      <p className="text-mango uppercase font-semibold">Event Name</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl justify-center capitalize">
        {eventName}
      </h1>

      <div className="flex justify-between items-center uppercase font-semibold mt-8">
        <p className="text-mango ">Team Details</p>
        <p className="text-tangerine ">
          Total teams: {isSuccess && teamsData.length}
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
          {isPending && (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
          {isSuccess && teamsData.length == 0 && (
            <tbody>
              <tr>
                <td className="py-2">No lost souls found 👻</td>
              </tr>
            </tbody>
          )}
          <tbody>
            {isSuccess &&
              teamsData.map((team, index) => (
                <tr key={index} className="bg-white">
                  <td className="border text-black px-2 sm:px-4 py-2">
                    {team.teamName}
                  </td>
                  <td className="border text-black px-2 sm:px-4 py-2">
                    {team.leader}
                  </td>
                  <td className="border flex flex-col text-black px-2 sm:px-4 py-2">
                    {team.participants.map(
                      (participant: string, index: number) => (
                        <div key={index}>{participant}</div>
                      )
                    )}
                  </td>
                  <td
                    className={`border px-2 text-black sm:px-4 py-2 ${
                      team.paid
                        ? "bg-green-300 text-black"
                        : "bg-red-300 text-black"
                    }`}
                  >
                    {team.paid ? "Yes" : "No"}
                  </td>
                  <td className="border text-black px-2 sm:px-4 py-2">
                    <Image
                      src={team.payment_screenshot}
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
