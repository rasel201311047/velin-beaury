"use client";
import React from 'react'

export default function WorkCart({ item }) {


    return (
        <>
            <div className='text-center font-playfair text-base sm:text-lg md:text-xl font-semibold mb-4'>{item.headertext}</div>
            <ul>
                {
                    item.item.map((item, index) => (

                        <li key={index} className=' list-disc leading-3 sm:leading-4 md:leading-6 lg:leading-8 mb-2'>
                            <span className='font-semibold font-playfair text-xs sm:text-sm md:text-base'>{item.title} : </span>
                            <span className='font-playfair text-xs sm:text-sm md:text-base'>{item.description}</span>
                        </li>

                    ))
                }
            </ul>
        </>
    )
}
