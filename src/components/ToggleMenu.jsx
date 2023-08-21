import React from 'react'

export default function ToggleMenu() {
  return (
    <div className='bg-lightGray flex flex-col gap-4 p-3 absolute top-10 right-2 z-10 rounded-xl md:hidden shadow-lg shadow-[#c5c7c4]'>
      <a href = "home" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Home</a>
      <a href = "companiesVisited" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Companies Visited</a>
      <a href = "placements" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Placement Procedure</a>
      <a href = "contact" className='hover:bg-[#c5c7c4] p-1 rounded-xl pl-5 pr-5'>Contact</a>
    </div>
  )
}
