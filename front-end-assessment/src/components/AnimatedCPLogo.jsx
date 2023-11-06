import React, { Component } from "react";
import animatedCPLock from "../assets/icons/animated-cp-lock.svg";
import animatedCPCard from "../assets/icons/animated-cp-card.svg";

class AnimatedCPLogo extends Component {
  render() {
    return (
      <div className="cp-slideshow rounded-full h-20 w-20 sm:h-[96px] sm:w-[96px]">
        <img
          className={`slide-cp-lock h-20 w-20 sm:h-[96px] sm:w-[96px]`}
          src={animatedCPLock}
          alt="Credit Protection Lock Icon"
        />
        <img
          className={`slide-cp-card h-20 w-20 sm:h-[96px] sm:w-[96px]`}
          src={animatedCPCard}
          alt="Credit Card Icon"
        />
      </div>
    );
  }
}

export default AnimatedCPLogo;
