import React from 'react'
import BarChat from '../images/Package bar chart.svg'
import {BiSolidCheckbox} from 'react-icons/bi'

export default function OfferedPlacements() {
  return (
    <div className='mt-11'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Offered Placement CTC</h1>
        <img src={BarChat} className='md:mt-7 md:ml-8'/>
        <div className='flex justify-center m-28 mt-0 mb-0 gap-3 md:gap-20 font-medium'>
            <div className='flex items-center gap-3 lg:text-2xl'>
                <BiSolidCheckbox className='text-lightBlue text-3xl'/> Average CTC
            </div>

            <div className='flex items-center gap-3 lg:text-2xl '>
                <BiSolidCheckbox className='text-darkBlue text-3xl'/> Highest CTC
            </div>
        </div>

      <div className='flex items-center p-5 mt-12'>
        <h2 className='text-2xl md:text-4xl xl:text-5xl text-neavyBlue font-bold mt-6 w-[60%]'>Average Package of top 20% students in 2023.</h2>
        <p className='text-xl lg:text-3xl font-[700] text-neavyBlue text-right'><span className='text-7xl md:text-8xl xl:text-9xl text-lightBlue font-bold'>19.5</span> LPG</p>
      </div>
    </div>
  )
}
