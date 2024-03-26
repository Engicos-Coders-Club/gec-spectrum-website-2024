import { useEffect, useState } from "react";
import CustomInput from "../Competitions/Input";
import toast from "react-hot-toast";
import { IoAdd } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios-config";
import { AxiosError } from "axios";

interface ResponseDataProps {
  msg: string;
}

const AddParticipants = ({
  minTeam,
  maxTeam,
}: {
  minTeam: number;
  maxTeam: number;
}) => {
  const [submit, setSubmit] = useState(false);
  const [currParticipants, setCurrParticipants] = useState<number>(1);
  const [teamId, setTeamId] = useState<string | null>(null);
  //   set min max and current remaning participants in local storage
  useEffect(() => {
    localStorage.setItem("ogMin", JSON.stringify(minTeam));
    localStorage.setItem("ogMax", JSON.stringify(maxTeam));
    localStorage.setItem("currentParticipants", JSON.stringify(1));

    // get team id
    setTeamId(JSON.parse(localStorage.getItem("teamId") || "null"));
  }, [maxTeam, minTeam]);

  //   Reload page confirmation
  useEffect(() => {
    const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      const confirmation = window.confirm(
        "Are you sure you want to reload the page? Data will be lost"
      );

      // If the user confirms, allow the reload by returning undefined
      if (confirmation) return undefined;

      // Otherwise, prevent the reload by setting a return value
      event.preventDefault();
      event.returnValue = "";
    };

    // Add the beforeunload event listener when the component mounts
    window.addEventListener("beforeunload", beforeUnloadHandler);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, []);

  // Add  participants
  const {
    mutate: onDetailsSubmit,
    isPending,
    isSuccess,
    data,
    reset,
  } = useMutation({
    mutationFn: async (values: { data: FormData; type: string }) => {
      const { data } = await axiosInstance.post(
        `events/add-participant/${teamId}`,
        values.data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return data;
    },
    onSuccess: (data, variables) => {
      if (variables.type === "submit") {
        toast.success("Registration Successful");
        setSubmit(true);
        localStorage.clear();
      } else if (variables.type === "add") {
        toast.success("Member Added Successfully");
        setCurrParticipants((prev) => prev + 1);
        (document.getElementById("participantForm") as HTMLFormElement).reset();
      }
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

  // Handle form submission
  const handleAddMember = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    e.preventDefault(); // Prevent default form submission
    if (!teamId) {
      toast.error("Team ID not found! Create a team");
      return false;
    }

    // Form validation
    const name = (document.getElementById("memberName") as HTMLInputElement)
      .value;
    const email = (document.getElementById("memberEmail") as HTMLInputElement)
      .value;
    const contact = (
      document.getElementById("memberContact") as HTMLInputElement
    ).value;
    const file = (document.getElementById("memberIdCard") as HTMLInputElement)
      .files?.[0];

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == "" || email == "" || contact == "" || file == null) {
      toast.error("All marked fields are required");
      return false;
    } else if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    } else if (contact.length !== 10) {
      toast.error("Contact number must be 10 digits long");
      return false;
    }

    // Manually submit the form
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("file", file);
    formData.append(
      "college",
      (document.getElementById("memberCollege") as HTMLInputElement).value
    );
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
    onDetailsSubmit({ data: formData, type: type });
  };

  console.log("Current Participants: ", currParticipants);
  return (
    <>
      {!submit ? (
        <form id="participantForm">
          <div className="w-full flex flex-col space-y-3">
            <p className="text-mango text-bold underline underline-offset-4 decoration-wavy decoration-primary font-medium uppercase">
              Member - {currParticipants + 1}
            </p>
            <div className="mt-3">
              <CustomInput
                label="Full Name"
                type="text"
                required={true}
                name={`name`}
                id="memberName"
              />
              <CustomInput
                label="Email ID"
                placeholder="example@email.com"
                type="email"
                name={`email`}
                id="memberEmail"
                required={true}
              />
              <CustomInput
                label="College Name"
                type="text"
                name={`college`}
                id="memberCollege"
                placeholder="College Full Name (Location)"
                helper="Compulsory for school/college students."
              />
              <CustomInput
                label="Phone Number"
                placeholder="+91"
                type="tel"
                name={`contact`}
                id="memberContact"
                required={true}
                helper="For all future communications. Preferably Whatsapp."
              />
              <CustomInput
                label="ID Card"
                type="file"
                required={true}
                accept="image/*"
                name="idcard"
                id="memberIdCard"
              />
            </div>
          </div>

          <p className="text-center text-red-600 mt-5">
            {currParticipants >= maxTeam ? "Max team size reached." : ""}
          </p>

          {/* ------- to add team member ------- */}
          <button
            type="submit"
            onClick={(e) => handleAddMember(e, "add")}
            className="text-[#FFBA25] bg-yellow-700 rounded-full rounded-tl-none px-3 py-2 mt-6 mb-10 mx-auto flex gap-2 text-sm font-bold hover:bg-yellow-900 disabled:bg-gray-700 disabled:text-gray-500"
            disabled={currParticipants >= maxTeam || isPending}
          >
            <IoAdd className="text-xl" />{" "}
            {isPending ? "Adding..." : "ADD MEMBER"}
          </button>
          {/* ------- to submit final team ------- */}
          <button
            onClick={(e) => handleAddMember(e, "submit")}
            className="text-while bg-tangerine/90 rounded-full rounded-tl-none px-3 py-2 mt-6 mb-10 mx-auto flex gap-2 text-sm font-bold hover:bg-red-900 disabled:bg-gray-700 disabled:text-gray-500 uppercase"
            type="submit"
            disabled={currParticipants < minTeam || isPending}
          >
            submit team
          </button>
        </form>
      ) : (
        <p>Team Submitted</p>
      )}
    </>
  );
};
export default AddParticipants;
