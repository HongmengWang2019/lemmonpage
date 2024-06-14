import React from "react";
import "../../styles/work.css";
import contextInquiry from "../../assets/momenta/scenario.png";
import discovery1 from "../../assets/momenta/recognition.png";
import discovery2 from "../../assets/momenta/expectation.png";
import discovery3 from "../../assets/momenta/failure.png";
import designPrinciple from "../../assets/momenta/designPrinciple.png";

interface ClarificationProps {
  id: string;
}

const Clarification: React.FC<ClarificationProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Build concrete sense of user need
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">Context inquiry</div>
            <div className="work-session-body">
              We invited around 20+ people to get in a vehicle with a rapid
              prototype for simulating a real scenario. We observed and recorded
              their reactions and feedback.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={contextInquiry} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">Discovery</div>
          </div>
          <div className="work-frame-col">
            <img className="work-frame-3col-each-pic" src={discovery1} />
            <img className="work-frame-3col-each-pic" src={discovery2} />
            <img className="work-frame-3col-each-pic" src={discovery3} />
          </div>
          <div className="work-frame-col-left">
            <div className="work-session-head">
              All leads to - design principles:
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

export default Clarification;
