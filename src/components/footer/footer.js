import React from 'react'
import './footer.css'
import { FaFacebookF} from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter} from 'react-icons/io'


const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>SURYA</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#skill'>Skill</a></li>
        <li><a href='#works'>Works</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='http://facebook'><FaFacebookF /></a>
        <a href='http://instagram'><FiInstagram /></a>
        <a href='http://twitter'><IoLogoTwitter /> </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Surya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer