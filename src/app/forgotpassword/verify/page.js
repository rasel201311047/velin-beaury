"use client";
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Images } from '../../../../public/assets/images/Images'
import React, { useState, useRef } from "react";
import { useRouter } from 'next/navigation';

export default function page() {

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    const router=useRouter();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // auto-focus next input
        if (element.value !== "" && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Entered Code: " + otp.join(""));
    };

    const handleSend=()=>{
         router.push("/forgotpassword/verify/changepassword");
    }

    return (
        <div className=' bg-[#F4F0E9] w-full'>
            <div className='w-full  h-screen flex items-center justify-center'>
                <div className='w-full px-3'>
                    <div className='w-full  flex justify-center items-center'>
                        <div className='mb-5'>
                            <div className='w-full mx-auto'>
                                <Image src={Images.lightlogo} alt='logo' className='md:w-64 h-auto w-36 mx-auto' />
                            </div>
                            <h1 className='text-center font-roboto font-semibold my-6 text-xl'>Check Your Email</h1>
                            <p className='font-poppins font-normal text-base text-[#222122] text-center'>We sent a reset link to contact@dscode...com enter 6-digit code that mentioned in the email</p>


                        </div>
                    </div>

                    {/* from */}
                    <div className='w-full '>
                        <form className='lg:w-4/12 md:w-6/12 w-[95%] mx-auto'>
                            <div className='font-roboto text-[#040404] text-base font-normal'>Code</div>


                            <div className="flex justify-between gap-2">
                                {otp.map((data, index) => (
                                    <input  key={index}  type="text"  maxLength="1"   value={data} onChange={(e) => handleChange(e.target, index)}  onKeyDown={(e) => handleKeyDown(e, index)}  ref={(el) => (inputRefs.current[index] = el)} 
                                     className="w-16 h-16 text-center border border-gray-400 rounded-lg text-lg focus:outline-none " />
                                ))}
                            </div>

                            <button onClick={handleSend} type="submit" className="w-full bg-black text-white py-2 text-base font-roboto font-medium rounded-md hover:bg-gray-800 transition mt-8 mb-2" >
                                Send
                            </button>

                        </form>

                    </div>
                </div>

            </div>
            
            <Footer/>



        </div>
    )
}
