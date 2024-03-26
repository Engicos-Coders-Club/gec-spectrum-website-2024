import { BiInfoCircle } from "react-icons/bi";
import CustomInput from "../Competitions/Input";
import PaymentPreview from "../Competitions/PaymentPreview";

const RegisterTeamForm = ({
  eventFee,
  submitTeam,
  isPending,
}: {
  eventFee: number;
  submitTeam: (event: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
}) => {
  return (
    <>
      <form className="w-full flex flex-col" onSubmit={submitTeam}>
        <div className="p-3 mt-3 border flex space-x-2 items-start text-center">
          <BiInfoCircle className="text-2xl text-tangerine hidden sm:block" />
          <p className="text-sm font-light flex">
            Please fill all members details at once. Members cannot be added
            individually later.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center mt-3 space-y-3 text-[#FFBA25]">
          <CustomInput label="Team Name" required={true} name="teamName" />
          <CustomInput
            label="Team Leader Email"
            required={true}
            placeholder="example@email.com"
            type="email"
            name="leader"
          />
          <CustomInput
            label="Team Leader Name"
            required={true}
            type="text"
            name="leaderName"
          />
          <CustomInput
            label="Team Leader Contact"
            required={true}
            type="tel"
            name="leaderContact"
          />
          <CustomInput
            label="Team Leader College"
            placeholder="College Full Name (Location)"
            type="text"
            name="leaderCollege"
          />
          <CustomInput
            label="ID Card"
            required={true}
            type="file"
            accept="image/*"
            name="idcard"
          />
          {eventFee > 0 && <PaymentPreview />}
        </div>

        <button
          className="mx-auto bg-[#FFBA25] text-black text-lg my-7 w-[269px] px-3 py-2 rounded-full rounded-tl-none hover:bg-yellow-600 uppercase font-bold disabled:bg-gray-500"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Registering..." : "Submit Team"}
        </button>
      </form>
    </>
  );
};
export default RegisterTeamForm;
