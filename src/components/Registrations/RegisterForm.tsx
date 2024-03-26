import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios-config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import RegisterTeamForm from "./RegisterTeamForm";
import { useEffect, useState } from "react";
import AddParticipants from "./AddParticipants";
import Link from "next/link";
import RedirectUser from "./RedirectUser";
import freeEvent from "@/assets/FreeEvent.png";

interface ResponseDataProps {
  msg: string;
}

const RegisterForm = ({
  minTeam,
  maxTeam,
  eventId,
  eventFee,
}: {
  minTeam: number;
  maxTeam: number;
  eventId: string;
  eventFee: number;
}) => {
  const [teamId, setTeamId] = useState<string | null>(null);
  const [submit, setSubmit] = useState(false);

  // remove any previous localstorage data
  useEffect(() => {
    localStorage.clear();
  }, []);

  const {
    mutate: onTeamSubmit,
    isPending: isTeamSubmitPending,
    isSuccess: isTeamSuccess,
  } = useMutation({
    mutationFn: async (values: {
      [k: string]: FormDataEntryValue;
    }): Promise<any> => {
      const { data } = await axiosInstance.post(
        "events/initialize-team",
        values,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data.msg);
      //   temporarily store team id in local storage
      localStorage.setItem("teamId", JSON.stringify(data.teamId));
      setTeamId(data.teamId);
    },
    onError: (err: AxiosError<ResponseDataProps>) => {
      if (err.response?.data?.msg) {
        toast.error(err.response?.data?.msg);
        console.log(err.response?.data?.msg);
      } else {
        toast.error("Registration Failed");
        console.log(err.response?.data);
      }
    },
  });

  // HANDLERS -----------------------------------
  const addParticipantsCheckHandler = (max: number, min: number) => {
    if (min === 1 && max - 1 > 0) {
      toast.success("Team Added");
      const response = confirm("Do you want to add more participants?");
      if (response === true) return true;
      setSubmit(true);
      return false;
    }
    return max - 1;
  };

  const handleTeamSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("eventId", eventId);

    // for free events, add id card image as payment placeholder
    if (eventFee === 0) {
      const idCard = formData.get("idcard") as File;
      formData.append("payment", idCard);
    }
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    // submit team
    onTeamSubmit(data);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center bg-black mb-4 mt-20">
        {!submit ? (
          <div className="p-3 w-3/4 sm:w-2/3 mb-4 bg-black border border-dashed border-[#FFBA25] flex justify-start flex-col gap-3">
            {!teamId && (
              <RegisterTeamForm
                eventFee={eventFee}
                submitTeam={handleTeamSubmit}
                isPending={isTeamSubmitPending}
              />
            )}
            {isTeamSuccess && addParticipantsCheckHandler(maxTeam, minTeam) && (
              <AddParticipants minTeam={minTeam - 1} maxTeam={maxTeam - 1} />
            )}
            {isTeamSuccess && maxTeam - 1 === 0 && <h2>Team Registered</h2>}
          </div>
        ) : (
          // If team is submitted and no more participants to add
          <RedirectUser />
        )}
      </div>
    </>
  );
};
export default RegisterForm;
