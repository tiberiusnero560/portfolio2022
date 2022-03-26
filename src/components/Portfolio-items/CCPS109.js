import React from 'react';
import '../../css/Portfolio-itemStyles.css';

const CCPS109 = () => {
  return (
    <div className='CCPS109-outercontainer'> 
        <div className='CCPS109-container'>
          <div className="CCPS109-container--titlecontainer">
            <h1 className='CCPS109-container--title'>Ryerson CCPS109</h1>
          </div>
          
            <div className="CCPS109-container--gridcontainer">
                <div className="CCPS109-container--griditem">
                    <img className='CCPS109-griditem--img' src={require('../../assets/portfolio-items/CCPS109.png')} alt="Portfolio Site" >
                    </img>

                    <img className='CCPS109-griditem--img' src={require('../../assets/portfolio-items/CCPS109Problems.png')} />

                   
                </div>
                <div className="CCPS109-container--griditem2">
                    <p className='CCPS109-container--body'>
                        <h3>Purpose:</h3>
                        <p className='CCPS109-container--body'>
                            The first course in the Ryerson Computer Science program. This course is done in Python, and is highly focused on algorithms and data structures, and math concepts such as discrete math. 
                        </p>
                        <h3>Technology:</h3>
                        <p className='CCPS109-container--body'>
                            Python, VSCode, Python Tutor
                        </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default CCPS109