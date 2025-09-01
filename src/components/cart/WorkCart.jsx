"use client";
import React from 'react'

export default function WorkCart({ item }) {
    console.log(item.item)

    return (
        <>
            <div className='text-center font-playfair text-xl font-semibold mb-4'>{item.headertext}</div>
            <ul>
                {
                    item.item.map((item, index) => (

                        <li key={index} className=' list-disc leading-8 mb-2'>
                            <span className='font-semibold font-playfair text-base'>{item.title} : </span>
                            <span className='font-playfair text-base'>{item.description}</span>
                        </li>

                    ))
                }
            </ul>
        </>
    )
}
