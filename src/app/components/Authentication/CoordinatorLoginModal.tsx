"use client";
import React, { useState, FormEvent, useEffect } from "react";
import localFont from "next/font/local";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../../axios-config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import CustomInput from "@/components/Competitions/Input";
import { BiLoader } from "react-icons/bi";
import { BackendResponseDataProps } from "@/utils/types/types";
import { redirect, useRouter } from "next/navigation";
import { BsEyeFill } from "react-icons/bs";

interface LoginModalProps {
  onClose: () => void;
}

interface LoginCredentialsProps {
  email: string;
  key: string;
}

const panchang = localFont({
  src: "../../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const CoordinatorLoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  // auth/login-coordinator
  const {
    mutate: mutateCoordinator,
    isSuccess: isCoordinatorSuccess,
    isPending,
  } = useMutation({
    mutationFn: (credentials: LoginCredentialsProps): Promise<any> => {
      return axiosInstance.post("auth/login-coordinator", credentials, {
        headers: { ContentType: "application/json" },
      });
    },
    onSuccess: (data) => {
      toast.success("Successfully logged in as Coordinator!");
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(data.data.token));
      localStorage.setItem("userDetails", JSON.stringify(data.data.user));
      localStorage.setItem(
        "department",
        JSON.stringify(data.data.user.department)
      );
      localStorage.setItem("role", JSON.stringify("coordinator"));
      router.push(`/private/department/${data.data.user.department}`);
    },
    onError(error: AxiosError<BackendResponseDataProps>) {
      console.log(error.response?.data);
      if (error.response?.data.msg) {
        toast.error(error.response?.data.msg);
      }
    },
  });

  // HANLDERS ---------------------------------
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    const formData = new FormData(event.target as HTMLFormElement);

    const credentials = {
      email: formData.get("email") as string,
      key: formData.get("password") as string,
    };
    // login-coordinator
    mutateCoordinator(credentials);
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
          {/* close form */}
          <button role="close">
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
          </button>
        </div>
        {/* ------------------- form -------------------  */}
        <form onSubmit={handleSubmit} className="text-start">
          <CustomInput label="Email" type="email" required name="email" />
          <div className="flex flex-col pt-10 text-[#FFBA25]">
            <p className="text-white text-sm">Login Key</p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="my-2 p-2 border-b border-mango bg-black w-full outline-none focus:bg-gray-800"
              required
            />
            <BsEyeFill
              onClick={() => {
                setShowPassword((v) => !v);
              }}
            />
          </div>

          {/* form actions ------------------- */}
          <div className="flex flex-wrap items-center gap-5 sm:justify-end mt-10">
            <button
              type="submit"
              className="py-2 px-6 bg-primary hover:bg-primary/80 text-white rounded-full rounded-tl-none uppercase font-medium disabled:opacity-50"
              disabled={isPending}
            >
              {isPending ? <BiLoader color="white" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoordinatorLoginModal;
