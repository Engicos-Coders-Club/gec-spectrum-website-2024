import React from 'react';
import myGif from './Animation - 1710655659461.gif'; // Replace with the actual path
import Image from 'next/image'; // Assuming you're using Next.js (optional for React)

const Animation = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image src={myGif} alt="Centered Animation GIF" />
    </div>
  );
};

export default Animation;
