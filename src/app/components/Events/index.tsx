"use client";

import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import LineImage from '../assets/line.png';
import Link from 'next/link';
import SampleEvent from '../assets/sample-event.jpg'
import EventsButton from './Button';
const Space = Space_Grotesk({ subsets : ['latin'], weight: ['700', '600']});

const eventsData = [
  { title: 'Technical', department: 'Computer', event: 'Technix' },
  { title: 'IT', department: 'IT', event: 'Techfluence' },
  { title: 'Mechanical', department: 'Mechanical', event: 'Torque' },
  { title: 'ETC', department: 'ETC', event: 'Resonance' },
  { title: 'ENE', department: 'ENE', event: 'Sparks' },
  { title: 'Civil', department: 'Civil', event: 'Pratikriya' },
];

const EventCardItem = () => (
  <div className='bg-orange-600 rounded-xl rounded-tl-none overflow-hidden p-2'>
    <Image src={SampleEvent} alt='random' className='rounded-xl rounded-tl-none' />
    <div className='p-2 text-white'>
      <p className='text-sm'> Type of event </p>
      <h2 className='text-xl font-bold text-black'>Event Name</h2>
      <p className='text-sm'>Department Offering</p>
    </div>
  </div>
);

const EventCard = () => {
  const events = new Array(9).fill(0); // replace with actual data

  return (
    <div className='bg-black w-screen h-full overflow-hidden'>
      <div className='flex   justify-between'> 
        <h1 className={`font-bold ml-5 text-3xl md:text-5xl sm:text-4xl lg:text-6xl h-[96px] flex items-center font-panchang-bold`}>E V E N T S</h1>
        <Image
          src={LineImage}
          alt='line image'
          className='h-[1px] w-1/3 sm:w-1/2 my-auto'
        />
      </div>
      
      <div className='w-full flex justify-center mt-10 p-3 overflow-hidden'>
      <div className={`grid grid-rows-2 p-5 grid-cols-3 sticky top-0 gap-10  ${Space.className} lg:grid-cols-7 lg:gap-4`}>  
      <Link href='/' className='bg-yellow-500 p-3 rounded-full rounded-tl-none overflow-hidden w-32'>
        <p className='text-black text-sm sm:text-base'>ALL</p> 
        <p className='text-purple-700 text-sm sm:text-base'>Departments</p>
      </Link>
           {
            eventsData.map((events, index) =>(
              <div key={index}>
              <EventsButton title={events.event} department={events.department} />
              
            </div>


            ) ) }
        </div>
      </div>
    
      <div className={`mt-8 ${Space.className} container mx-auto mb-20`}>
        <div className='grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
          {events.map(( index) => (
            <EventCardItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;