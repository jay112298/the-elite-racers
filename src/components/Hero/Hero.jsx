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
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Races', href: '/races' },
  { name: 'Vehicles', href: 'vehicles' },
  { name: 'Contact', href: '/contacts' },
  { name: 'Recruitments', href: '/recruitments' },
  { name: 'Partners', href: '/partners' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <HeroWrap blob1={Blob1} blob2={Blob2} x={X}>
      <nav>
        <div className="logo">
          <img src={EliteLogo} />
        </div>
        <div className="nav">
          {navigation.map( (navComp) => <div className="nav-links"><Link to={navComp.href}>{navComp.name}</Link></div>)}
          {/* <div className="nav-links">About</div>
          <div className="nav-links">Races</div>
          <div className="nav-links">Vehicles</div>
          <div className="nav-links">Contact</div>
          <div className="nav-links">Recruitments</div>
          <div className="nav-links">Partners</div> */}
        </div>
        <div className="account-dash">
          <div className="signup"><Link to="/signup">SignUp</Link></div>
          <div className="login"><Link to="/login">Login</Link></div>
        </div>
      </nav>
      <div className="hero-content">
        <div className="top">
          <div className="left">
            <div className="title">Welcome to the world of FSAE</div>
            <div className="body">
              <div className="shape"></div>
              <div className="text">It is an offical website of <span>The Elite Racers</span> where you can find out our progress of FSAE standings,open recruitments and much more.</div>
            </div>
            <div className="explore"><div>Explore More</div><img src={arrow} alt="" /></div>
          </div>
          <div className="line"></div>
          <div className="right"><span>Drive</span> like you stole it.</div>
        </div>
        <div className="car-img">
          <img src={heroCar} alt="" />
        </div>
      </div>
    </HeroWrap>
  )
}
