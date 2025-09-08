
import React from 'react'
import BackButton from './button/BackButton';
import GestButton from './button/GestButton';

export default function ComingSoon({sign}) {
    console.log(sign)
    return (
        <div className='bg-gradient-to-br from-[#F3EFE7] to-[#FDFCFA] py-8'>
            <div className='text-center py-5 font-playfair text-3xl font-semibold'>{sign==='signin'?'Velusy is coming Soon.....':'Velusy is coming Soon.....'}</div>
            <p className='text-center font-playfair text-base mb-10'>
                And for you, who are choosing to be with us from the very beginning, we’ve prepared a surprise.
            </p>

            <div className=  {`container mx-auto  flex flex-col md:flex-row gap-2 ${sign==='signin'?'hidden':''}`}>
                <div className='grow flex justify-center items-center'>
                    <div className=''>
                        <p className=' mx-0 text-center font-poppins font-medium text-base mb-4 text-[#000000] pb-3 border-b border-[#000000]'>Pre-register now by clicking here</p>

                        <div className='mx-auto mb-2'><BackButton /></div>
                        <p className='mx-auto text-center font-poppins font-normal text-[#1B1B25] text-base'>I want to show my talent</p>
                    </div>

                </div>

                <div className='grow flex justify-center items-center'>
                    <div className=''>
                        <p className=' mx-0 text-center font-poppins font-medium text-base mb-4 text-[#000000] pb-3 border-b border-[#000000]'>Pre-register now by clicking here</p>

                        <div className='mx-auto mb-2'> <GestButton /></div>
                        <p className='mx-auto text-center font-poppins font-normal text-[#1B1B25] text-base'>I want to try your services</p>
                    </div>

                </div>


            </div>



        </div>
    )
}
