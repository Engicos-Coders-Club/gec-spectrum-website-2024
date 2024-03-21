import localFont from "next/font/local";
import AdminLogin from "../components/Authentication/AdminLogin";
import CoordinatorLogin from "../components/Authentication/CoordinatorLogin";
const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const Admin = () => {
  return (
    <div className="mx-5 my-10 flex items-center justify-start flex-col text-center">
      {/* Heading */}
      <div className="mb-10">
        <h1
          className={`${panchang.className} text-mango text-lg md:text-3xl font-bold mb-2`}
        >
          Admin Section
        </h1>
        <p className="text-sm">*Tread carefully. Donot share credentials*</p>
      </div>

      {/* Options for users */}
      <h2 className="text-lg font-medium">Which side are you on?</h2>
      <div className="flex flex-wrap justify-center gap-5 md:w-3/5 mx-auto my-5">
        <AdminLogin />
        <CoordinatorLogin />
      </div>
    </div>
  );
};
export default Admin;
