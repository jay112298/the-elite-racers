import React from 'react';
import { Link } from 'react-router-dom';
import { NavSection } from './Navbar.st';
import EliteLogo from "../../assets/elite-logo.svg";

const Navbar = () => {
  const navLinks = [
    { to: '/about', text: 'About' },
    { to: '/vehicle', text: 'Vehicle' },
    { to: '/team', text: 'Team'},
    { to: '/achievements', text: 'Achievements' },
    { to: '/recruitments', text: 'Recruitments' },
    { to: '/partners', text: 'Partners' },
    { to: '/merchandise', text: 'Merchandise'},
  ];

  return (
    <NavSection>
      <div className="logo">
        <Link to="/">
          <img src={EliteLogo} alt="Elite Logo" />
        </Link>
      </div>
      <nav className="nav">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="nav-links"
            style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </NavSection>
  );
};

export default Navbar;