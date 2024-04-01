import React from 'react'
import './nav.css'
import { ImHome } from 'react-icons/im'
import { FaUser } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { BsFolder2Open } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}> <ImHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav ==="#about" ? 'active' : ''}> <FaUser/> </a>
      <a href='#skill' onClick={() => setActiveNav('#skill')}  className={activeNav === '#skill' ? 'active' : ''}> <BsPencilSquare /> </a>
      <a href='#works' onClick={() => setActiveNav('#works')}  className={activeNav === '#works' ? 'active' : ''}> <BsFolder2Open /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
    </nav>
  )
}

export default Nav