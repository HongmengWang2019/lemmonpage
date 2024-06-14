import React from "react";
import "../../styles/work.css";
import sessionSplit from "../../assets/sessionSplit.png";
import research1 from "../../assets/momenta/marketFit.png";
import research2 from "../../assets/momenta/userPattern.png";

interface ResearchProps {
  id: string;
}

const Research: React.FC<ResearchProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">How do we get there?</div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">The opportunity</div>
            <div className="work-session-body">
              Hypothesis on common driver frustrations:
              <br />
              <br /> 1. finding parking takes too long,
              <br /> 2. spots are far from destinations, and
              <br /> 3. difficulties recalling spots or carrying heavy items.
            </div>
            <div className="work-session-head">
              Are there any solutions available in the market for these issues?
              Do individuals perceive these as their primary pain points?
            </div>
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">Research summary</div>
          </div>
          <div className="work-frame-info">
            <div className="work-frame-col-left">
              <div className="work-frame-col">
                <img className="work-frame-2col-each" src={research1} />
              </div>
              <div className="work-frame-col">
                <img className="work-frame-2col-each" src={research2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
