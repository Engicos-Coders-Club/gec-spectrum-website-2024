"use client";
import React, { useState, FormEvent } from "react";
import localFont from "next/font/local";
import OtpModal from "./OtpModal";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../../axios-config";
import toast from "react-hot-toast";

interface LoginModalProps {
  onClose: () => void;
  role: "admin" | "coordinator" | "partipant" | null;
}

const panchang = localFont({
  src: "../../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const LoginModal: React.FC<LoginModalProps> = ({ onClose, role }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(4).fill("")); // Create an array of 4 empty strings
  const [otpModalVisible, setOtpModalVisible] = useState(false); // New state for OTP modal visibility

  const handleChange = (elementIndex: any, event: any) => {
    const newOtp = [...otp]; // Copy the existing OTP array
    newOtp[elementIndex] = event.target.value; // Change the value of the specific element
    setOtp(newOtp); // Update the OTP state
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Email: ${email}`);
    setOtpModalVisible(true); // Open the OTP modal
  };

  return (
    <div className="fixed backdrop-blur-sm bg-white/10  inset-0 flex items-center justify-center z-50">
      <div className="text-white p-6 rounded-xl shadow-lg w-3/4 md:w-1/2 bg-[#06050A]">
        <div className="flex justify-between items-center">
          <h2
            className={`mb-4 ${panchang.className} uppercase text-2xl text-[#FFBA25] font-semibold`}
          >
            Login
          </h2>
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 mx-auto">
            Email:
            <input
              placeholder="john@doe.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 p-2 px-4 w-full bg-[#323232] text-white rounded-lg"
            />
          </label>
          <div className="flex flex-wrap items-center gap-5 sm:justify-end mt-10">
            <button
              type="submit"
              className="py-2 px-6 bg-primary hover:bg-primary/80 text-white rounded-full rounded-tl-none uppercase font-medium"
            >
              Submit
            </button>
            <button
              onClick={onClose}
              className="py-2 px-6 bg-tangerine hover:bg-tangerine/80 text-white rounded-full rounded-tl-none uppercase font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {otpModalVisible && (
        <OtpModal onClose={() => setOtpModalVisible(false)} />
      )}
    </div>
  );
};

export default LoginModal;
