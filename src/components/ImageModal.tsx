import Image from "next/image";

const ImageModal = ({
  source,
  closeHandler,
}: {
  source: string;
  closeHandler: () => void;
}) => {
  return (
    <>
      <div className="fixed backdrop-blur-sm bg-white/10  inset-0 flex flex-col items-center justify-center z-[99000] p-4 overflow-hidden">
        <div className="bg-[#06050A]  rounded-xl shadow-lg w-3/4 md:w-1/2  h-full p-2 overflow-y-auto">
          <div className="flex justify-end">
            <button role="close">
              <svg
                onClick={closeHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-white p-6 h-full object-contain relative">
            <Image
              src={source}
              alt="Payment screenshot"
              fill
              sizes="100%"
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageModal;
