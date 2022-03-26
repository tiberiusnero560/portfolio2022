import React from 'react'
import About from './About'
import HeroImage from './HeroImage'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <HeroImage />
        <About />
        <Skills />
        <Portfolio />
        <Footer />


    </div>
  )
}

export default Homepage