"use client";
import Image from 'next/image'
import React from 'react'

export default function ServiceCart({ item }) {
    if (!item) return null; 

    return (
<div className='rounded-lg bg-[#E8E8E9] hover:bg-black h-40 hover:text-white text-[#595959] md:h-28 lg:h-44 w-full overflow-hidden'>
  <div className='w-full h-[85%] flex justify-center items-center overflow-hidden'>
    {item.image && (
      <Image
        src={item.image}
        alt={item.title}
        className='w-full h-full object-cover'
      />
    )}
  </div>
  <div className="h-[15%] flex justify-center items-center"> 
    <h6 className='text-center hover:text-white text-sm md:text-xs lg:text-sm font-poppins font-semibold'>
      {item.title}
    </h6>
  </div>
</div>


    )
}
