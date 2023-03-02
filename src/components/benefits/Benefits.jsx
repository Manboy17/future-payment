import React from "react";
import "./benefits.scss";
import star from "../../assets/Star.svg";
import security from "../../assets/Shield.svg";
import send from "../../assets/Send.svg";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    icon: star,
    title: "Rewards",
    description:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: 2,
    icon: security,
    title: "100 % Secured",
    description:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: 3,
    icon: send,
    title: "Balance Transfer",
    description:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

const Benefits = ({ featuredRef }) => {
  return (
    <div ref={featuredRef} className="benefits">
      <div className="container">
        <div className="left" data-aos="flip-left">
          <h1>
            You do the <span className="business">business</span>, we'll handle
            the money.
          </h1>
          <p className="desc">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <motion.button whileHover={{ scale: 1.06 }} className="btn">
            Get Started
          </motion.button>
        </div>
        <div className="right" data-aos="flip-right">
          {benefits.map((benefit) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="benefit"
              key={benefit.id}
            >
              <img src={benefit.icon} alt="" />
              <div className="information">
                <span className="title">{benefit.title}</span>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
