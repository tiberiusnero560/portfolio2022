import React from 'react'
import '../css/MobileStyles.css'

const Footer = () => {
  return (
    <div className='footer-outercontainer'>
        <div className='footer-container'>
            <ul className="social-list">
            
              
                <li>
                    <a href="mailto:kyle.leblanc88@gmail.com?subject=" className="footer__link">
                        <button className="contact-button">Contact</button>
                    </a>
                </li>
               
            </ul>

        </div>
    </div>
  )
}
     

export default Footer