import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
export default function Overview_Goals() {
  return (
    <div className="" id="Overview_Goals">
      <div id='overview'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Overview</h1>
        <p className='text-xl md:text-3xl lg:text-3xl mt-3'>The Career Guidance Cell at IIIT Dharwad is driven by students and assisted by faculty for career development of students.</p>
      </div>

      <div id="goals" className='md:mt-16 mt-6'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Goals</h1>
        <ul className='text-xl md:text-3xl lg:text-3xl mt-3 md:ml-11 md:mr-2'>
          <li className='flex items-start m-2 gap-4 '><span><BsFillCircleFill className='text-[10px] text-neavyBlue mt-3'/></span>To organize placement drives at IIIT Dharwad</li>
          <li className='flex items-start m-2 gap-4 '><span><BsFillCircleFill className='text-[10px] text-neavyBlue mt-3'/></span>To provide training and assistance to students for better placement and internship opportunities</li>
          <li className='flex items-start m-2 gap-4 '><span><BsFillCircleFill className='text-[10px] text-neavyBlue mt-3'/></span>To hone soft skills and interview techniques</li>
          <li className='flex items-start m-2 gap-4 '><span><BsFillCircleFill className='text-[10px] text-neavyBlue mt-3'/></span>To organize workshops and invited talks to make students industry ready</li>
          <li className='flex items-start m-2 gap-4 '><span><BsFillCircleFill className='text-[10px] text-neavyBlue mt-3'/></span>To assist students with their plans for higher studies</li>
          <li className='flex items-start m-2 gap-4 '><span><BsFillCircleFill className='text-[10px] text-neavyBlue mt-3'/></span>To provide information about entrance examinations and other opportunities for higher studies</li>

        </ul>
      </div>

    </div>
  )
}
