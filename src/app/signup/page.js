"use client";
import Footer from '@/components/Footer'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { Images } from '../../../public/assets/images/Images'
import Link from 'next/link';
import { useRouter } from "next/navigation";
export default function page() {
    const [isProDropdownOpen, setIsProDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [isSteetDropdownOpen, setIsSteetDropdownOpen] = useState(false);
    const [valuePro, setValuePro] = useState(null);
    const [valueCity, setValueCity] = useState(null);
    const [valueStreet, setValueStreet] = useState(null);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);
    const [imageName, setImageName] = useState("");
    const router=useRouter();

    const profession = [
        { title: 'Farmer' },
        { title: 'Teacher' },
        { title: 'Doctor' },
        { title: 'Engineer' },
        { title: 'Nurse' },
        { title: 'Artist' },
        { title: 'Driver' },
        { title: 'Chef' },
        { title: 'Police Officer' },
        { title: 'Software Developer' },
        { title: 'Electrician' },
        { title: 'Plumber' },
        { title: 'Lawyer' },
        { title: 'Mechanic' },
        { title: 'Businessman' },
    ];

    const citystreet = [
        {
            "city": "New York",
            "street": "123 Broadway Ave"
        },
        {
            "city": "Los Angeles",
            "street": "456 Sunset Blvd"
        },
        {
            "city": "Chicago",
            "street": "789 Michigan Ave"
        },
        {
            "city": "Houston",
            "street": "1010 Main St"
        },
        {
            "city": "San Francisco",
            "street": "2020 Market St"
        },
        {
            "city": "Miami",
            "street": "303 Ocean Dr"
        },
        {
            "city": "Dallas",
            "street": "404 Elm St"
        },
        {
            "city": "Seattle",
            "street": "505 Pine St"
        },
        {
            "city": "Boston",
            "street": "606 Beacon St"
        },
        {
            "city": "Atlanta",
            "street": "707 Peachtree St"
        }
    ]

    const handleProDropdown = () => {
        setIsProDropdownOpen(!isProDropdownOpen);
    }
    const handleCity = () => {
        setIsCityDropdownOpen(!isCityDropdownOpen);

    }
    const handleStreet = () => {
        setIsSteetDropdownOpen(!isSteetDropdownOpen);
    }

    const handleProValue = (item) => {
        setValuePro(item)

        setIsProDropdownOpen(flase);

    }

    const handleCityValue = (item) => {
        setValueCity(item);
        setIsCityDropdownOpen(false);

    }

    const handleStreetValue = (item) => {
        setValueStreet(item)
        setIsSteetDropdownOpen(false);

    }


    // file pick up
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const buttonPickImag = () => {
        imageInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const img = event.target.files[0];
        if (img) {
            setImageName(img.name);
        }
    };


    const handleSubmit=()=>{
        router.push('/signup/signupsuccess')
    }

    return (
        <div className=' bg-[#F4F0E9] w-full'>
            <div className='w-full py-10 md:py-20'>
                <div className='w-full  flex justify-center items-center px-4'>
                    <div className='mb-5 w-full'>
                        <div className='w-full mx-auto mb-4'>
                            <Image src={Images.lightlogo} alt='logo' className='md:w-64 h-auto w-36 mx-auto' />
                        </div>
                        <p className='font-poppins font-normal text-base text-[#222122] text-center lg:w-[37%] md:w-[80%] w-full mx-auto pt-6 pb-6'>
                            Velin is ready to launch across Switzerland.
                            And those who pre-register now will have a front-row seat.
                        </p>
                        <div className='w-full px-4'>
                            <ul className=' list-disc font-poppins text-base  lg:w-[60%] lg:px-8 md:w-[70%] w-[95%] mx-auto pb-6 '>
                                <li className='text-[#222122]'>Your profile will be added to the platform even before the launch</li>
                                <li className='text-[#222122]'>You will be among the first professionals visible and discovered by clients</li>
                                <li className='text-[#222122]'>You could receive the first bookings before others sign up!</li>

                            </ul>

                            <p className='lg:w-[70%] md:w-[90%] w-full font-poppins text-base font-normal mx-auto text-center'>An opportunity designed for those who choose to start this new chapter with us.
                                The right moment to stand out could be right now!</p>
                        </div>


                    </div>
                </div>

                {/* from */}
                <div className='px-4 container mx-auto'>
                    <form className='w-full'>
                        {/* Name */}
                        <div className=' flex  md:flex-row flex-col md:items-center w-full gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>First Name</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <input type="text" name="firstname" placeholder="Enter Your First Name" className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4" required />


                            </div>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Last Name</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <input type="text" name="lastname" placeholder="Enter Your Last Name" className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4" required />


                            </div>


                        </div>

                        {/* Username */}
                        <div className=' flex  md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>User Name</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <input type="text" name="username" placeholder="Enter Your Username" className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4" required />


                            </div>
                            <div className='flex-1'>


                            </div>


                        </div>
                        {/* Peofession */}

                        <div className=' flex  md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Profession</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <button onClick={handleProDropdown} className=" relative w-full outline-none  font-dm border border-[#000000] rounded-lg py-2 px-4 flex justify-between items-center bg-white">
                                    <div className='text-[#222122] font-roboto font-normal text-sm'>
                                        {valuePro ? valuePro : 'Select Your Profession'}
                                    </div>
                                    <div>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.07 0.742002L6.38503 5.353C6.28281 5.45413 6.14482 5.51085 6.00103 5.51085C5.85724 5.51085 5.71925 5.45413 5.61703 5.353L0.931027 0.743002C0.828172 0.641926 0.689734 0.58529 0.545527 0.58529C0.401321 0.58529 0.262883 0.641926 0.160027 0.743002C0.109379 0.792379 0.0691266 0.851395 0.0416429 0.916572C0.0141592 0.981748 0 1.05177 0 1.1225C0 1.19324 0.0141592 1.26326 0.0416429 1.32843C0.0691266 1.39361 0.109379 1.45262 0.160027 1.502L4.84403 6.112C5.15255 6.41493 5.56765 6.58465 6.00003 6.58465C6.4324 6.58465 6.84751 6.41493 7.15603 6.112L11.84 1.502C11.8908 1.45261 11.9312 1.39353 11.9588 1.32826C11.9864 1.26299 12.0006 1.19286 12.0006 1.122C12.0006 1.05115 11.9864 0.981011 11.9588 0.915741C11.9312 0.850472 11.8908 0.791395 11.84 0.742002C11.7372 0.640926 11.5987 0.58429 11.4545 0.58429C11.3103 0.58429 11.1719 0.640926 11.069 0.742002" fill="black" />
                                        </svg>
                                    </div>
                                    {isProDropdownOpen && (
                                        <div className="absolute top-[100%] left-0 mt-2 w-full bg-[#F4F0E9] h-48 border border-gray-700 rounded-md shadow-lg overflow-y-scroll z-50">
                                            {profession.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleProValue(item.title)}
                                                    className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-800 hover:text-white transition-colors"
                                                >
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </button>

                            </div>
                            <div className='flex-1'>


                            </div>


                        </div>


                        {/* city and street address */}

                        <div className=' flex  md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>City</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <button onClick={handleCity} className=" relative w-full outline-none  font-dm border border-[#000000] rounded-lg py-2 px-4 flex justify-between items-center bg-white">
                                    <div className='text-[#222122] font-roboto font-normal text-sm'>
                                        {valueCity ? valueCity : 'Select Your City'}
                                    </div>
                                    <div>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.07 0.742002L6.38503 5.353C6.28281 5.45413 6.14482 5.51085 6.00103 5.51085C5.85724 5.51085 5.71925 5.45413 5.61703 5.353L0.931027 0.743002C0.828172 0.641926 0.689734 0.58529 0.545527 0.58529C0.401321 0.58529 0.262883 0.641926 0.160027 0.743002C0.109379 0.792379 0.0691266 0.851395 0.0416429 0.916572C0.0141592 0.981748 0 1.05177 0 1.1225C0 1.19324 0.0141592 1.26326 0.0416429 1.32843C0.0691266 1.39361 0.109379 1.45262 0.160027 1.502L4.84403 6.112C5.15255 6.41493 5.56765 6.58465 6.00003 6.58465C6.4324 6.58465 6.84751 6.41493 7.15603 6.112L11.84 1.502C11.8908 1.45261 11.9312 1.39353 11.9588 1.32826C11.9864 1.26299 12.0006 1.19286 12.0006 1.122C12.0006 1.05115 11.9864 0.981011 11.9588 0.915741C11.9312 0.850472 11.8908 0.791395 11.84 0.742002C11.7372 0.640926 11.5987 0.58429 11.4545 0.58429C11.3103 0.58429 11.1719 0.640926 11.069 0.742002" fill="black" />
                                        </svg>
                                    </div>
                                    {isCityDropdownOpen && (
                                        <div className="absolute top-[100%] left-0 mt-2 w-full bg-[#F4F0E9] h-48 border border-gray-700 rounded-md shadow-lg overflow-y-scroll z-50">
                                            {citystreet.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleCityValue(item.city)}
                                                    className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-800 hover:text-white transition-colors"
                                                >
                                                    {item.city}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </button>

                            </div>
                            <div className='flex-1'>

                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Street Address</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <button onClick={handleStreet} className=" relative w-full outline-none  font-dm border border-[#000000] rounded-lg py-2 px-4 flex justify-between items-center bg-white">
                                    <div className='text-[#222122] font-roboto font-normal text-sm'>
                                        {valueStreet ? valueStreet : 'Select Your Street Address'}
                                    </div>
                                    <div>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.07 0.742002L6.38503 5.353C6.28281 5.45413 6.14482 5.51085 6.00103 5.51085C5.85724 5.51085 5.71925 5.45413 5.61703 5.353L0.931027 0.743002C0.828172 0.641926 0.689734 0.58529 0.545527 0.58529C0.401321 0.58529 0.262883 0.641926 0.160027 0.743002C0.109379 0.792379 0.0691266 0.851395 0.0416429 0.916572C0.0141592 0.981748 0 1.05177 0 1.1225C0 1.19324 0.0141592 1.26326 0.0416429 1.32843C0.0691266 1.39361 0.109379 1.45262 0.160027 1.502L4.84403 6.112C5.15255 6.41493 5.56765 6.58465 6.00003 6.58465C6.4324 6.58465 6.84751 6.41493 7.15603 6.112L11.84 1.502C11.8908 1.45261 11.9312 1.39353 11.9588 1.32826C11.9864 1.26299 12.0006 1.19286 12.0006 1.122C12.0006 1.05115 11.9864 0.981011 11.9588 0.915741C11.9312 0.850472 11.8908 0.791395 11.84 0.742002C11.7372 0.640926 11.5987 0.58429 11.4545 0.58429C11.3103 0.58429 11.1719 0.640926 11.069 0.742002" fill="black" />
                                        </svg>
                                    </div>
                                    {isSteetDropdownOpen && (
                                        <div className="absolute top-[100%] left-0 mt-2 w-full bg-[#F4F0E9] h-48 border border-gray-700 rounded-md shadow-lg overflow-y-scroll z-50">
                                            {citystreet.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleStreetValue(item.street)}
                                                    className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-800 hover:text-white transition-colors"
                                                >
                                                    {item.street}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </button>


                            </div>


                        </div>

                        {/* email */}

                        <div className=' flex  md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
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


                            </div>
                            <div className='flex-1'>


                            </div>


                        </div>

                        {/* phone pdf */}

                        <div className=' flex  md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Phone</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <input type="number" name="phone" placeholder="+444" className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4" required />


                            </div>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Upload File</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <input type="file" accept="application/pdf" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                                <button onClick={handleButtonClick} className="w-full outline-none  font-dm border border-[#000000] bg-white rounded-lg py-2 px-4 flex justify-center items-center gap-3">
                                    <div>
                                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 14.0843H27.75L19.5 5.83429V14.0843ZM9 3.58429H21L30 12.5843V30.5843C30 31.3799 29.6839 32.143 29.1213 32.7056C28.5587 33.2682 27.7956 33.5843 27 33.5843H9C8.20435 33.5843 7.44129 33.2682 6.87868 32.7056C6.31607 32.143 6 31.3799 6 30.5843V6.58429C6 5.78864 6.31607 5.02558 6.87868 4.46297C7.44129 3.90036 8.20435 3.58429 9 3.58429ZM16.395 19.2443C17.01 20.5943 17.79 21.7043 18.69 22.4693L19.305 22.9493C18 23.1893 16.2 23.6093 14.295 24.3443L14.13 24.4043L14.88 22.8443C15.555 21.5393 16.05 20.3543 16.395 19.2443ZM26.115 24.9593C26.385 24.6893 26.52 24.3443 26.535 23.9693C26.58 23.6693 26.505 23.3843 26.355 23.1443C25.92 22.4393 24.795 22.1093 22.935 22.1093L21 22.2143L19.695 21.3443C18.75 20.5643 17.895 19.1993 17.295 17.5043L17.355 17.2943C17.85 15.2993 18.315 12.8843 17.325 11.8943C17.2039 11.7767 17.0607 11.6843 16.9036 11.6225C16.7465 11.5607 16.5788 11.5307 16.41 11.5343H16.05C15.495 11.5343 15 12.1193 14.865 12.6893C14.31 14.6843 14.64 15.7793 15.195 17.5943V17.6093C14.82 18.9293 14.34 20.4593 13.575 22.0043L12.135 24.7043L10.8 25.4393C9 26.5643 8.145 27.8243 7.98 28.6193C7.92 28.9043 7.95 29.1593 8.055 29.4293L8.1 29.5043L8.82 29.9693L9.48 30.1343C10.695 30.1343 12.075 28.7093 13.935 25.5293L14.205 25.4243C15.75 24.9293 17.67 24.5843 20.25 24.2993C21.795 25.0643 23.61 25.4093 24.75 25.4093C25.41 25.4093 25.86 25.2443 26.115 24.9593ZM25.5 23.8943L25.635 24.0593C25.62 24.2093 25.575 24.2243 25.5 24.2543H25.44L25.155 24.2843C24.465 24.2843 23.4 23.9993 22.305 23.5193C22.44 23.3693 22.5 23.3693 22.65 23.3693C24.75 23.3693 25.35 23.7443 25.5 23.8943ZM11.745 26.0843C10.77 27.8693 9.885 28.8593 9.21 29.0843C9.285 28.5143 9.96 27.5243 11.025 26.5493L11.745 26.0843ZM16.275 15.7193C15.93 14.3693 15.915 13.2743 16.17 12.6443L16.275 12.4643L16.5 12.5393C16.755 12.8993 16.785 13.3793 16.635 14.1893L16.59 14.4293L16.35 15.6593L16.275 15.7193Z" fill="#EF5350" />
                                        </svg>

                                    </div>
                                    <div className='text-[#222122] font-roboto font-medium'>
                                        {fileName || "Choose Your File"}
                                    </div>
                                </button>

                            </div>


                        </div>


                        {/* image */}

                        <div className=' flex  md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Upload Picture</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <input type="file" accept=".png,.jpg,.jpeg" ref={imageInputRef} onChange={handleImageChange} className="hidden" />

                                <button onClick={buttonPickImag} className="w-full outline-none  font-dm border border-[#000000] bg-white rounded-lg py-2 px-4 flex justify-center items-center gap-3">
                                    <div>
                                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 8.08429H25.5V18.5843H28.5V8.08429C28.5 6.42979 27.1545 5.08429 25.5 5.08429H6C4.3455 5.08429 3 6.42979 3 8.08429V26.0843C3 27.7388 4.3455 29.0843 6 29.0843H18V26.0843H6V8.08429Z" fill="black" />
                                            <path d="M12 17.0843L7.5 23.0843H24L18 14.0843L13.5 20.0843L12 17.0843Z" fill="black" />
                                            <path d="M28.5 21.5843H25.5V26.0843H21V29.0843H25.5V33.5843H28.5V29.0843H33V26.0843H28.5V21.5843Z" fill="black" />
                                        </svg>


                                    </div>
                                    <div className='text-[#222122] font-roboto font-medium'>
                                        {imageName || "Choose Your File"}
                                    </div>
                                </button>

                            </div>
                            <div className='flex-1'>


                            </div>


                        </div>

                        {/* password */}

                        <div className=' flex md:flex-row flex-col md:items-center gap-4 mb-2'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Password</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <input type="password" name="password" placeholder="**************" style={{ letterSpacing: '0.5em' }} className="w-full outline-none text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4" required />


                            </div>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='font-roboto text-[#040404] text-base font-normal'>Confirm Password</div>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5843C13.3135 22.5859 14.6143 22.328 15.8278 21.8253C17.0412 21.3227 18.1434 20.5852 19.071 19.6553C20.0009 18.7277 20.7384 17.6255 21.2411 16.4121C21.7437 15.1986 22.0016 13.8978 22 12.5843C22.0016 11.2708 21.7437 9.97001 21.2411 8.75654C20.7384 7.54307 20.0009 6.44088 19.071 5.5133C18.1434 4.58338 17.0412 3.84591 15.8278 3.34325C14.6143 2.8406 13.3135 2.58268 12 2.5843C10.6866 2.58268 9.38572 2.8406 8.17225 3.34325C6.95878 3.84591 5.85659 4.58338 4.92901 5.5133C3.99909 6.44088 3.26162 7.54307 2.75897 8.75654C2.25631 9.97001 1.99839 11.2708 2.00001 12.5843C1.99839 13.8978 2.25631 15.1986 2.75897 16.4121C3.26162 17.6255 3.99909 18.7277 4.92901 19.6553C5.85659 20.5852 6.95878 21.3227 8.17225 21.8253C9.38572 22.328 10.6866 22.5859 12 22.5843Z" stroke="black" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.08429C12.3315 6.08429 12.6495 6.21599 12.8839 6.45041C13.1183 6.68483 13.25 7.00277 13.25 7.33429C13.25 7.66581 13.1183 7.98375 12.8839 8.21817C12.6495 8.45259 12.3315 8.58429 12 8.58429C11.6685 8.58429 11.3505 8.45259 11.1161 8.21817C10.8817 7.98375 10.75 7.66581 10.75 7.33429C10.75 7.00277 10.8817 6.68483 11.1161 6.45041C11.3505 6.21599 11.6685 6.08429 12 6.08429Z" fill="black" />
                                            <path d="M12.25 17.5843V10.5843H11.25M10.5 17.5843H14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>

                                <input type="password" name="password" placeholder="*************" style={{ letterSpacing: '0.5em' }} className="w-full outline-none   text-[#222122] font-dm border border-[#000000] rounded-lg py-2 px-4 " required />


                            </div>


                        </div>


                        <div className='w-full md:w-8/12 lg:w-6/12 mx-auto'>
                            <button onClick={handleSubmit} type="submit" className="w-full bg-black text-white py-2 text-base font-roboto font-medium rounded-md hover:bg-gray-800 transition mt-8 mb-2" >
                                SUBMIT
                            </button>

                            <div className="flex items-center gap-2">
                                <input   type="checkbox"  id="agree"  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black" />
                                <label htmlFor="agree" className="text-[#222122]  font-roboto text-sm font-medium">
                                    I agree to the Terms of Use and Privacy Policy
                                </label>
                            </div>


                        </div>

                    </form>

                </div>

            </div>
            
            <Footer/>



        </div>
    )
}
