import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container skill_container'>

        <div className='skill_frontend'>
          <h3>Frontend Development</h3>
          <div className='skill_content'>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>HTML5</h4> </div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>Css3</h4> </div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>Javascript</h4> </div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>Bootstrap</h4> </div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>React JS</h4></div> </article>
          </div>
        </div>

        <div className='skill_backend'>
        <h3>Backend Development</h3>
          <div className='skill_content'>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>MY SQL</h4> </div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>MongoDB</h4> </div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>Express JS</h4></div> </article>
            <article className='skill_details'> <BsPatchCheckFill className='icon' /> <div> <h4>AWS</h4> </div> </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default skill