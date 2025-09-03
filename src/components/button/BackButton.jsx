
import Link from 'next/link'
import React from 'react'

export default function BackButton() {
  return (
    <Link href={{pathname:'/signup',query:{type:'professional'}}} className=' border-2 border-[#1B1B25] rounded-lg p-1 flex justify-center items-center w-fit'>
        <div className='bg-[#1B1B25]  rounded-lg w-64 py-2 text-center font-poppins text-lg text-[#FFFFFF]'>
            PROFESSIONAL
        </div>
    </Link>
  )
}
