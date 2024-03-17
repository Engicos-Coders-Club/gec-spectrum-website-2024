"use client";
import { useState } from "react";
import CustomInput from "./Input";
import Image from "next/image";
import IIcon from "../../../public/info.png";
import Dropper from "../../../public/ic_baseline-upload.png";
import QRCode from "../../../public/Payment QR.jpg";

type Member = {
  name: string;
  email: string;
  phoneNumber: string;
};

export default function Register() {
  const [members, setMembers] = useState<Member[]>([]);

  const addMember = () => {
    setMembers([...members, { name: "", email: "", phoneNumber: "" }]);
  };
  const handleSubmit = () => {
    console.log(members);
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    // You can perform further actions here, such as uploading the file or processing it.
  };
  

  return (
    <div className="w-full flex justify-center items-center bg-black mb-4">
      <div className="p-3 w-3/4 sm:w-1/2 mb-4 bg-black border border-dashed border-[#FFBA25] flex justify-center">
        <div className="flex flex-col">
          <div className="p-3 mt-3 border flex space-x-2">
            <Image src={IIcon} alt="i-icon" className="invisible sm:visible" />
            <p className="text-sm font-light flex">
              Registration confirmation will be communicated through email and
              will reflect on your profile in 1-2 days.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center mt-3 space-y-3 text-[#FFBA25]">
            <CustomInput label="Team Name" />
            <CustomInput label="Events" />
          </div>

          {members.map((member, index) => (
            <section
              key={index}
              className="w-full flex flex-col space-y-3 mt-5"
            >
              <h2 className="text-[#FFBA25]">Member {index + 1}</h2>
              <div className="mt-3">
                <CustomInput label="Name" />
                <CustomInput label="Email" />
                <CustomInput label="Phone Number" placeholder="+91" />
                <p className="text-white text-sm mt-3">
                  ID Card Photo/ID Proof
                </p>
                <input
                  type="file"
                  className="mt-3 p-2 border-b border-[#FFBA25] bg-black w-full outline-none"
                />
              </div>
            </section>
          ))}

          <button
            onClick={addMember}
            className="text-[#FFBA25] bg-yellow-700 rounded-full rounded-tl-none px-4 py-2 mt-7 ml-auto"
          >
            ADD MEMBER
          </button>

          <div className="w-full flex flex-col items-center sm:items-start sm:flex-row space-x-4 mt-3">
            <div className="w-full sm:w-[180px] h-full">
              <Image src={QRCode} alt="payment-code" className="mb-4" />
            </div>
            <div className="mx-auto w-3/4 h-[140px] sm:h-full sm:w-3/4 relative rounded-2xl bg-[#FFBA25] border border-dashed border-[#FFBA25] bg-opacity-10 flex justify-center items-center mb-4">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileUpload(e)}
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <Image
                  className="size-7 mb-7"
                  src={Dropper}
                  alt="dropper-image"
                />
                <p className="absolute top-1/2 left-40 text-xs sm:text-sm text-center text-[#FFBA25] skew-50">
                  Upload Payment Screenshot
                </p>
              </label>
            </div>
          </div>

          <button
            className="mx-auto bg-[#FFBA25] text-black text-xl mt-7 w-[269px] px-3 py-2 rounded-full rounded-tl-none"
            onClick={handleSubmit}
          >
            REGISTER TEAM
          </button>
        </div>
      </div>
    </div>
  );
}
