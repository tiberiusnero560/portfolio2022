import React from 'react'
import '../css/MobileStyles.css'
import '../css/DesktopStyles.css'

const Skills = () => {
  return (
      <div className='skills-outercontainer'>
            <h1>My Skills</h1>
        <div className='skills-container'>
            <div className="skills-container--griditem">
                <h2>Web Dev</h2>
                <p className='skills-container--body'>Website development such as portfolio site, blog, and e-commerce site. I can take your idea and turn it into a reality. I focus on the MERN stack mainly React. React is used for user interfaces and single page apps.</p>
            </div>

            <div className="skills-container--griditem">
                <h2>App Dev</h2> 
                <p className='skills-container--body'>Cross-platform apps using React Native. That means iOS, Android and Web Apps with a single maintainable codebase. Flutter is similar but my focus has been React.</p>
            </div>

            <div className="skills-container--griditem">
                <h2>IT Consulting</h2>
                <p className='skills-container--body'>I built a Homelab to learn enterprise grade software and networking. I have expanded to 5 servers now. I have a lot to learn, but if you're a small business to, I can get you going.</p>
            </div>

        </div>



    </div>
  )
}

export default Skills