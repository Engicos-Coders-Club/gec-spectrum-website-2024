import Image from "next/image";
import { useState } from "react";

const PaymentPreview = () => {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("Selected file:", file);
    // You can perform further actions here, such as uploading the file or processing it.
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagePreviewUrl = reader.result as string;
        // Set the image preview URL in state or pass it to another component for display
        console.log("Image preview URL:", imagePreviewUrl);
        setPreviewImg(imagePreviewUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex flex-col items-center sm:items-start sm:flex-row space-x-4 mt-3">
      <div className="grow basis-2/5 h-full">
        <p className="text-sm text-center font-bold mb-2">
          <span className="text-tangerine">
            {" "}
            &quot;Team Name Team Event&quot;{" "}
          </span>{" "}
          should be mentioned during payment as &quot;note&quot;.
        </p>
        <div className="w-69 h-[500px] object-fit relative mx-auto">
          <Image
            src="/Payment QR.jpg"
            fill
            alt="payment-code"
            className="mb-4 object-contain"
          />
        </div>
      </div>
      <div className="mx-auto w-3/4 h-full sm:w-3/5 relative rounded-2xl bg-[#FFBA25] border border-dashed border-[#FFBA25] bg-opacity-10 flex flex-col justify-center items-center text-center py-6 px-4 md:py-1 mb-4 gap-2">
        <input
          type="file"
          accept="image/*"
          required={true}
          onChange={(e) => handleFileUpload(e)}
          name={`paymentSS`}
          className="bg-gray-700 w-3/4"
        />
        <p className="text-mango font-bold">Upload Screenshot of Payment</p>
        {previewImg && (
          <div className="mt-6 w-44 h-44 relative object-contain overflow-hidden">
            {" "}
            <Image src={previewImg} fill alt="payment screenshot" />
          </div>
        )}
      </div>
    </div>
  );
};
export default PaymentPreview;
