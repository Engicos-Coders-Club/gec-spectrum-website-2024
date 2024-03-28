import Link from "next/link";

const RedirectUser = () => {
  return (
    <div className="m-4 h-[30vh] flex flex-col items-center justify-center text-center">
      <h3 className="text-md md:text-xl text-mango lg:w-2/4">
        Please keep an eye on your emails for Registration Confirmation.
        We&apos;ll soon update the details on website profiles as well.
      </h3>
      <Link
        href="/competitions"
        className="mx-auto bg-[#FFBA25] text-black text-lg my-7 px-8 py-2 text-center rounded-full rounded-tl-none hover:bg-yellow-600 uppercase font-bold disabled:bg-gray-500"
      >
        Go to Competitions
      </Link>
    </div>
  );
};
export default RedirectUser;
