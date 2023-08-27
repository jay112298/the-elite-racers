import React from 'react'
import { NavSection } from './Navbar.st'
import EliteLogo from "../../assets/elite-logo.svg"

const Navbar = () => {
  return (
    <NavSection>
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
    </NavSection>
  )
}

export default Navbar