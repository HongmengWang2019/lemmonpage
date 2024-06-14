import React from "react";
import afterUAT from "../../assets/tusimple/afterUAT.png";

interface UATProps {
  id: string;
}

const UAT: React.FC<UATProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              What happens after the upgrade?
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-1row">
              <div className="work-session-head">
                We did the UAT with several users to see their feedback and
                advice.
              </div>
              <div className="work-session-body">
                Users are enthusiastic about the solution, providing valuable
                feedback that enables rapid iteration and refinement prior to
                the official release.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-each" src={afterUAT} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UAT;
