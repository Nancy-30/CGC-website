import React, { useEffect, useRef, useState } from 'react'
import LogoImg from '../images/logo.svg'
import ToggleMenu from './ToggleMenu.jsx'
import { AiOutlineMenu } from 'react-icons/ai'
// import {RxCross1} from 'react-icons/rx'

export default function Logo() {
  
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // when click outside the menu, hide the toggled nav bar
  const handleOutside = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)){
      setIsMenuOpen(false);
    }
  }

  useEffect(() =>{
    document.addEventListener('mousedown' , handleOutside);

    return () => {
      document.removeEventListener('mousedown' , handleOutside);
    }
  },[])

  return (
    <div className='flex md:justify-center justify-between p-3' ref={menuRef}>
      <img src={LogoImg} alt="logo" className='md:h-[150px] h-[60px] m-4'/>

      <AiOutlineMenu onClick= {handleToggleMenu} 
            className='cursor-pointer block md:hidden text-2xl z-20' />

            {
                isMenuOpen && 
                <ToggleMenu />
  
            }
    </div>
  )
}
