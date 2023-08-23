import React from 'react'

import '../css/MobileStyles.css'

const HeroImage = () => {
  return (
    <div className='hero-container'>

      <div className="hero-container--content">
        <h1 className='hero-container--title hero-container--h1'>Hi, I'm <strong className='kyle'>Kyle</strong></h1>

        <h2 className='hero-container--body'>I'm a <strong>Full Stack Web Developer</strong> and <strong>UI/UX Designer</strong> based in Ottawa, Canada.</h2>
        <h2 className='hero-container--body'> This website is currently being rebuilt in NextJs with updated experience</h2>

      </div>
        <img className='heroimage-herocontainer--img' src={require('../assets/photos/HeroImage-1.jpg')} />


    </div>
  )
}

export default HeroImage