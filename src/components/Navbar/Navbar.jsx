import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavSection } from './Navbar.st';
import EliteLogo from "../../assets/elite-logo.svg";

const Navbar = () => {
    // State to handle the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

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
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={EliteLogo} alt="Elite Logo" />
                </Link>
            </div>

            {/* Hamburger icon for mobile/tablet */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
            </div>

            {/* Nav links with dynamic class for mobile visibility */}
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="nav-links"
                        onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                    >
                        {link.text}
                    </Link>
                ))}
            </nav>
        </NavSection>
    );
};

export default Navbar;