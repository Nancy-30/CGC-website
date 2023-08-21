import React from 'react'
import CircularProgressBar from './CircularProgressBar'

export default function PercentagePlaced() {

    const data = [
        {
            id : 1,
            year : 2020,
            percentage : 100,
            isongoing : null
        },
        {
            id : 2,
            year : 2021,
            percentage : 100,
            isongoing : null
        },
        {
            id : 3,
            year : 2022,
            percentage : 92,
            isongoing : null
        },
        {
            id : 4,
            year : 2023,
            percentage : 68,
            isongoing : "ongoing"
        },

    ]

  return (
    <div className='mt-16'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Percentage eligible students placed</h1>
      
      <CircularProgressBar />
    </div>
  )
}
