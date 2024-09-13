import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import EliteLogo from "../../assets/elite-logo.svg"
import { HeroWrap } from './Hero.st'
import arrow from "../../assets/hero/explore.svg"
import heroCar from "../../assets/hero/rb17.png"
import Blob1 from "../../assets/hero/dot1.svg"
import Blob2 from "../../assets/hero/dot2.svg"
import X from "../../assets/hero/x.svg"
import { useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Vehicle', href: '/vehicle' },
  { name: 'Team', href: '/team' },
  { name: 'Recruitments', href: '/recruitments' },
  { name: 'Partners', href: '/partners' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate('/about')
  }

  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <HeroWrap blob1={Blob1} blob2={Blob2} x={X}>
      <nav className="flex justify-center">
        <div className="nav flex">
          {navigation.slice(0, 3).map((navComp) => (
            <div key={navComp.name} className="nav-links">
              <a href={navComp.href}>{navComp.name}</a>
            </div>
          ))}
        </div>
        <div className="logo" onClick={handleLogoClick}>
          <img src={EliteLogo} />
        </div>
        <div className="nav flex">
          {navigation.slice(3).map((navComp) => (
            <div key={navComp.name} className="nav-links">
              <a href={navComp.href}>{navComp.name}</a>
            </div>
          ))}
        </div>
      </nav>
      <div className="hero-content flex flex-col items-center justify-center">
        <div className="top flex flex-col items-center">
          <div className="left">
            <div className="title">Welcome to the world of FSAE</div>
            <div className="body">
              <div className="shape"></div>
              <div className="text">
                This is the offical website of <span>The Elite Racers</span> where
                you can find out our progress of FSAE standings,open
                recruitments and much more.
              </div>
            </div>
            <button className="explore-btn" onClick={handleExploreClick}>
              Explore More
              <img src={arrow} alt="" />
            </button>
          </div>
          <div className="line"></div>
          <div className="right">
            <span>Drive</span> like you stole it.
          </div>
        </div>
        <div className="car-img">
          <img src={heroCar} alt="" />
        </div>
      </div>
    </HeroWrap>
  )
}