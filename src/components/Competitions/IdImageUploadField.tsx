import toast from "react-hot-toast";

const IdImageUploadField = ({ index }: { index: number }) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    // Check if image size exceeds limit (in bytes)
    const maxSize: number = 2 * 1024 * 1024; // 5MB (example limit)
    if (selectedImage && selectedImage.size <= maxSize) {
      console.log("Image size is within limit");
    } else {
      toast.error("Image size exceeds limit (2MB)");
      event.target.value = ""; // Clear the input field
    }
  };

  return (
    <>
      <p className="text-white text-sm mt-5">ID Card Photo/ID Proof</p>
      <input
        type="file"
        required={true}
        accept="image/*"
        name={`member.${index}.idcard`}
        className="mt-3 p-2 border-b border-[#FFBA25] bg-black w-full outline-none"
        onChange={(e) => handleImageChange(e)}
      />
    </>
  );
};

export default IdImageUploadField;
