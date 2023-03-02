import React from "react";
import "./try.scss";
import { motion } from "framer-motion";

const Try = () => {
  return (
    <div className="try" data-aos="fade-up">
      <div className="container">
        <div className="content">
          <div className="service">
            <h1 className="title">
              Let's try our <span className="service-text">service</span> now!
            </h1>
            <p className="desc">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <motion.button whileHover={{ scale: 1.03 }} className="btn">
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Try;
