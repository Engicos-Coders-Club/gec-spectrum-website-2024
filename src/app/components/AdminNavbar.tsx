"use client";
import Link from "next/link";
import LogoutButton from "./Authentication/LogoutButton";
import { useEffect, useState } from "react";

const AdminNavbar = () => {
  const [userRole, setUserRole] = useState<"admin" | "coordinator" | null>(
    null
  );

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("role") as string) === "coordinator" &&
      localStorage.getItem("user")
    )
      setUserRole("coordinator");
    else if (
      JSON.parse(localStorage.getItem("role") as string) === "admin" &&
      localStorage.getItem("user")
    )
      setUserRole("admin");
  }, []);

  return (
    <>
      <br />
      <div className="mx-4 sm:mx-10 flex justify-center sm:justify-end gap-4">
        {userRole === "admin" && (
          <Link
            href="/private/department"
            title="View Departments"
            className="hover:border-dotted hover:outline-dashed outline-1 p-2 rounded-full rounded-tl-none"
          >
            Departments
          </Link>
        )}
        {userRole === "admin" && (
          <Link
            href="/private/events"
            title="View All Events"
            className="hover:border-dotted hover:outline-dashed outline-1 p-2 rounded-full rounded-tl-none"
          >
            Events
          </Link>
        )}
        {userRole === "coordinator" && (
          <Link
            href={`/private/department/${JSON.parse(
              localStorage.getItem("department") as string
            )}`}
            title="View Department Events"
            className="hover:border-dotted hover:outline-dashed outline-1 p-2 rounded-full rounded-tl-none"
          >
            Events
          </Link>
        )}
        <LogoutButton />
      </div>
      <br />
      <hr className="border-slate-500" />
    </>
  );
};
export default AdminNavbar;
