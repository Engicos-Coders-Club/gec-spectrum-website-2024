"use client";
import { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import AdminLoginModal from "./AdminLoginModal";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const router = useRouter();
  // HANDLERS -------------------------------
  const handleAdminLogin = () => {
    if (
      JSON.parse(localStorage.getItem("role") as string) === "admin" &&
      localStorage.getItem("user")
    ) {
      router.push("/private/department");
    } else {
      console.log("works inside");
      handleModalOpen();
    }
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
        className="flex flex-col items-center justify-center gap-3 hover:bg-tangerine bg-tangerine/80 text-white text-lg font-medium py-4 h-36 rounded-full rounded-tl-none grow basis-[45%] group"
        onClick={handleAdminLogin}
      >
        <GrUserAdmin className="text-white size-6 group-hover:h-0 transition-all" />
        Admin
      </button>
      {loginModalVisible && <AdminLoginModal onClose={handleModalClose} />}
    </>
  );
};
export default AdminLogin;
