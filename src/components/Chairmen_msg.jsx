import React from 'react'
import sirImg from '../images/Rajendra hegadi sir.svg'
export default function Chairmen_msg() {
    return (
        <div className='md:mt-16 mt-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >CGC Chairmen's Message</h1>

            <div className='flex md:p-10 p-5 pb-0 md:gap-10 gap-3'>
                <img src={sirImg} alt="sir img" className='lg:h-[450px] md:h-[300px] h-[200px]' />
                <div>
                    <div>
                        <h2 className='text-2xl md:text-3xl lg:text-5xl text-neavyBlue font-bold'>Dr. Rajendra Hegadi</h2>
                        <p className='text-lg md:text-xl lg:text-2xl text-neavyBlue'>roles and responsiblites, etc</p>
                    </div>
                    <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-5 lg:mt-11 hidden md:block'>Breif over view - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-5  hidden xl:block'>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>

                </div>
            </div>
            <p className='text-xl md:text-2xl lg:mt-11 block md:hidden md:p-10 p-5 pb-0'>Breif over view - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl md:p-10 p-5  pb-0 xl:hidden block'>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
        </div>
    )
}
