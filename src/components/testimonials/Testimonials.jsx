import React from "react";
import "./testimonials.scss";
import quotes from "../../assets/quotes.svg";
import person1 from "../../assets/people01.png";
import person2 from "../../assets/people02.png";
import person3 from "../../assets/people03.png";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    img: quotes,
    testimonial:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    imgPerson: person1,
    name: "Herman Jensen",
    founder: "Founder & Leader",
  },
  {
    id: 2,
    img: quotes,
    testimonial:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    imgPerson: person2,
    name: "Steve Mark",
    founder: "Founder & Leader",
  },
  {
    id: 3,
    img: quotes,
    testimonial:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    imgPerson: person3,
    name: "Kenn Gallagher",
    founder: "Founder & Leader",
  },
];

const Testimonials = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="testimonials">
      <div className="container">
        <div className="upper">
          <h1 className="title" data-aos="zoom-in-right">
            What people are <span className="saying">saying</span> about us
          </h1>
          <p className="desc" data-aos="zoom-in-left">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="bottom">
          {testimonialsData.map((testimonial) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="testimonial"
              key={testimonial.id}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={testimonial.img} alt="" />
              <p className="feedback">{testimonial.testimonial}</p>
              <div className="person">
                <img
                  height={48}
                  width={48}
                  src={testimonial.imgPerson}
                  alt=""
                />
                <div className="person__info">
                  <span className="name">{testimonial.name}</span>
                  <span className="founder">{testimonial.founder}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
