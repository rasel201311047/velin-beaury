"use client";
import ComingSoon from '@/components/ComingSoon'
import ContractUs from '@/components/ContractUs'
import Footer from '@/components/Footer'
import Heropage from '@/components/Heropage'
import Navbar from '@/components/Navbar'
import OurServices from '@/components/OurServices'
import OurWork from '@/components/OurWork'
import Platfrom from '@/components/Platfrom'
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
        <Navbar/>
        <Heropage/>
        <OurServices/>
        <OurWork/>
        <ComingSoon sign='signin'/>
        <Platfrom/>
        <ContractUs/>
        <Footer/>

    </div>
  )
}
