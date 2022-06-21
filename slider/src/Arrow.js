import React from "react";
import { arrows } from "./arrows";

function Arrow({ changeCurrentSlide }) {
  const changeSlide = (num) => {
    changeCurrentSlide(num);
  };

  return (
    <div className="arrow-container">
      <div className="arrow-left">
        <img
          src={arrows.left}
          alt=""
          onClick={() => {
            changeSlide(-1);
          }}
        />
      </div>
      <div className="arrow-right">
        <img
          src={arrows.right}
          alt=""
          onClick={() => {
            changeSlide(1);
          }}
        />
      </div>
    </div>
  );
}

export default Arrow;
