"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/private");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-tangerine/50 p-2 px-5 rounded-full rounded-tl-none font-semibold hover:bg-violet-900"
    >
      Logout
    </button>
  );
};
export default LogoutButton;
