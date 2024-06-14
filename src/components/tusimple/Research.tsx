import React from "react";
import "../../styles/work.css";
import opportunity from "../../assets/tusimple/opportunityTS.png";
import researchM1 from "../../assets/tusimple/researchSessionTS.png";
import researchM2 from "../../assets/tusimple/researchMethodTS.png";
import researchResult from "../../assets/tusimple/researchSummaryTS.png";
import sessionSplit from "../../assets/sessionSplit.png";

interface ResearchProps {
  id: string;
}

const Research: React.FC<ResearchProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-gray">
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
              By observing user workflows, I discovered that users need to
              frequently reposition the layout of screen tools in order to
              properly arrange the outputs from 6 - 7 "CameraViewers."
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={opportunity} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-body">
              Is this a pain point? Are there other pain points regarding this
              tool?
            </div>
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-info"></div>
          <div className="work-frame-1row">
            <div className="work-session-head">Research summary</div>
            <div className="work-session-body">
              To build a concrete sense of direction on how users with different
              intentions use the tool.
            </div>
          </div>
          <div className="work-frame-col">
            <img className="work-frame-2col-each" src={researchM1} />
            <img className="work-frame-2col-each" src={researchM2} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">
              Clearing the fog - to understand the ways users work with.
            </div>
            <div className="work-session-body">
              Identified the users could be grouped into three main categories.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={researchResult} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
