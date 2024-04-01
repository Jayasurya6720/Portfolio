import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/feed/' target='_blank'> <BsLinkedin /> </a>
        <a href='https://www.github.com' target='_blank'> <FaGithub /> </a>
        <a href='https://www.twittter.com' target='_blank'> <BsTwitter /> </a>
    </div>
  )
}

export default HeaderSocials