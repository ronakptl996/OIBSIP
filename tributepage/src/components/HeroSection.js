import React from "react";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroContainer">
        <div className="heroImg">
          <img src="/apjabdulkalamsir.jpg" alt="" />
        </div>
        <div className="heroText">
          <h2>Dr. A P J Abdul Kalam</h2>
          <p>The Missile Man Of India</p>
          <div className="slide"></div>
          <div className="since">1931 - 2015</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
