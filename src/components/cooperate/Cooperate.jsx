import React from "react";
import "./cooperate.scss";
import airbnb from "../../assets/airbnb.png";
import binance from "../../assets/binance.png";
import coinbase from "../../assets/coinbase.png";
import dropbox from "../../assets/dropbox.png";

const images = [airbnb, binance, coinbase, dropbox];

const Cooperate = () => {
  return (
    <div className="cooperate">
      <div className="container">
        {images.map((img, i) => (
          <img src={img} alt="" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Cooperate;
