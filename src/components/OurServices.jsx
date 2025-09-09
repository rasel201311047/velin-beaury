"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Images } from '../../public/assets/images/Images';
import ServiceCart from './cart/ServiceCart';

export default function OurServices() {
    const servicesData = [
        { image: Images.option1, title: 'Nails' },
        { image: Images.option2, title: 'Massage' },
        { image: Images.option3, title: 'Eyelashes' },
        { image: Images.option4, title: 'Barber' },
        { image: Images.option5, title: 'Face & Body' },
        { image: Images.option6, title: 'Make Up' },
        { image: Images.option7, title: 'Hair Style' },
    ];

    const Expert = [
        { image: Images.option8, title: 'Emma' },
        { image: Images.option9, title: 'Noah' },
        { image: Images.option10, title: 'Mia' },
        { image: Images.option11, title: 'Michael' },
        { image: Images.option12, title: 'Julie' },
        { image: Images.option13, title: 'Chloe' },
        { image: Images.option14, title: 'Aurora' },
        { image: Images.option14, title: 'Aurora' },
    ];

    // Create separate refs and states for each carousel
    const servicesRef = useRef(null);
    const expertsRef = useRef(null);

    const [servicesScroll, setServicesScroll] = useState({
        showLeftArrow: false,
        showRightArrow: true
    });

    const [expertsScroll, setExpertsScroll] = useState({
        showLeftArrow: false,
        showRightArrow: true
    });

    // Check if scrollable and update arrow visibility for a specific carousel
    const checkScroll = (element, setScrollState) => {
        if (element) {
            const hasHorizontalScrollbar = element.scrollWidth > element.clientWidth;
            setScrollState({
                showRightArrow: hasHorizontalScrollbar && element.scrollLeft < (element.scrollWidth - element.clientWidth - 10),
                showLeftArrow: element.scrollLeft > 10
            });
        }
    };

    // Scroll handler with smooth animation for a specific carousel
    const handleScroll = (direction, containerRef, setScrollState) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = 300;
            const newScrollPosition = direction === 'right'
                ? container.scrollLeft + scrollAmount
                : container.scrollLeft - scrollAmount;

            container.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });

            // Update arrow visibility after scroll completes
            setTimeout(() => checkScroll(container, setScrollState), 300);
        }
    };

    // Initialize and update on resize for both carousels
    useEffect(() => {
        // Services carousel setup
        const servicesContainer = servicesRef.current;
        if (servicesContainer) {
            checkScroll(servicesContainer, setServicesScroll);

            const handleServicesScroll = () => checkScroll(servicesContainer, setServicesScroll);
            servicesContainer.addEventListener('scroll', handleServicesScroll);

            return () => {
                servicesContainer.removeEventListener('scroll', handleServicesScroll);
            };
        }
    }, []);

    useEffect(() => {
        // Experts carousel setup
        const expertsContainer = expertsRef.current;
        if (expertsContainer) {
            checkScroll(expertsContainer, setExpertsScroll);

            const handleExpertsScroll = () => checkScroll(expertsContainer, setExpertsScroll);
            expertsContainer.addEventListener('scroll', handleExpertsScroll);

            return () => {
                expertsContainer.removeEventListener('scroll', handleExpertsScroll);
            };
        }
    }, []);

    // Handle window resize for both carousels
    useEffect(() => {
        const handleResize = () => {
            if (servicesRef.current) checkScroll(servicesRef.current, setServicesScroll);
            if (expertsRef.current) checkScroll(expertsRef.current, setExpertsScroll);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='bg-gradient-to-br from-[#FBFAF7] to-[#F3EFE7] w-full py-8 px-4'>
            <h6 className='text-center mb-6 font-manrope text-xs sm:text-sm md:text-base text-[#2C2C2A]'>OUR SERVICES</h6>

            {/* Services Horizontal Scroll */}
            <div className="relative max-w-7xl mx-auto mb-12">
                {servicesScroll.showLeftArrow && (
                    <button  onClick={() => handleScroll('left', servicesRef, setServicesScroll)}   className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#ffffff8c] rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-200 hidden md:block"   aria-label="Scroll left"  >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                <div ref={servicesRef}  className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"   style={{ scrollBehavior: 'smooth' }} >
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-52">
                            <ServiceCart item={service} />
                        </div>
                    ))}
                </div>

                {servicesScroll.showRightArrow && (
                    <button onClick={() => handleScroll('right', servicesRef, setServicesScroll)}  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#ffffff8c] rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-200 hidden md:block" aria-label="Scroll right" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>

            <h2 className='font-poppins font-[500] text-sm sm:text-base md:text-lg text-center my-10 text-black'>"All across Switzerland, more and more people have already decided to pre-register to be part of it."</h2>

            <h6 className='text-center mb-6 font-manrope text-xs sm:text-sm md:text-base text-[#2C2C2A] uppercase'>Our Expert Professional</h6>

            {/* Experts Horizontal Scroll */}
            <div className="relative max-w-7xl mx-auto mb-12">
                {expertsScroll.showLeftArrow && (
                    <button onClick={() => handleScroll('left', expertsRef, setExpertsScroll)}   className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#ffffff8c] rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-200 hidden md:block"  aria-label="Scroll left"  >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                <div ref={expertsRef}   className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"   style={{ scrollBehavior: 'smooth' }}  >
                    {Expert.map((service, index) => (
                        <div key={index} className="flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-52">
                            <ServiceCart item={service} />
                        </div>
                    ))}
                </div>

                {expertsScroll.showRightArrow && (
                    <button  onClick={() => handleScroll('right', expertsRef, setExpertsScroll)}   className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#ffffff8c] rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-200 hidden md:block"  aria-label="Scroll right" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}