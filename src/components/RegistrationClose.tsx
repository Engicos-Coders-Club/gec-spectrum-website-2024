"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const RegistrationClose = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="p-4 bg-mango/30 w-full flex justify-between">
          <div className="flex gap-2 justify-center grow">
            <FaCircleInfo className="basis-7 size-5 text-tangerine mt-1" />{" "}
            <p className="font-medium basis-5/6 sm:basis-auto">
              Online Registrations are closed for Competitions. On-spot
              registrations will be available on event day. Check{" "}
              <Link href="/schedule" className="underline">
                Schedule
              </Link>
              .
            </p>
          </div>
          <button
            onClick={() => setClose(true)}
            className="basis-10"
            aria-label="Close notification"
            title="Close Notification"
          >
            <MdClose />
          </button>
        </div>
      )}
    </>
  );
};
export default RegistrationClose;
