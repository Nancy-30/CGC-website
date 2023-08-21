import React from 'react'
import RajendraSir from '../images/Rajendra hegadi sir.svg'
export default function TeamMembers() {
  const TeamMembersDetails = [
    {
      id: 1,
      name: "Shreyas Bulbule 1",
      img: RajendraSir,
      role: "Website Lead"
    },
    {
      id: 2,
      name: "Shreyas Bulbule 2",
      img: RajendraSir,
      role: "UI/UX Designer"
    },
    {
      id: 3,
      name: "Shreyas Bulbule 3",
      img: RajendraSir,
      role: "Frontend Developer"
    },
    {
      id: 4,
      name: "Shreyas Bulbule 4",
      img: RajendraSir,
      role: "Frontend Developer"
    },
    {
      id: 5,
      name: "Shreyas Bulbule 5",
      img: RajendraSir,
      role: "Frontend Developer"
    },
    {
      id: 6,
      name: "Shreyas Bulbule 6",
      img: RajendraSir,
      role: "Frontend Developer"
    },

  ]
  return (
    <div>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold' >Website Team</h1>
      <div className='flex flex-wrap gap-7 md:gap-12 m-10 justify-center'>
        {TeamMembersDetails.map(data => (
          <div key={data.id} className='flex flex-col justify-center items-center relative overflow-hidden'>
            <img src={data.img} alt = "member of the club" className=' lg:h-[300px] xl:h-[400px]'/>
            <div className='absolute w-full text-center bottom-8 h-[35px] md:h-[50px] md:text-2xl p-1 md:p-2 font-medium text-white bg-zinc-700'>{data.name}
            </div>
            <div className='text-neavyBlue mt-3 font-medium'>{data.role}</div>
          </div>
        ))}
      </div>

    </div>
  )
}
