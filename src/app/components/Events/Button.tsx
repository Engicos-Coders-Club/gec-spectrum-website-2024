import Link from "next/link";
interface EventsButtonProps {
  title: string;
  department: string;
}

const EventsButton: React.FC<EventsButtonProps> = ({ title, department }) => {
  return (
    <Link
      href="/"
      key={title}
      className="hover:bg-dotted-border bg-[#06050a] relative flex justify-center rounded-full rounded-tl-none overflow-hidden"
    >
      <div className="bg-[#06050a] m-[1px] p-2 px-5 outline-dotted rounded-full rounded-tl-none outline-2 outline-black w-full h-full">
        <p className="text-white text-center">{title}</p>
        <p className="text-amber-600 text-center">{department}</p>
      </div>
    </Link>
  );
};

export default EventsButton;
