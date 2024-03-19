// "use client";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import { IoChevronBack } from "react-icons/io5";
// import { FaWhatsapp } from "react-icons/fa6";
// import { Space_Grotesk } from "next/font/google";
// import { EVENT } from "@/utils/data.example";
// import localFont from "next/font/local";
// import { usePathname, useRouter } from "next/navigation";
// import Checker from "@/assets/checker.png";
// import Image from "next/image";
// import { RiLink } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa";
// import Register from "@/components/Competitions/Register";
// import axios from "axios";
// import {
//   AwaitedReactNode,
//   JSXElementConstructor,
//   Key,
//   ReactElement,
//   ReactNode,
//   ReactPortal,
//   useEffect,
//   useState,
// } from "react";
// import { UrlObject } from "url";

// const space = Space_Grotesk({
//   weight: ["700", "500", "400"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const panchang = localFont({
//   src: "../../../../public/Panchang-Variable.ttf",
//   display: "swap",
// });

// const EventPage = ({ params }: { params: { id: string } }) => {
//   const [events, setEvents] = useState<any>({});
//   useEffect(() => {
//     (async () => {
//       const response = await axios.get(
//         `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/${params.id}`
//       );
//       const data = await response.data;
//       setEvents(data);
//     })();
//   }, [params.id]);

//   const formatDate = (dateString: string) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return "";

//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");

