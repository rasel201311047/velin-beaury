
import Link from 'next/link'
import React from 'react'
export default function GestButton() {
    return (
        <Link href={{pathname:'/signup',query:{type:'guest'}}} className=' border-2 border-black rounded-lg p-1 flex justify-center items-center w-fit'>
            <div className='  rounded-lg px-5 w-48 sm:w-52 md:w-64 py-2 text-center font-poppins text-sm sm:text-base md:text-lg text-[#242424] bg-[linear-gradient(315deg, #f0f0f0,#cacaca)] shadow-[-5px_-5px_17px_#dcdcdc,5px_5px_17px_#FBAC6F2E]'>
                GUEST
            </div>

            <div className='bg-[#ffedc9]'>
                
            </div>
        </Link>
    )
}
