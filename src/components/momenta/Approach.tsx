import React from "react";
import "../../styles/work.css";
import persona from "../../assets/momenta/Persona.jpg";
import brainstorm from "../../assets/momenta/potentialoptions.png";
import tailor from "../../assets/momenta/userflow(white).png";

interface ApproachProps {
  id: string;
}

const Approach: React.FC<ApproachProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Brainstorming & conceptual ideas
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">
              Target user - drivers who loves to explore new driving experience
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={persona} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">
              Before clearing the fog, I try to list all the potential options
              users may need to decide during the completed user journey.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={brainstorm} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">Tailor</div>
            <div className="work-session-body">
              Walk through the sequence of actions drivers may take to
              accomplish tasks.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={tailor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;
