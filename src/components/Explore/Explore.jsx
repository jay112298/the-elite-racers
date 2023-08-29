import React from 'react'
import { ExploreSec } from './Explore.st'
import Victory from "../../assets/home/victory.svg"


const Explore = () => {
  return (
    <ExploreSec>
        <div className="content">
            <div className="explore">
                <div className="speed"><span>Speed</span><br/>is our language</div>
                <img src={Victory} alt="Victory typography" className='victory'/>
                <div className="destination">is our <span>Destination.</span></div>
                <div className="brief">Dive into the thrilling world of Formula One, guided by our exceptional team's engineering brilliance, strategic mastery, and passion for speed. </div>
                <div className="cta">Explore Team</div>
            </div>
        </div>
        
        <div className="fsae">
            <div className="header">
                <div className="future"></div>
                <div className="ter-logo"></div>
            </div>
            <div className="content"></div>
        </div>
    </ExploreSec>
  )
}

export default Explore