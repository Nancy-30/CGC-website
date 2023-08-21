import React from 'react'
import Companies from '../images/companies visited.svg'
export default function CompaniesVisited() {

  return (
    <div className='mt-11'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Comapnies Visited</h1>
      <img src={Companies} className='mt-6 w-[95%]'/>
    </div>
  )
}
