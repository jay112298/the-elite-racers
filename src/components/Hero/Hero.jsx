import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import EliteLogo from "../../assets/elite-logo.svg"
import { HeroWrap } from './Hero.st'
import arrow from "../../assets/hero/explore.svg"
import heroCar from "../../assets/hero/rb17.png"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <HeroWrap>
      <nav>
        <div className="logo">
          <img src={EliteLogo} />
        </div>
        <div className="nav">
          <div className="nav-links">About</div>
          <div className="nav-links">Races</div>
          <div className="nav-links">Vehicles</div>
          <div className="nav-links">Contact</div>
          <div className="nav-links">Recruitments</div>
          <div className="nav-links">Partners</div>
        </div>
        <div className="account-dash">
          <div className="signup">SignUp</div>
          <div className="login">Login</div>
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
