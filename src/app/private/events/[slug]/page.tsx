"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../axios-config";
import toast from "react-hot-toast";
import { BackendResponseDataProps } from "@/utils/types/types";
import { AxiosError } from "axios";

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
  const [teams, setTeams] = useState<Team[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const { slug } = params;
  const searchParams = useSearchParams();
  const eventName = searchParams.get("eventName");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user") || "");
    if (token != "") setToken(token);
  }, []);
  console.log(token);

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

  const {
    mutate: updatePaymentStatus,
    isSuccess: isVerifySuccess,
    isPending: isVerifyPending,
  } = useMutation({
    mutationFn: (teamId: any): Promise<any> => {
      return axiosInstance.patch(`payments/update-payment-status/${teamId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Successfully updated payment status in as Admin!");
    },
    onError: (error: AxiosError<BackendResponseDataProps, any>) => {
      console.log(error.response?.data);
      console.log("error");
      if (error.response?.data.msg) {
        toast.error(error.response?.data.msg);
      }
    },
  });

  // const handleApprove = async (teamId: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/payments/update-payment-status/${teamId}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTA2OTU5NTEsImV4cCI6MTcxMTEyNzk1MX0.3uOiqRvKdfmfgvohmMCv_u3B3Zoe1eKCJspG0MedRH4`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);

  //     // Update the state of the teams array
  //     setTeams((prevTeams) =>
  //       prevTeams.map((team) =>
  //         team._id === teamId ? { ...team, paid: true } : team
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Fetch error: ", error);
  //   }
  // };

  return (
    <div className="mt-10 mx-10 overflow-x-hidden">
      <p className="text-mango uppercase font-semibold">Event Name</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl justify-center capitalize">
        {eventName}
      </h1>

      <p className="text-sm text-gray-200 block md:hidden mt-2">
        (scroll horizontal =&gt;)
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto mt-10 w-full justify-center items-center mb-10">
          <thead className="bg-gray-800 text-left">
            <tr>
              <th className="px-2 sm:px-4 text-lg md:text-xl py-2">Team</th>
              <th className="px-2 sm:px-4 text-lg md:text-xl py-2">
                Team Leader
              </th>

              <th className="px-2 sm:px-4 text-lg md:text-xl py-2">
                Participants
              </th>
              <th className="px-2 sm:px-4 text-lg md:text-xl py-2">Paid</th>
              <th className="px-2 sm:px-4 text-lg md:text-xl py-2">
                Payment Screenshot
              </th>
              <th className="px-2 sm:px-4 text-lg md:text-xl py-2">Actions</th>
            </tr>
          </thead>
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
                  <td className="border text-black px-2 sm:px-4 py-2">
                    <button
                      onClick={() => updatePaymentStatus(team._id)}
                      className="bg-green-500 p-4 hover:bg-green-600 rounded-md"
                    >
                      Approve
                    </button>
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
