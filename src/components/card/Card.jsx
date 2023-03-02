import React from "react";
import "./card.scss";
import { motion } from "framer-motion";
import card from "../../assets/card.png";

const Card = ({ solutionRef }) => {
  return (
    <div ref={solutionRef} className="card" data-aos="zoom-in">
      <div className="container">
        <div className="info">
          <h1 className="title">
            Find a better <span className="card-deal">card deal</span> in few
            easy steps.
          </h1>
          <p className="desc">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <motion.button whileHover={{ scale: 1.06 }} className="btn">
            Get Started
          </motion.button>
        </div>
        <img className="card" src={card} alt="" />
      </div>
    </div>
  );
};

export default Card;
