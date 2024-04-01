import React from 'react'
import './about.css'
import me from '../../assets/1.jpg'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={me} alt='img' />
          </div>
        </div>

        <div className='about_content'>
          
          <p>Hi, I'm a Well-qualified Full Stack Developer familiar with a
            wide range of programming utilities and languages. Knowledgeable
            of backend and frontend development requirements with database management.
            Handles any part of the process with ease. Collaborative team player with a
            willingness to learn in and grow with the organization.</p>

            <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about