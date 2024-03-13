"use client";

import Image from "next/image"
import trophyImage from '../../../public/trophyImage.jpeg';
import { Space_Grotesk } from "next/font/google";

const Space = Space_Grotesk({ subsets : ['latin'], weight: ['700', '600']});

export default function CardItem(){
    return (
        <div className='bg-[#FA5622] rounded-xl rounded-tl-none overflow-hidden p-2'>
            <Image src={trophyImage} alt='random' className='rounded-xl rounded-tl-none' />
            <div className='p-2 text-white'>
            <p className='text-sm font-light'> {"/* Type of event */"}</p>
            <h2 className={`text-xl font-bold text-black ${Space.className}`}>TECHNOTHON 2.0</h2>
            <p className='text-sm'>Department Offering</p>
            </div>
        </div>
    )
}