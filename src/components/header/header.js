import React from 'react'
import './header.css'
import me from '../../assets/intro.png'
import HeaderSocials from './headerSocial'
import HeaderButton from './headerButton'

const header = () => {
  return (
    <header>
      <div class = 'container header__container'>
        <h5>Hello It's</h5>
        <h1>Jayasurya</h1>
        <h5 className='text-light'>
          Fullstack Developer
        </h5>
        <HeaderButton />
        <HeaderSocials />
        <div className='me'>
          <img src={me} alt='img' />
        </div>
      </div>
    </header>
  )
}

export default header