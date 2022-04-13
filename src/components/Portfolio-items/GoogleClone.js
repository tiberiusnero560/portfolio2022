import React from 'react';
import '../../css/Portfolio-itemStyles.css';

const GoogleClone = () => {
  return (
    <div className='googleclone-outercontainer'> 
        <div className='googleclone-container'>
          <div className="googleclone-container--titlecontainer">
            <h1 className='googleclone-container--title'>Google Clone</h1>
          </div>
          
            <div className="googleclone-container--gridcontainer">
                <div className="googleclone-container--griditem">
                    <img className='googleclone-griditem--img' src={require('../../assets/portfolio-items/GoogleClone.png')} alt="Portfolio Site" >
                    </img>

                    <img className='googleclone-griditem--img' src={require('../../assets/portfolio-items/GoogleClone-search-results.png')} />

                    <a className='googleclone-viewsite--link' href='https://leblanc-google-clone.netlify.app/'>
                        <p>View live site</p>
                    </a>
                </div>
                <div className="googleclone-container--griditem2">
                    <p className='googleclone-container--body'>
                        <h3>Purpose:</h3>
                        <p className='googleclone-container--body'>
                            This is a web app I built for my portfolio. It is a clone of the Google search engine.
                        </p>
                        <h3>Technology:</h3>
                        <p className='googleclone-container--body'>
                            React, React Router, CSS, Google Custom Search API
                        </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default GoogleClone