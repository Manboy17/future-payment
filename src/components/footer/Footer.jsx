import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.svg";
import instargam from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const icons = [instargam, facebook, twitter, linkedin];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="items">
          <div className="item">
            <img src={logo} alt="" className="footer__logo" />
            <p className="desc">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="item">
            <span className="header">Useful Links</span>
            <span className="link">Content</span>
            <span className="link">How it Works</span>
            <span className="link">Create</span>
            <span className="link">Explore</span>
            <span className="link">Terms & Services</span>
          </div>
          <div className="item">
            <span className="header">Community</span>
            <span className="link">Help Center</span>
            <span className="link">Partners</span>
            <span className="link">Suggestions</span>
            <span className="link">Blog</span>
            <span className="link">Newsletters</span>
          </div>
          <div className="item">
            <span className="header">Partner</span>
            <span className="link">Our Partner</span>
            <span className="link">Become a Partner</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="horizontal" />
          <div className="footer-info">
            <span className="info">
              Copyright &copy; {year} HooBank. All Rights Reserved.
            </span>
            <div className="social-media">
              {icons.map((icon, i) => (
                <img src={icon} key={i} className="icon" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
