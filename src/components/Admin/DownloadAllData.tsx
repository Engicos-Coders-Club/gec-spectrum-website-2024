import { useQuery } from "@tanstack/react-query";
import { PiDownload } from "react-icons/pi";
import { axiosInstance } from "../../../axios-config";
import { useEffect, useState } from "react";

const DownloadAllData = () => {
  const [token, setToken] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user") || "");
    if (token != "") setToken(token);
  }, []);

  //   get all downloadable data
  const { data, isPending, error, isSuccess } = useQuery({
    queryKey: ["eventsAllData"],
    queryFn: async () => {
      const res = await axiosInstance.get("events/get-teams-whole/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    enabled: !!token && trigger,
  });

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl text-white font-bold">Admin Section</h1>

      <button
        className="bg-lime-400 text-bgDark p-3 flex gap-2 justify-around items-center font-semibold"
        onClick={() => setTrigger(true)}
      >
        <PiDownload />
        Download Data
      </button>
    </div>
  );
};
export default DownloadAllData;
