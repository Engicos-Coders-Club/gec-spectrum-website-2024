import { FC } from 'react'

interface TileProps {
    text: string,
    subStr: string,
}

const Tile: FC<TileProps> = ({ text, subStr }) => {
    return (
        <button className='text-left pt-5  pb-5 pl-5 bg-[#FFBA25] uppercase  w-full md:w-1/2 lg:w-1/3 rounded-b-lg rounded-r-3xl rounded-bl-3xl font-semibold'>
            <p className='text-xs text-red-500'>{subStr}</p>
            <p className=' text-lg md:text-3xl lg:text-4xl font-bold tracking-widest'>{text}</p>
        </button>
    )
}

export default Tile