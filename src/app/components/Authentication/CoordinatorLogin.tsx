"use client";
import { useState } from "react";
import { GrUserNew } from "react-icons/gr";
import CoordinatorLoginModal from "./CoordinatorLoginModal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CoordinatorLogin = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const router = useRouter();
  // HANDLERS -------------------------------
  const handleCoordinatorLogin = () => {
    if (
      JSON.parse(localStorage.getItem("role") as string) === "coordinator" &&
      localStorage.getItem("user")
    ) {
      router.push(
        `/private/department/${JSON.parse(
          localStorage.getItem("department") as string
        )}`
      );
    } else handleModalOpen();
  };

  const handleModalOpen = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const handleModalClose = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  return (
    <>
      <button
        className="flex flex-col items-center justify-center gap-3 hover:bg-primary bg-primary/80 text-white text-lg font-medium py-4 h-36 rounded-full rounded-tl-none grow basis-[45%] group"
        onClick={handleCoordinatorLogin}
      >
        <GrUserNew className="text-white size-6 group-hover:h-0 transition-all" />
        Dept Coordinator
      </button>
      {loginModalVisible && (
        <CoordinatorLoginModal onClose={handleModalClose} />
      )}
    </>
  );
};
export default CoordinatorLogin;
