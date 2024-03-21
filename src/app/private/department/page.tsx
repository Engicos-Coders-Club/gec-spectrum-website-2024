"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { axiosInstance } from "../../../../axios-config";
import { constants } from "buffer";
import { useQuery } from "@tanstack/react-query";

type Department = {
  departments: {
    _id: string;
    name: string;
  }[];
};

const AdminDepartmentView = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ["privateDepartments"],
    queryFn: async (): Promise<Department> => {
      const res = await axiosInstance.get("/department");
      return res.data;
    },
    enabled: isAdmin,
  });

  // check if admin
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("role") as string) !== "admin") {
      toast.error("You are not authorized to view this page! Not admin :(");
      setIsAdmin(false);
      redirect("/private");
    } else {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="pt-20 sm:p-8 md:pt-20 lg:p-16 xl:p-20">
      <table className="table-auto w-full justify-center items-center">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-2 sm:px-4 text-xl sm:text-2xl py-2 text-left">
              Department Name
            </th>
          </tr>
        </thead>
        {isPending && (
          <tbody>
            <tr>
              <td className="w-full">Loading...</td>
            </tr>
          </tbody>
        )}
        <tbody>
          {isSuccess &&
            data.departments.map((department, index) => (
              <tr key={index} className="bg-white">
                <td className="border font-semibold cursor-pointer hover:bg-green-200 text-black px-2 sm:px-4 py-2">
                  <Link
                    href={`/private/department/${department._id}`}
                    className="w-full block hover:scale-95 transition-all"
                  >
                    {department.name}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDepartmentView;
