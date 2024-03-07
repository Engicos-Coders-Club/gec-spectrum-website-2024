import Link from 'next/link';
import PropTypes from 'prop-types';

interface EventsButtonProps {
  title: string;
  department: string;
}

const EventsButton: React.FC<EventsButtonProps> = ({ title, department }) => {
  return (
    <Link href='/' className="p-3 hover:outline-dotted transition-all transition-duration-300 ease-in-out rounded-[30px] rounded-tl-none block">
        <p className='text-white text-center'>{title}</p>
        <p className='text-yellow-500 text-center'>{department}</p>
    </Link>
  );
};

EventsButton.propTypes = {
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

export default EventsButton;
