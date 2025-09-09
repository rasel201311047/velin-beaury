"use client";
import Image from 'next/image'
import React from 'react'

export default function ServiceCart({ item }) {
  if (!item) return null;

  return (
    <div className='rounded-lg overflow-hidden bg-[#E8E8E9] hover:bg-black hover:text-white text-[#595959] h-32 sm:h-36 md:h-40 lg:h-44  '>
      <div className='w-full h-[85%] flex justify-center items-center'>
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            className='w-full h-full object-cover'
          />
        )}
      </div>
      <div className="h-[15%] flex justify-center items-center">
        <p className='text-center  hover:text-white text-xs lg:text-sm font-poppins font-semibold'>
          {item.title}
        </p>
      </div>
    </div>


  )
}
