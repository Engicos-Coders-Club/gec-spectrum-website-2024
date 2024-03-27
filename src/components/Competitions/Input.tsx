import { InputHTMLAttributes } from "react";
import toast from "react-hot-toast";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  helper,
  ...inputProps
}) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    // Check if image size exceeds limit (in bytes)
    const maxSize: number = 2 * 1024 * 1024; // 5MB (example limit)
    if (selectedImage && selectedImage.size <= maxSize) {
      console.log("Image size is within limit");
    } else {
      if (selectedImage) toast.error("Image size exceeds limit (2MB)");
      event.target.value = ""; // Clear the input field
    }
  };

  return (
    <div className="flex flex-col pt-10 text-[#FFBA25]">
      <p className="text-white text-sm">
        {label} {inputProps.required && <span className="text-red-500">*</span>}
      </p>

      <input
        type="text"
        className="my-2 p-2 border-b border-[#FFBA25] bg-black w-full outline-none focus:bg-gray-800"
        {...inputProps}
        onChange={inputProps.type === "file" ? handleImageChange : undefined}
      />
      <p className="helper_text text-sm text-gray-500">{helper}</p>
    </div>
  );
};

export default CustomInput;
