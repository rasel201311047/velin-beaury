"use client";
import React from 'react'
import WorkCart from './cart/WorkCart'

export default function OurWork() {
    const forclient = {
        "headertext": "For Clients",
        "item": [
            {
                "title": "No more wasted time",
                "description": "In one click, find and compare hairdressers, barbers, beauticians, masseurs, and many other professionals."
            },
            {
                "title": "At your home or the nearest salon",
                "description": "Get pampered at home — ideal for those with little time — or book at the nearest salon and avoid the stress of long travel."
            },
            {
                "title": "Book instantly",
                "description": "Choose the day, time, and place with a simple click, without phone calls or endless waits."
            },
            {
                "title": "Always under control costs",
                "description": "Instantly explore rates and exclusive promotions, and enjoy the service without unpleasant surprises at the time of payment."
            },
            {
                "title": "The more you book, the more you save",
                "description": "Accumulate discounts and reward points every time you use Velusy."
            }
        ]
    }

    const forprofessionals = {
        "headertext": "For Clients",
        "item": [
            {
                "title": "Immediate visibility",
                "description": "Showcase your talent and reach clients who are ready to book."
            },
            {
                "title": "Always full schedule",
                "description": "No more gaps, thanks to a constant flow of service requests."
            },
            {
                "title": "Secured payments",
                "description": "Guaranteed earnings even if a client doesn’t show up."
            },
            {
                "title": "Simplified sole proprietorship",
                "description": "Full support to help you launch your business."
            },
            {
                "title": "Professional and economic growth",
                "description": "With simple tools and transparent pricing, improve your skills, better manage your business, and quickly increase your income."
            }
        ]
    }

    return (
        <div className='bg-gradient-to-br from-[#FBFAF7] to-[#F3EFE7] py-8'>
            <div className='py-5  w-full text-center font-playfair text-xl sm:text-2xl md:text-3xl'>How Velusy Works</div>
            <div className=' container mx-auto md:flex gap-4'>
                <div className='mx-2 my-2 md:my-0 md:mx-0 grow bg-gradient-to-br from-[#F3EFE7] to-[#FFFFFF] shadow-sm rounded-lg p-8 shadow-[#00000040] border ' >
                    <WorkCart item={forclient} />

                </div>
                <div className='mx-2 my-2 md:my-0 md:mx-0 grow bg-gradient-to-br from-[#F3EFE7] to-[#FFFFFF] shadow-sm rounded-lg p-8 shadow-[#00000040] border '>
                    <WorkCart item={forprofessionals} />
                </div>
            </div>

        </div>
    )
}
