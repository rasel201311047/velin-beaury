"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Images } from "../../../public/assets/images/Images";

export default function ImageShow() {
    return (
        <>
            <div className=" hidden md:flex w-full h-[30vh] sm:h-[40vh] md:h-[80vh] py-3 gap-2">
                {/* Left Column */}
                <div className="flex flex-col gap-2 w-[30%]">
                    <Image src={Images.option15} alt="image" className="w-full h-3/5 object-cover rounded-lg" />
                    <Image src={Images.option19} alt="image" className="w-full h-2/5 object-cover rounded-lg" />
                </div>

                {/* Middle Column */}
                <div className="flex flex-col gap-2 w-[40%]">
                    <div className="flex gap-2 h-1/2">
                        <div className="w-1/2">
                            <Image src={Images.option16} alt="image" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="w-1/2">
                            <Image src={Images.option17} alt="image" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                    <div className="h-1/2">
                        <Image src={Images.option18} alt="image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-2 w-[30%]">
                    <Image src={Images.option20} alt="image" className="w-full h-[31%]  sm:h-[33%] object-cover rounded-lg" />
                    <Image src={Images.option21} alt="image" className="w-full h-[31%]  sm:h-[33%] object-cover rounded-lg" />
                    <Image src={Images.option22} alt="image" className="w-full h-[31%]  sm:h-[33%] object-cover rounded-lg" />
                </div>
            </div>

            {/* mobile */}

            <div className="md:hidden w-full py-3 grid grid-cols-2 gap-2">
                <div className="col-span-2 relative h-40">
                    <Image src={Images.option20} alt="Desert landscape" fill className="object-cover rounded-lg" />
                </div>

                <div className="relative h-40">
                    <Image src={Images.option15} alt="Mountain landscape" fill className="object-cover rounded-lg" />
                </div>

                <div className="relative h-40">
                    <Image src={Images.option19} alt="Forest path" fill className="object-cover rounded-lg" />
                </div>

                <div className="col-span-2 relative h-40">
                    <Image src={Images.option18} alt="Snowy peaks" fill className="object-cover rounded-lg" />
                </div>

                <div className="col-span-2 relative h-40">
                    <Image src={Images.option21} alt="Coastal view" fill className="object-cover rounded-lg" />
                </div>

                <div className="relative h-40">
                    <Image src={Images.option16} alt="Sunset view" fill className="object-cover rounded-lg" />
                </div>

                <div className="relative h-40">
                    <Image src={Images.option17} alt="Mountain lake" fill className="object-cover rounded-lg" />
                </div>
            </div>


        </>
    );
}
