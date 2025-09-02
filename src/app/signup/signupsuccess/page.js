"use client";
import Footer from '@/components/Footer'
import Image from 'next/image'
import React, { useEffect } from 'react'

import Link from 'next/link';
import { Images } from '../../../../public/assets/images/Images';
import { useRouter } from "next/navigation";

export default function page() {
    const router=useRouter();
   
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/signin");
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className=' bg-[#F4F0E9] w-full h-screen flex flex-col justify-between'>
            <div className='w-full   flex items-center justify-center '>
                <div className='w-full px-3'>
                    <div className='w-full  flex justify-center items-center'>
                        <div className=''>
                            <div className='w-full mx-auto'>
                                <Image src={Images.thank} alt='thanks' className='md:w-64 h-auto w-36 mx-auto' />
                            </div>

                            <p className='font-poppins font-semibold text-base text-[#222122] text-center mb-3'>Thank you for signing up for Velin’s pre-launch.</p>
                            <p className='font-poppins font-semibold text-base text-[#222122] text-center mb-3'>You’re officially among the first!</p>
                            <p className='font-poppins font-semibold text-base text-[#222122] text-center mb-3 w-[65%] mx-auto'>We’ll keep you updated via email and SMS with all the latest news about the launch — see you very soon!</p>


                        </div>
                    </div>

                </div>

            </div>

            <Footer />



        </div>
    )
}
