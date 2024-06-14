import React from "react";
import "../../styles/work.css";
import designPrinciple from "../../assets/tusimple/designPrincipleTS.png";
import sessionSplit from "../../assets/sessionSplit.png";

interface InsightsProps {
  id: string;
}

const Insights: React.FC<InsightsProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Insights & opportunities
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">
              1. Provide users with a single, unified CameraViewer tool
            </div>
            <div className="work-session-body">
              Users want to ideally open 1 - 2 windows simultaneously, allowing
              efficient use of screen space without excessive occupation.
            </div>
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">
              2. Enhance the data manipulation
            </div>
            <div className="work-session-body">
              Users want to personalize the amalgamation of data and have the
              ability to save these configurations for future utilization.
            </div>
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">
              3. Empower users to approach to the data information
            </div>
            <div className="work-session-body">
              Users want to select any clickable spot in the view and then
              display data related to the selected marker(s). Additionally,
              incorporating a search functionality to locate specific objects
              within the view would enhance the user experience.
            </div>
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-col-left">
            <div className="work-session-head">
              These all leads to - design principles
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-each" src={designPrinciple} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
