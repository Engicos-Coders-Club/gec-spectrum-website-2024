interface TileProps {
    text: string,
    subStr: string,
}

const Tile: React.FC<TileProps> = ({ text, subStr }) => {
    return (
        <button className='text-left pt-5  pb-8 pl-5 bg-[#FFBA25] uppercase  w-full md:w-1/2 lg:w-1/3 rounded-b-lg rounded-r-3xl rounded-bl-3xl font-semibold'>
            <p className='text-md text-red-500 mt-3'>{subStr}</p>
            <p className=' text-lg md:text-3xl lg:text-5xl text-black font-bold tracking-widest'>{text}</p>
        </button>
    )
}

export default Tile