import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='portfolio-outercontainer'>
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
            <div className="portfolio-container--gridcontainer">
                <div className="portfolio-container--griditem">
                    <Link to='/GoogleClone' >
                        <img className='portfolio-griditem--img' src={require('../assets/portfolio-items/GoogleClone.png')} alt="Portfolio Site" />
                    </Link>
                    <p>
                        Google Clone
                    </p>
                </div>


                 <div className="portfolio-container--griditem">
                    <Link to='/LeblancSoftwareSolutions' >
                        <img className='portfolio-griditem--img' src={require('../assets/photos/LSS-promo-image.png')} alt="Portfolio Site" />
                    </Link>
                    <p>
                        LeBlanc Software Solutions
                    </p>
                </div>


                 <div className="portfolio-container--griditem">
                    <Link to='/CCPS109' >
                        <img className='portfolio-griditem--img' src={require('../assets/portfolio-items/CCPS109.png')} alt="Portfolio Site" />
                    </Link>
                    <p>
                        Ryerson CCPS109
                    </p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Portfolio