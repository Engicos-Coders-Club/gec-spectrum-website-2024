"use client";
import { useState } from "react";
import CustomInput from "./Input";
import Image from "next/image";
import QRCode from "../../../public/Payment QR.jpg";
import { MdDelete } from "react-icons/md";
import { IoAdd, IoInformation } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";

type Member = {
  name: string;
  email: string;
  phoneNumber: string;
  college?: String;
  idProof?: string;
};

interface formProps {
  teamName: string;
  teamLeader: string;
  members: Member[];
  paymentScreenshot: string;
}

export default function Register() {
  const [members, setMembers] = useState<Member[]>([]);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>();
  const onSubmit: SubmitHandler<formProps> = (data) => console.log(data);

  const handleUserSubmit = () => {
    console.log("Submitting form with members:", members);
  };

  const handleAddMember = () => {
    setMembers((members) => [
      ...members,
      {
        name: "",
        email: "",
        phoneNumber: "",
      },
    ]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("Selected file:", file);
    // You can perform further actions here, such as uploading the file or processing it.
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagePreviewUrl = reader.result as string;
        // Set the image preview URL in state or pass it to another component for display
        console.log("Image preview URL:", imagePreviewUrl);
        setPreviewImg(imagePreviewUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteMember = (index: number) => {
    setMembers((members) => members.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full flex justify-center items-center bg-black mb-4 mt-20">
      <div className="p-3 w-3/4 sm:w-2/3 mb-4 bg-black border border-dashed border-[#FFBA25] flex justify-center">
        <form
          className="w-full flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="p-3 mt-3 border flex space-x-2 items-start">
            <BiInfoCircle className="text-2xl text-tangerine hidden sm:block" />
            <p className="text-sm font-light flex">
              Registration confirmation will be communicated through email and
              will reflect on your profile in 1-2 days.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center mt-3 space-y-3 text-[#FFBA25]">
            <CustomInput
              label="Team Name"
              {...register("teamName", { required: true, maxLength: 60 })}
            />
            <CustomInput
              label="Team Leader Email"
              placeholder="example@email.com"
              type="email"
              {...register("teamLeader", { required: true })}
            />
          </div>

          {members.map((member, index) => (
            <div key={index} className="w-full flex flex-col space-y-3 mt-10">
              <div className="flex justify-between">
                <p className="text-[#FFBA25] text-bold underline underline-offset-4 decoration-wavy">
                  Member {index + 1}
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
                <CustomInput label="Full Name" type="text" />
                <CustomInput
                  label="Email ID"
                  placeholder="example@email.com"
                  type="email"
                  {...register(`members.${index}.email`, { required: true })}
                />
                <CustomInput
                  label="College Name"
                  type="text"
                  {...register(`members.${index}.college`)}
                />
                <CustomInput
                  label="Phone Number"
                  placeholder="+91"
                  type="tel"
                  {...register(`members.${index}.phoneNumber`, {
                    required: true,
                    pattern: /^[1-9]\d{9}$/i,
                  })}
                />
                <p className="text-white text-sm mt-5">
                  ID Card Photo/ID Proof
                </p>
                <input
                  type="file"
                  className="mt-3 p-2 border-b border-[#FFBA25] bg-black w-full outline-none"
                />
              </div>
            </div>
          ))}

          <button
            onClick={handleAddMember}
            type="button"
            className="text-[#FFBA25] bg-yellow-700 rounded-full rounded-tl-none px-3 py-1 my-6 mx-auto flex gap-2 text-sm font-bold"
          >
            <IoAdd className="text-xl" /> ADD MEMBER
          </button>

          <div className="w-full flex flex-col items-center sm:items-start sm:flex-row space-x-4 mt-3">
            <div className="grow sm:w-[180px] h-full">
              <p className="text-xs text-center font-bold mb-2">
                <span className="text-tangerine">
                  {" "}
                  &quot;Team Name Team Event&quot;{" "}
                </span>{" "}
                should be mentioned during payment as &quot;note&quot;.
              </p>
              <Image src={QRCode} alt="payment-code" className="mb-4" />
            </div>
            <div className="mx-auto w-3/4 h-full sm:w-3/5 relative rounded-2xl bg-[#FFBA25] border border-dashed border-[#FFBA25] bg-opacity-10 flex flex-col justify-center items-center text-center py-6 px-4 md:py-1 mb-4 gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e)}
                className="bg-gray-700 w-3/4"
              />
              <p className="text-tangerine">Upload Screenshot of Payment</p>
              {previewImg && (
                <div className="mt-6 w-44 h-44 relative object-contain overflow-hidden">
                  {" "}
                  <Image src={previewImg} fill alt="payment screenshot" />
                </div>
              )}
            </div>
          </div>

          <button
            className="mx-auto bg-[#FFBA25] text-black text-xl mt-7 w-[269px] px-3 py-2 rounded-full rounded-tl-none"
            type="submit"
            onClick={handleUserSubmit}
          >
            REGISTER TEAM
          </button>
        </form>
      </div>
    </div>
  );
}
