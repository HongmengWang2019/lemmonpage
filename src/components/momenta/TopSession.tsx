import React from "react";
import titlePic from "../../assets/momenta/titlePic.png";
import "../../styles/work.css";

const TopSession = () => {
  return (
    <div className="work-session-frame">
      <div className="work-title-frame-outer">
        <div className="work-title-frame-inner">
          <div className="work-title">[Mobile - HMI] SMART VALET PARKING</div>
          <div className="work-title-sub">Momenta</div>
        </div>
      </div>
      <div className="work-pic-frame-outer">
        <div className="work-pic-frame-inner">
          <img className="work-pic" src={titlePic} />
        </div>
      </div>
    </div>
  );
};

export default TopSession;
