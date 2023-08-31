import React from 'react'
import { Race } from './Races.st'
import LogoSilver from "../../assets/ter-silver.png"
import F12021 from "../../assets/home/f1-2021.png"
import DateShape from "../../assets/home/date-shape.svg"

const Races = () => {
    const images = {
        one: "https://i.ytimg.com/vi/dKtKxy8zJC4/maxresdefault.jpg"
    }
  return (
    <Race backgroundImage={images.one} f12021={F12021}>
        <div className="header">
            <div className="shape"></div>
            <div className="title">Races</div>
        </div>
        <div className="divider"></div>
        <div className="info-section">
            <div className="calendar">
                <div className="car-wrapper">
                    <div className="text">2023<br /><span>Calendar</span></div>
                    <div className="logo"><img src={LogoSilver} alt="Silver Logo TER" /></div>
                </div>
            </div>
            <div className="venue">
                <div className="header">Upcoming <span>Event</span></div>
                <div className="body">
                    <div className="img"></div>
                </div>
                <div className="footer"><span>FSAE</span> India 2024</div>
            </div>
            <div className="dates">
                <div className="start">
                    <div className="text">From</div>
                    <div className="date">
                        <div className="num">8</div>
                        <div className="shape"><img src={DateShape} alt="Shape Drift" /></div>
                    </div>
                    <div className="month">July</div>
                </div>
                <div className="end">
                    <div className="text">Ends <span>On</span></div>
                    <div className="date">
                        <div className="num">10</div>
                        <div className="shape"><img src={DateShape} alt="Shape Drift" /></div>
                    </div>
                    <div className="month">July</div>
                </div>
            </div>
        </div>
    </Race>
  )
}

export default Races