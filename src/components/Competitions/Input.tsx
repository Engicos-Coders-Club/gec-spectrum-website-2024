import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  helper,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col pt-10 text-[#FFBA25]">
      <p className="text-white text-sm">{label}</p>
      <input
        type="text"
        className="my-2 p-2 border-b border-[#FFBA25] bg-black w-full outline-none focus:bg-gray-800"
        {...inputProps}
      />
      <p className="helper_text text-sm text-gray-500">{helper}</p>
    </div>
  );
};

export default CustomInput;
