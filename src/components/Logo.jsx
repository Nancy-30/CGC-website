import React from 'react'
import LogoImg from '../images/logo.svg'

export default function Logo() {

  return (
    <div className='flex justify-center p-3'>
      <img src={LogoImg} alt="logo" className='md:h-[100px] h-[60px] m-4'/>
    </div>
  )
}
