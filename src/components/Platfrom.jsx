"use client";
import React from 'react'
import ImageShow from './Showing/ImageShow';

export default function Platfrom() {
  return (
    <div className='bg-gradient-to-br from-[#F3EFE7] to-[#FDFCFA] py-8'>
        <div className=' container mx-auto pb-3'>
            <h2 className='text-center font-playfair font-bold text-2xl py-3 text-[#222122]'>The platform you were looking for!</h2>
            <p className='text-[#222122] font-manrope font-medium text-center  md:w-3/6 md:mx-auto mb-3 text-base'>Finally, a place where independent professionals meet clients eager for their services — simple, fast, and transparent.</p>
            <ImageShow/>

        </div>

    </div>
  )
}
