"use client";
import Image from 'next/image'
import React from 'react'

export default function ServiceCart({ item }) {
    if (!item) return null; 

    return (
        <div className='rounded-lg bg-[#E8E8E9] h-40 md:h-28 lg:h-44 w-full overflow-hidden'>
            <div className='w-full h-3/4 flex justify-center items-center'>
                {item.image && (
                    <Image     src={item.image}     alt={item.title}    className=' w-full h-full' />
                )}
            </div>
            <h6 className='text-center text-[#595959] text-sm md:text-xs lg:text-sm font-poppins font-semibold pt-2 mt-1'>
                {item.title}
            </h6>
        </div>
    )
}