//     // Reversing the date format
//     return `${day}-${month}-${year}`;
//   };
//   const renderCoordinators = () => {
//     return (
//       events as {
//         event: {
//           contact: {
//             coordinators: {
//               contact: string | UrlObject;
//               name: string | null | undefined;
//             }[];
//           };
//         };
//       }
//     )?.event?.contact?.coordinators.map(
//       (
//         coordinator: {
//           contact: string | UrlObject;
//           name: string | null | undefined;
//         },
//         index: Key | null | undefined
//       ) => (
//         <Link key={index} href={`https://wa.me/91${coordinator.contact}`}>
//           <h2 className="font-semibold sm:leading-6 leading-3 sm:text-xl text-xl mt-2 flex items-center sm:gap-2 gap-1 w-full">
//             {coordinator.name}
//             <span className="text-[#741CFF]">
//               <FaWhatsapp className="font-semibold text-xl" />
//             </span>
//           </h2>
//         </Link>
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen w-screen overflow-hidden">
//       <div className="w-screen">
//         <div className="w-full">
//           <div className="w-screen md:pl-14 grid grid-cols-1 md:grid-cols-3">
//             <div className="flex col-span-2 h-full py-10 px-10 md:px-0 flex-col gap-10">
//               <div className="flex gap-2 w-20">
//                 <Link href="/" className="flex gap-2">
//                   <IoChevronBack className=" size-5" />
//                   <p
//                     className={`hover:underline mb-2 ${space.className} font-normal text-base leading-5`}
//                   >
//                     Back
//                   </p>
//                 </Link>
//               </div>
//               <div className="w-3/4 flex-1 h-full flex flex-col gap-5">
//                 <h1
//                   className={`${panchang.className} font-semibold text-2xl text-[#FA5622]`}
//                 >
//                   COMPETITION
//                 </h1>
//                 <h1
//                   className={`${panchang.className} font-semibold break-words text-6xl leading-[4rem]`}
//                 >
//                   {events && events?.event?.eventName}
//                 </h1>
//                 <div className="flex flex-wrap items-center gap-3">
//                   <button
//                     onClick={() => {
//                       if (navigator.share) {
//                         navigator
//                           .share({
//                             title: document.title,
//                             text: `${
//                               events && events?.event?.eventName
//                             } | GEC Spectrum 2024`,
//                             url: window.location.href,
//                           })
//                           .then(() => console.log("Successful share"))
//                           .catch((error) =>
//                             console.log("Error sharing:", error)
//                           );
//                       }
//                     }}
//                     className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full"
//                   >
//                     <RiLink />
//                     SHARE EVENT
//                   </button>
//                   <Link
//                     href={"https://www.instagram.com/gecspectrum/"}
//                     className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full"
//                   >
//                     <FaInstagram />
//                     FOLLOW US
//                   </Link>
//                 </div>
//                 <div className="mt-5">
//                   <p className="font-bold mb-2 text-lg text-mango">
//                     WHAT&apos;S IT?
//                   </p>
//                   <p>{events && events?.event?.introduction}</p>
//                   <div className="flex gap-5 items-center mt-10">
//                     <button className=" border border-primary rounded-full rounded-tl-none p-1.5 px-5 hover:bg-primary">
//                       RULEBOOK
//                     </button>
//                     <button className=" border border-primary rounded-full rounded-tl-none p-1.5 px-5 bg-primary">
//                       REGISTER
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="h-full col-span-1 border-l border-b border-[#FFBA25]">
//               <Image
//                 src={Checker.src}
//                 height={Checker.height}
//                 width={Checker.width}
//                 alt=""
//                 className="hidden md:block"
//               />
//               <div className=" border-t border-[#FFBA25] flex md:flex-col items-center justify-between md:justify-center py-5">
//                 <p className="text-xl md:text-2xl tracking-widest font-semibold mb-2 rotate-[270deg] md:rotate-[0deg]">
//                   PRIZES
//                 </p>
//                 <div className="mr-10 md:mr-0">
//                   <p className="text-2xl md:text-4xl font-medium">
//                     1st ~{" "}
//                     <span className="font-semibold text-tangerine">
//                       ₹ {events && events?.event?.prices.firstPlace}
//                     </span>
//                   </p>
//                   <p className="text-2xl md:text-3xl font-medium mt-1">
//                     2nd ~{" "}
//                     <span className="font-semibold text-tangerine">
//                       ₹ {events && events?.event?.prices.secondPlace}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-screen grid grid-cols-1 md:grid-cols-3 items-center justify-evenly border-y border-[#FFBA25]">
//             <div className=" py-5 h-auto flex justify-between items-center">
//               <div
//                 className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
//               >
//                 FEE
//               </div>
//               <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
//                 <h2 className=" font-bold leading-10 text-3xl">
//                   ₹ {events && events?.event?.fee}
//                 </h2>
//               </div>
//             </div>
//             <div className=" py-5  border-t md:border-l border-b md:border-r border-[#FFBA25]">
//               <div className="mx-8 flex justify-between items-center">
//                 <div className="flex flex-row">
//                   <div
//                     className={`w-10 h-20 rotate-[270deg] flex justify-center ${space.className} font-bold`}
//                   >
//                     TEAM
//                   </div>
//                   <div
//                     className={`w-2 h-20 rotate-[270deg] flex justify-center ${space.className} font-bold`}
//                   >
//                     SIZE
//                   </div>
//                 </div>
//                 <div
//                   className={`md:mr-7 ${space.className} text-[#FFBA25] text-3xl font-bold`}
//                 >
//                   {events && events?.event?.teamSize.min}-
//                   {events && events?.event?.teamSize.max}
//                   {events && events?.event?.teamSize.max > 1 && "(TEAM)"}
//                 </div>
//               </div>
//             </div>
//             <div className=" py-5 md:flex-1 h-auto flex justify-between items-center">
//               <div
//                 className={`h-full w-10 rotate-[270deg] ${space.className} font-bold`}
//               >
//                 DATE
//               </div>
//               <div className={`mr-7 ${space.className} text-[#FFBA25]`}>
//                 <h2 className=" font-bold leading-10 text-3xl">
//                   {new Date(events && events?.event?.date).getDay()}/
//                   {new Date(events && events?.event?.date).getMonth()}/
//                   {new Date(events && events?.event?.date).getFullYear()}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="p-10 md:p-20">
//           <div className="border border-primary py-10 px-7 flex justify-between items-center">
//             <div
//               className={`h-full tracking-widest text-sm md:text-base  w-10 rotate-[270deg] ${space.className} font-bold flex justify-center items-center`}
//             >
//               CONTACT
//             </div>
//             <div
//               className={`${space.className} text-[#FFBA25] w-60 h-full flex flex-col items-end justify-center`}
//             >
//               {renderCoordinators()}
//             </div>
//           </div>
//           <div className="flex flex-col gap-5 uppercase">
//             <p className="text-mango font-semibold text-3xl mt-10">DETAILS</p>
//             <p className="text-mango font-semibold text-xl">
//               DURATION:{" "}
//               <span className="text-white">
//                 {events && events.event?.duration}
//               </span>
//             </p>
//             <p className="text-mango font-semibold text-xl">
//               max participation limit:{" "}
//               <span className="text-white">
//                 {events && events.event?.participationLimit}
//               </span>
//             </p>
//             <p className="font-semibold text-xl">Rules and Regulations</p>
//             <ul className=" list-disc ml-5">
//               {events &&
//                 events.event?.rulesAndRegulations.map(
//                   (rule: any, i: number) => (
//                     <li key={i} className="mb-8">
//                       <p className="text-lg font-semibold">{rule.topic}</p>
//                       <ol className=" list-decimal">
//                         {rule.points.map((point: string, k: number) => (
//                           <li key={k} className="ml-5 mb-2">
//                             {point}
//                           </li>
//                         ))}
//                       </ol>
//                     </li>
//                   )
//                 )}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Register />
//       </div>
//     </div>
//   );
// };

// export default EventPage;
