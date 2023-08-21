import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-lightGray p-8 md:flex gap-8 text-xl pr-10 justify-end font-medium hidden '>
      <a href = "home" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Home</a>
      <a href = "companiesVisited" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Companies Visited</a>
      <a href = "placements" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Placement Procedure</a>
      <a href = "contact" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Contact</a>
    </div>
  )
}
