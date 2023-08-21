import React from 'react'

export default function Packages() {
  return (
    <div className='mt-11'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Why Recruit from IIIT Dharwad?</h1>
      {/* three packages div */}
      <div className='md:m-10 m-2 flex flex-col md:flex-row md:justify-around gap-6 md:gap-0'>

        {/* medium package */}
        <div className='flex md:flex-col items-center justify-around font-bold mt-5'>
            <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-darkBlue'><span className='text-lightBlue'>8</span> LPA</p>
            <p className='text-md md:text-2xl'>Median CTC</p>
        </div>

        {/* highest package */}
        <div className='flex md:flex-col items-center justify-around font-bold mt-5'> 
            <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-darkBlue'><span className='text-lightBlue'>35</span> LPA</p>
            <p className='text-md md:text-2xl'>Highest CTC</p>
        </div>

        {/* average package */}
        <div className='flex md:flex-col items-center justify-around font-bold mt-5'>
            <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-darkBlue'><span className='text-lightBlue'>11</span> LPA</p>
            <p className='text-md md:text-2xl'>Average CTC</p>
        </div>
      </div>
    </div>
  )
}
