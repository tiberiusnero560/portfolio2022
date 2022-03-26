import React from 'react';
import '../../css/Portfolio-itemStyles.css';

const LSS = () => {
  return (
    <div className='LSS-outercontainer'> 
        <div className='LSS-container'>
          <div className="LSS-container--titlecontainer">
            <h1 className='LSS-container--title'>LeBlanc Software Solutions</h1>
          </div>
          
            <div className="LSS-container--gridcontainer">
                <div className="LSS-container--griditem">
                    <img className='googleclone-griditem--img' src={require('../../assets/portfolio-items/LSSHeroImgLarge.jpg')} alt="Portfolio Site" >
                    </img>

                    <img className='LSS-griditem--img' src={require('../../assets/portfolio-items/LSS-hire-me.png')} />

                    <a className='LSS-viewsite--link' href='https:LeblancSoftwareSolutions.com'>
                        <p>View live site</p>
                    </a>
                </div>
                <div className="LSS-container--griditem2">
                    <p className='googleclone-container--body'>
                        <h3>Purpose:</h3>
                        <p className='LSS-container--body'>
                            This is the business website for my new company, LeBlanc Software Solutions. It provides Web and App development services as well as IT consulting. 
                        </p>
                        <h3>Technology:</h3>
                        <p className='LSS-container--body'>
                            React, React Router, CSS
                        </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default LSS