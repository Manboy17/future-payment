import React from "react";
import "./payment.scss";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import payment from "../../assets/bill.png";

const Payment = () => {
  return (
    <div className="payment" data-aos="flip-up">
      <div className="container">
        <img className="bill" src={payment} alt="" />
        <div className="info">
          <h1 className="title">
            Easily control your <span className="billing">billing</span> &
            invoicing.
          </h1>
          <p className="desc">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="methods">
            <img src={apple} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
