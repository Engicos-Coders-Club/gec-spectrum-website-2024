// ExploreTile.tsx
import Tile from './tile/Tile';

interface ExploreTileProps {}

const ExploreTile: React.FC<ExploreTileProps> = () => {
  return (
    <div className="px-20">
      <div className='flex flex-row items-center space-y-0 space-x-9'>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-white panchang-font'>Explore</h1>
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
