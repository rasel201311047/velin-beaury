"use client";
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'
import { Images } from '../../../public/assets/images/Images'
import Link from 'next/link';

export default function page() {
    return (
        <div className=' bg-[#F4F0E9] w-full'>
            <div className='w-full py-10 md:py-20'>
                <div className='w-full  flex justify-center items-center'>
                    <div className='mb-5'>
                        <div className='w-full mx-auto'>
                            <Image src={Images.lightlogo} alt='logo' className='md:w-64 h-auto w-36 mx-auto' />
                        </div>
                        <h1 className='text-center font-roboto font-semibold my-6 text-xl'>Log In</h1>
                        <p className='font-poppins font-normal text-base text-[#222122] text-center'>Please enter your email and password to continue</p>


                    </div>
                </div>

                {/* from */}
                <div className='w-full '>
                    <form className='lg:w-4/12 md:w-6/12 w-[95%] mx-auto'>
                        {/* emai */}
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='font-roboto text-[#040404] text-base font-normal'>E-Mail</div>
                            <div>
                                <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                    <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                        <input type="email" name="email" placeholder="example@gmail.com" className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4" required />

                        {/* password */}

                        <div className='flex items-center gap-2 mt-2 mb-2'>
                            <div className='font-roboto text-[#040404] text-base font-normal '>Password</div>
                            <div>
                                <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                    <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                        <input type="password" name="password" placeholder="*********" style={{ letterSpacing: '0.5em' }} className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4 leading-4" required />

                        <Link href={'/forgotpassword'}><p className='text-[#222122] text-xs font-roboto font-normal py-2'>Fogot password</p></Link>

                        <button type="submit" className="w-full bg-black text-white py-2 text-base font-roboto font-medium rounded-md hover:bg-gray-800 transition mt-8 mb-2" >
                            SUBMIT
                        </button>
                        <div className='flex justify-center items-center gap-2'>
                            <p className='font-roboto font-normal text-[#222122] text-sm'> Don&apos;t have an account?</p>
                            <Link href={'/signup'}><p className='font-roboto font-semibold text-sm text-black underline'>Sign up</p></Link>
                        </div>
                    </form>

                </div>

            </div>
            
            <Footer/>



        </div>
    )
}
