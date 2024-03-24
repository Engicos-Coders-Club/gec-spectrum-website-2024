"use client";
import { useEffect, useState } from "react";
import CustomInput from "./Input";
import { MdDelete } from "react-icons/md";
import { IoAdd, IoInformation } from "react-icons/io5";
import { BiInfoCircle } from "react-icons/bi";
import { axiosInstance } from "../../../axios-config";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import PaymentPreview from "./PaymentPreview";
import { fileToBase64 } from "@/utils/base64Conversion";
import Link from "next/link";
import toast from "react-hot-toast";
import { freeEventImage } from "./FreeEventImg";
import IdImageUploadField from "./IdImageUploadField";

type Member = {
  name: string;
  email: string;
  contact: string;
  college?: string;
  idcard: string;
};

interface formProps {
  eventId: string;
  teamName: string;
  leader: string;
  participants: Member[];
  payment_screenshot: string;
}

interface ResponseDataProps {
  msg: string;
}

export default function Register({
  minTeam,
  maxTeam,
  eventId,
  eventFee,
}: {
  minTeam: number;
  maxTeam: number;
  eventId: string;
  eventFee: number;
}) {
  const [members, setMembers] = useState<{ count: number }[]>([]);

  // Update backend
  const {
    mutate: onDetailsSubmit,
    isPending,
    isSuccess,
    data,
    reset,
  } = useMutation({
    mutationFn: async (values: formProps) => {
      await axiosInstance.post("events/register-event", values, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      // form.reset();
      toast.success("Registration Successful");
    },
    onError: (err: AxiosError<ResponseDataProps>) => {
      if (err.response?.data?.msg) {
        toast.error(err.response?.data?.msg);
        console.log(err.response?.data?.msg);
      } else {
        toast.error("Registration Failed");
        console.log(err.response?.data);
      }
    },
  });

  useEffect(() => {
    if (minTeam > 0) {
      setMembers(
        Array.from({ length: minTeam }, (_, index) => ({
          count: index + 1,
        }))
      );
    }
  }, [minTeam]);

  // form submit handling
  const handleUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Convert id files to base64 for all members
    const memberPromises = members.map(async (count, index) => {
      const updateId = formData.get(`member.${index}.idcard`) as File;
      const base64idcard = await fileToBase64(updateId);
      formData.delete(`member.${index}.idcard`);
      formData.append(`member.${index}.idcard`, base64idcard);
    });

    // Wait for all member promises to complete
    await Promise.all(memberPromises);

    // if event is paid, show payment screenshot; else show 'free event' image
    if (eventFee > 0) {
      const updatePayment = formData.get(`payment_screenshot`) as File;
      const base64idcard = await fileToBase64(updatePayment);
      formData.delete(`payment_screenshot`);
      formData.append(`payment_screenshot`, base64idcard);
    } else {
      formData.append(`payment_screenshot`, freeEventImage);
    }

    // form object to be sent to backend
    const dataObj = {} as formProps;
    const participants = members.map((member, index) => {
      const participant = {
        name: formData.get(`member.${index}.name`) as string,
        email: formData.get(`member.${index}.email`) as string,
        contact: formData.get(`member.${index}.contact`) as string,
        college: formData.get(`member.${index}.college`) as string,
        idcard: formData.get(`member.${index}.idcard`) as string,
      };
      return participant;
    });
    dataObj.participants = participants;
    dataObj.eventId = eventId;
    dataObj.leader = formData.get("leader") as string;
    dataObj.teamName = formData.get("teamName") as string;
    dataObj.payment_screenshot = formData.get("payment_screenshot") as string;
    onDetailsSubmit(dataObj);
  };

  // handle add member
  const handleAddMember = () => {
    if (members.length >= maxTeam) {
      alert("Maximum team size required.");
      return;
    } else
      setMembers((members) => [
        ...members,
        {
          count: members.length + 1,
        },
      ]);
  };

  const handleDeleteMember = (index: number) => {
    if (members.length === minTeam) {
      alert("Minimum team size required.");
      return;
    }
    setMembers((members) => members.filter((_, i) => i !== index));
  };

  return !isSuccess ? (
    <div className="w-full flex justify-center items-center bg-black mb-4 mt-20">
      <div className="p-3 w-3/4 sm:w-2/3 mb-4 bg-black border border-dashed border-[#FFBA25] flex justify-center">
        <form className="w-full flex flex-col" onSubmit={handleUserSubmit}>
          <div className="p-3 mt-3 border flex space-x-2 items-start text-center">
            <BiInfoCircle className="text-2xl text-tangerine hidden sm:block" />
            <p className="text-sm font-light flex">
              Registration confirmation will be communicated through email and
              will reflect on your profile in 1-2 days.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center mt-3 space-y-3 text-[#FFBA25]">
            <CustomInput label="Team Name" required={true} name="teamName" />
            <CustomInput
              label="Team Leader Email"
              required={true}
              placeholder="example@email.com"
              type="email"
              name="leader"
              helper="Ensure at least one member below shares the same email for all communications. "
            />
          </div>

          {members.map((member, index) => (
            <div key={index} className="w-full flex flex-col space-y-3 mt-10">
              <div key={index} className="w-full flex flex-col space-y-3">
                <div className="flex justify-between">
                  <p className="text-mango text-bold underline underline-offset-4 decoration-wavy decoration-primary font-medium uppercase">
                    Member - {index + 1}
                  </p>
                  <button
                    type="button"
                    className="hover:bg-gray-800 rounded p-2"
                    onClick={handleDeleteMember.bind(null, index)}
                  >
                    <MdDelete className="text-red-600 text-xl" />
                  </button>
                </div>
                <div className="mt-3">
                  <CustomInput
                    label="Full Name"
                    type="text"
                    required={true}
                    name={`member.${index}.name`}
                  />
                  <CustomInput
                    label="Email ID"
                    placeholder="example@email.com"
                    type="email"
                    name={`member.${index}.email`}
                    required={true}
                  />
                  <CustomInput
                    label="College Name"
                    type="text"
                    name={`member.${index}.college`}
                    helper="Compulsory for school/college students."
                  />
                  <CustomInput
                    label="Phone Number"
                    placeholder="+91"
                    type="tel"
                    name={`member.${index}.contact`}
                    required={true}
                    helper="For all future communications. Preferably Whatsapp."
                  />
                  <IdImageUploadField index={index} />
                </div>
              </div>
            </div>
          ))}

          <p className="text-center text-red-600 mt-5">
            {members.length >= maxTeam ? "Max team size reached." : ""}
          </p>
          <button
            onClick={handleAddMember}
            type="button"
            className="text-[#FFBA25] bg-yellow-700 rounded-full rounded-tl-none px-3 py-2 mt-6 mb-10 mx-auto flex gap-2 text-sm font-bold hover:bg-yellow-900 disabled:bg-gray-700 disabled:text-gray-500"
            disabled={members.length >= maxTeam}
          >
            <IoAdd className="text-xl" /> ADD MEMBER
          </button>

          {eventFee > 0 && <PaymentPreview />}
          <button
            className="mx-auto bg-[#FFBA25] text-black text-lg my-7 w-[269px] px-3 py-2 rounded-full rounded-tl-none hover:bg-yellow-600 uppercase font-bold disabled:bg-gray-500"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Registering..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="border m-4 border-dashed border-mango h-[30vh] flex flex-col items-center justify-center text-center">
      <h3 className="text-md md:text-xl text-mango lg:w-2/4">
        Please keep an eye on your emails for Registration Confirmation.
        We&apos;ll soon update the details on website profiles as well.
      </h3>
      <Link
        href="/competitions"
        className="mx-auto bg-[#FFBA25] text-black text-lg my-7 w-[269px] px-3 py-2 text-center rounded-full rounded-tl-none hover:bg-yellow-600 uppercase font-bold disabled:bg-gray-500"
      >
        Go to Competitions
      </Link>
    </div>
  );
}
