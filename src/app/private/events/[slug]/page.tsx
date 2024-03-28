"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../axios-config";
import toast from "react-hot-toast";
import { BackendResponseDataProps } from "@/utils/types/types";
import { AxiosError } from "axios";
import ImageModal from "@/components/ImageModal";

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
let i = 1;
const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [count, setCount] = useState<number>(0);
  const [token, setToken] = useState<string | null>(null);
  const { slug } = params;
  const searchParams = useSearchParams();
  const eventName = searchParams.get("eventName");
  const [modalVisible, setModalVisible] = useState({
    source: "",
    state: false,
  });

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
    queryKey: ["eventTeams", slug, count],
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
      return axiosInstance.patch(
        `payments/update-payment-status/${teamId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Successfully updated payment status in as Admin!");
      setCount((prev) => prev + 1);
    },
    onError: (error: AxiosError<BackendResponseDataProps, any>) => {
      console.log(error.response?.data);
      console.log("error");
      if (error.response?.data.msg) {
        toast.error(error.response?.data.msg);
      }
    },
  });

  const handleModalOpen = (source: string) => {
    setModalVisible((prev) => ({ ...prev, source, state: true }));
  };

  const handleModalClose = () => {
    setModalVisible((prev) => ({ ...prev, source: "", state: false }));
  };

  return (
    <>
      <div className="mt-10 mx-10 overflow-x-hidden">
        <p className="text-mango uppercase font-semibold">Event Name</p>
        <div className="flex gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl justify-center capitalize">
            {eventName}
          </h1>
        </div>

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
                <th className="px-2 sm:px-4 text-lg md:text-xl py-2">
                  Actions
                </th>
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
                    <td
                      className="border text-black px-2 sm:px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleModalOpen(team.payment_screenshot)}
                      title="Click to expand image"
                    >
                      <Image
                        src={team.payment_screenshot}
                        width={100}
                        height={100}
                        alt="payment"
                      />
                    </td>
                    <td className="border text-black px-2 sm:px-4 py-2">
                      {!team.paid && (
                        <button
                          onClick={() => updatePaymentStatus(team._id)}
                          className="bg-green-500 p-4 hover:bg-green-600 rounded-md"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalVisible.state && (
        <ImageModal
          source={modalVisible.source}
          closeHandler={handleModalClose}
        />
      )}
    </>
  );
};

export default Page;
