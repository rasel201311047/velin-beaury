"use client";
import React from 'react'
import { Images } from '../../public/assets/images/Images'
import Image from 'next/image'
import ServiceCart from './cart/ServiceCart'


export default function OurServices() {
    const servicesData = [
        { image: Images.option1, title: 'Nails' },
        { image: Images.option2, title: 'Massage' },
        { image: Images.option3, title: 'Eyelashes' },
        { image: Images.option4, title: 'Barber' },
        { image: Images.option5, title: 'Face & Body' },
        { image: Images.option6, title: 'Make Up' },
        { image: Images.option7, title: 'Hair Style' },
    ]

    const Expert = [
        { image: Images.option8, title: 'Emma' },
        { image: Images.option9, title: 'Noah' },
        { image: Images.option10, title: 'Mia' },
        { image: Images.option11, title: 'Michael' },
        { image: Images.option12, title: 'Julie' },
        { image: Images.option13, title: 'Chloe' },
        { image: Images.option14, title: 'Aurora' },
    ]
    return (
        <div className='bg-gradient-to-br from-[#FBFAF7] to-[#F3EFE7] w-full py-8 px-4'>
            <h6 className='text-center mb-6 font-manrope text-base text-[#2C2C2A]'>OUR SERVICES</h6>
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-1 sm:gap-2 md:gap-4 lg:gap-6 justify-items-center">
                {servicesData.map((service, index) => (
                    <ServiceCart key={index} item={service} />
                ))}
            </div>
            <h2 className='font-poppins font-[500] text-lg text-center my-10 text-black'>"All across Switzerland, more and more people have already decided to pre-register to be part of it."</h2>
            <h6 className='text-center mb-6 font-manrope text-base text-[#2C2C2A] uppercase'>Our Expert Professional</h6>
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-1 sm:gap-2 md:gap-4 lg:gap-6 justify-items-center">
                {Expert.map((service, index) => (
                    <ServiceCart key={index} item={service} />
                ))}
            </div>


        </div>
    )
}
