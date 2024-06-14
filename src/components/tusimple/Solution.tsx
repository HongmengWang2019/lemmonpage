import React from "react";
import "../../styles/work.css";
import prototype1 from "../../assets/tusimple/prototype1.png";
import prototype2 from "../../assets/tusimple/prototype2.png";
import prototype3 from "../../assets/tusimple/prototype3.png";

interface SolutionProps {
  id: string;
}

const Solution: React.FC<SolutionProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Every function for its users
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">For regular users</div>
            <div className="work-session-body">
              To ensure a seamless product release for regular users, I opted to
              retain the original workflow and interface from the previous
              version, thus avoiding any disruption to their accustomed
              behaviors. This approach is anticipated to facilitate a smooth
              transition to the new product iteration.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={prototype1} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">For intermediate users</div>
            <div className="work-session-body">
              Within the settings panel, users will now have the capability to
              select multiple data sources and effectively manage templates.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={prototype2} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">For advanced users</div>
            <div className="work-session-body">
              Within the data panel, a simple click on objects will grant users
              access to deeper underlying data. This experience is further
              enhanced by streamlined search and filtering functionalities,
              enabling users to easily retrieve the information they need.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={prototype3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
