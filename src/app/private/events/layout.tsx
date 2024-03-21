import AdminNavbar from "@/app/components/AdminNavbar";
import LogoutButton from "@/app/components/Authentication/LogoutButton";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
};
export default layout;
