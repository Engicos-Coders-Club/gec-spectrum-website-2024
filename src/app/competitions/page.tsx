import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import EventsButton from "../components/Events/Button";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import CardItem from "@/components/Competitions-Card/CardItem";
import Coming from "../ComingSoon/page";
import PageHead from "../components/PageHead";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const eventsData = [
  { title: "Technical", department: "Computer", event: "Technix" },
  { title: "IT", department: "IT", event: "Techfluence" },
  { title: "Mechanical", department: "Mechanical", event: "Torque" },
  { title: "ETC", department: "ETC", event: "Resonance" },
  { title: "ENE", department: "ENE", event: "Sparks" },
  { title: "Civil", department: "Civil", event: "Pratikriya" },
];

export default function Competitions() {
  const events = new Array(9).fill(0);

  return (
    <main>
      <section className="border border-gray-300 border-l-0 border-r-0">
        {/* <Navbar /> */}
      </section>
      <PageHead body="EXPLORE" title="COMPETITIONS" faltutext="25" />

      <Coming></Coming>

      {/* <section className='w-full flex justify-center mt-10 p-3 overflow-hidden'>
            <div className={`grid grid-rows-2 p-5 grid-cols-3 sticky top-0 gap-10  ${Space.className} lg:grid-cols-7 lg:gap-4`}>  
                <Link href='/' className='bg-[#FFBA25] p-3 rounded-full rounded-tl-none overflow-hidden w-32'>
                    <p className='text-black text-sm sm:text-base'>ALL</p> 
                    <p className='text-primary text-sm sm:text-base'>Departments</p>
                </Link>
                {
                    eventsData.map((events, index) =>(
                    <div key={index}>
                        <EventsButton title={events.event} department={events.department} />
                    </div>

                ))
                }
                </div>
      </section>

                <section className={`mt-8 ${Space.className} container mx-auto mb-20`}>
                    <div className='grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {events.map(( index) => (
                            <CardItem key={index} />
                        ))}
                    </div>
                </section>
            */}
    </main>
  );
}
