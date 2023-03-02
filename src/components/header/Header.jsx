import React from "react";
import "./header.scss";
import discount from "../../assets/Discount.svg";
import robot from "../../assets/robot.png";

const Header = ({ homeRef }) => {
  return (
    <header ref={homeRef}>
      <div className="container">
        <div className="left" data-aos="fade-right">
          <div className="discount">
            <img src={discount} alt="" />
            <span className="text">
              20% DISCOUNT FOR <p>1 MONTH</p> ACCOUNT
            </span>
          </div>
          <div className="text">
            <h1>
              The Next <p className="gradient">Generation</p> Payment Method
            </h1>
          </div>
          <div className="desc">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </div>
        </div>
        <img src={robot} alt="" className="robot" data-aos="fade-left" />
      </div>
    </header>
  );
};

export default Header;
