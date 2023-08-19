import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        Footer Section
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <div>
      <li>
        <a
          href={link}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};
