// ExploreTile.tsx
import Tile from './tile/Tile';
import localFont from 'next/font/local'

const panchang = localFont({
  src: '../../../public/Panchang-Variable.ttf',
  display: 'swap',
})

interface ExploreTileProps {}

const ExploreTile: React.FC<ExploreTileProps> = () => {
  return (
    <div className="px-20">
      <div className='flex flex-row items-center space-y-0 space-x-9'>
        <div className='relative'>
        <h1 className={`text-lg md:text-2xl lg:text-5xl text-white ${panchang.className}`}>Explore</h1>
        <div className="absolute gradient-five-colors h-[1px] w-screen top-1/2 -z-10"></div>
        </div>
        <div className='h-[1px] w-full gradient-border'></div>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mt-10'>
        <Tile text='* FAQS' subStr='Got doubts?' />
        <Tile text='* team' subStr='meet the' />
        <Tile text='* rooms' subStr='book' />
      </div>
    </div>
  );
};

export default ExploreTile;
