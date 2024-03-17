"use client";

import Image from "next/image";
import trophyImage from "../../../public/trophyImage.jpeg";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

interface Department {
    _id: string;
    name: string;
  }
  
  interface Obj {
    department: string;
    eventName: string;
  }

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

export default function CardItem({ obj }: { obj: Obj }) {
  const [department, setDepartment] = useState<Department[]>([]);
  const [departmentName, setDepartmentName] = useState("");
  useEffect(() => {
    axios
      .get("https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/department")
      .then(function (response) {
        setDepartment(response.data.departments);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const departmentObj = department.find((dep) => dep._id === obj.department);
    if (departmentObj) {
      setDepartmentName(departmentObj.name);
    }
  }, [department, obj.department]);

  let eventName = "";
  let secondaryname = "";
  if (obj.eventName) {
    const parts = obj.eventName.split("(");
    eventName = parts[0].trim();
    secondaryname = parts[1] ? parts[1].substring(0, parts[1].length - 1).trim() : "";
  }

  return (
    <div className="bg-[#FA5622] rounded-xl rounded-tl-none overflow-hidden p-2">
      <Image
        src={trophyImage}
        alt="random"
        className="rounded-xl rounded-tl-none"
      />
      <div className="p-2 text-white">
        <p className="text-sm font-light"> {secondaryname}</p>
        <h2 className={`text-xl font-bold text-black ${Space.className}`}>
          {eventName}
        </h2>
        <p className="text-sm">{departmentName}</p>
      </div>
    </div>
  );
}
