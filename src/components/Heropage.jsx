"use client";
import Image from 'next/image'
import React from 'react'
import { Images } from '../../public/assets/images/Images'

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
      <div className="bg-gradient-to-br from-[#FDFCFB] to-[#F3EFE7] w-full pt-5 pb-14">
        <div className="container mx-auto px-4">
          <h2 className='text-center font-playfair font-bold text-[#040404] text-xl md:text-4xl my-6'>
            Velin was created to value every moment you give yourself.
          </h2>
          
          {/* Custom list with black circles */}
          <div className="w-full  mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 mt-1.5 mr-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className='font-playfair text-[#040404] text-xs md:text-base lg:text-lg'>
                  For clients - it means finally feeling how they want to be seen: confident, cared for, valued.
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mt-1.5 mr-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className='font-playfair text-[#040404] text-xs md:text-base lg:text-lg'>
                  For professionals - it means being recognized, sought after and appreciated.
                </p>
              </div>
            </div>
          </div>
          
          <h4 className='text-center font-playfair font-bold text-[#040404] text-lg md:text-2xl mt-10'>
            “On Velin, everyone finds their own space”
          </h4>
        </div>
      </div>
    </div>
  )
}