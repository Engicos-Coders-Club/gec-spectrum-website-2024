import Link from "next/link";
import PropTypes from "prop-types";

interface EventsButtonProps {
  title: string;
  department: string;
}

const EventsButton: React.FC<EventsButtonProps> = ({ title, department }) => {
  return (
    <Link href='/' className="p-3 hover:outline-dotted transition-all transition-duration-500 rounded-[30px] rounded-tl-none">
        <p className='text-white text-center'>{title}</p>
        <p className='text-yellow-500 text-center'>{department}</p>
    </Link>
  );
};

export default EventsButton;
