import React from 'react'
import { Race } from './Races.st'
import LogoSilver from "../../assets/ter-silver.png"

const Races = () => {
    const images = {
        one: "https://i.ytimg.com/vi/dKtKxy8zJC4/maxresdefault.jpg"
    }
  return (
    <Race backgroundImage={images.one}>
        <div className="header">
            <div className="shape"></div>
            <div className="title">Races</div>
        </div>
        <div className="divider"></div>
        <div className="info-section">
            <div className="calendar">
                <div className="text">2023<br /><span>Calendar</span></div>
                <div className="logo"><img src={LogoSilver} alt="Silver Logo TER" /></div>
            </div>
            <div className="venue">
                <div className="header">Upcoming <span>Event</span></div>
                <div className="body">
                    <div className="img"></div>
                </div>
                <div className="footer"><span>FSAE</span> India 2024</div>
            </div>
            <div className="dates">
                <div className="start"></div>
                <div className="end"></div>
            </div>
        </div>
    </Race>
  )
}

export default Races