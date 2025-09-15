"use client";
import Image from 'next/image'
import React from 'react'
import { Images } from '../../public/assets/images/Images';

export default function Heropage() {
  return (
    <div className="w-full bg-[#FDFCFB] ">
      <div className="w-full h-auto relative ">
        <Image
          src={Images.heroimage}
          alt='Hero Image'
          className='w-full h-auto object-cover'
          priority
        />
      </div>

      {/* Content section */}
      <div className="bg-gradient-to-br from-[#FDFCFB] to-[#F7F3EA] w-full pt-5 pb-14">
        <div className="container mx-auto px-4">
          <h2 className='text-center font-playfair font-bold text-[#040404] text-lg sm:text-xl md:text-4xl my-6'>
            Velusy was created to value every moment you give yourself.
          </h2>

          {/* Custom list with black circles */}
          <div className="w-full  mx-auto">
            <ul className="flex flex-col items-center space-y-3 mx-4">
              <li className=' list-disc  font-playfair text-[#040404] text-xs md:text-base lg:text-lg'>
                For clients - it means finally feeling how they want to be seen: confident, cared for, valued.
              </li>
              <li className=' list-disc  font-playfair text-[#040404] text-xs md:text-base lg:text-lg'>
                For professionals - it means being recognized, sought after and appreciated.
              </li>
            </ul>
          </div>

          <h4 className='text-center font-playfair font-bold text-[#040404] text-base sm:text-lg md:text-2xl mt-10'>
            “On Velusy, everyone finds their own space”
          </h4>
        </div>
      </div>
    </div>
  )
}