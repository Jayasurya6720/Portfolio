import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skill from './components/skill/skill'
import Works from './components/works/works'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer' 

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Skill />
    <Works />
    <Contact />
    <Footer />
    </>
  )
}

export default App