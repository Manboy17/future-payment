import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <div className="info" data-aos="flip-left">
      <div className="container">
        <div className="item">
          <p className="number">3800+</p>
          <span className="clients">USER ACTIVE</span>
        </div>
        <div className="item">
          <p className="number">230+</p>
          <span className="clients">TRUSTED BY COMPANY</span>
        </div>
        <div className="item">
          <p className="number">$230M+</p>
          <span className="clients">TRANSACTION</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
