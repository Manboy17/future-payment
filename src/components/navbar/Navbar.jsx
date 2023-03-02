import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const links = ["Home", "About Us", "Features", "Solution"];

const Navbar = ({ homeRef, aboutRef, featuredRef, solutionRef }) => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const homeRefScroll = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  };

  const aboutRefScroll = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  };

  const featuredRefScroll = () => {
    featuredRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  };

  const solutionRefScroll = () => {
    solutionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  };

  const handleClick = (link) => {
    if (link === "Home") homeRefScroll();
    if (link === "About Us") aboutRefScroll();
    if (link === "Features") featuredRefScroll();
    if (link === "Solution") solutionRefScroll();
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current?.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="navbar" data-aos="fade-down">
      <div className="container">
        <img height={32} src={logo} alt="" />
        <div className={toggle ? "overlay" : "dispayNone"}>
          {toggle && (
            <div className="menu" ref={menuRef}>
              <ul>
                {links.map((link, i) => (
                  <li
                    onClick={() => handleClick(link)}
                    className="link_adp"
                    key={i}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <RxHamburgerMenu
          className="burger"
          onClick={() => setToggle(!toggle)}
        />
        <div className="links">
          <ul>
            {links.map((link, i) => (
              <li onClick={() => handleClick(link)} key={i} className="link">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
