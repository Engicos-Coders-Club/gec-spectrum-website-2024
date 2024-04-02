import eventImg from "@/assets/pronite.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import talkImg from "@/assets/talks.jpg";
import scheduleImg from "@/assets/schedule.jpg";

const EventCard = ({
  title,
  imgSrc,
  route,
}: {
  title: string;
  imgSrc: StaticImageData;
  route: string;
}) => {
  return (
    <Link
      href={route}
      className="border border-gray-700 p-3 relative hover:shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-violet-900 basis-4/5 sm:basis-1/2 lg:basis-1/3 hover:scale-95 transition delay-75"
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-violet-600 to-transparent" />
      <p className="uppercase font-medium text-center pb-2 text-2xl">{title}</p>
      <div className="h-44 sm:h-80 w-full relative">
        <Image
          src={imgSrc}
          fill
          alt="Image depicting a dj night scene. This card leads to the Event's page"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-violet-600 to-transparent" />
    </Link>
  );
};

const eventsData = [
  {
    title: "Events",
    imgSrc: eventImg,
    route: "/event",
  },
  {
    title: "Talks",
    imgSrc: talkImg,
    route: "/talks",
  },
  {
    title: "Schedule",
    imgSrc: scheduleImg,
    route: "/schedule",
  },
];

const EventsSection = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-4 md:gap-10 max-w-screen-xl mx-auto px-4 md:px-16">
      {eventsData.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          imgSrc={event.imgSrc}
          route={event.route}
        />
      ))}
    </div>
  );
};
export default EventsSection;
