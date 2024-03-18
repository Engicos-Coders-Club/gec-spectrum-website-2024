import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col pt-10 space-y-3 text-[#FFBA25]">
      <p className="text-white text-sm">{label}</p>
      <input
        type="text"
        className="p-2 border-b border-[#FFBA25] bg-black w-full outline-none focus:outline"
        {...inputProps}
      />
    </div>
  );
};

export default CustomInput;
