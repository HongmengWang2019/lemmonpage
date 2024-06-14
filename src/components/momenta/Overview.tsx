import React from "react";
import "../../styles/work.css";
import sessionSplit from "../../assets/sessionSplit.png";
import solutioncover from "../../assets/momenta/solutioncover.png";

interface OverviewProps {
  id: string;
}

const Overview: React.FC<OverviewProps> = (props) => {
  const { id } = props;

  return (
    <>
      <div id={id} className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">Overview</div>
            <div className="work-session-body">
              Smart Valet Parking(SVP) is an in-vehicle solution designed to
              autonomously handle the parking process and prepare for departure.
              It can be activated within the vehicle(HMI) or remotely(mobile).
            </div>
          </div>
          <div className="work-frame-col">
            <div className="work-frame-3col-each">
              <div className="work-session-head">My Role</div>
              <div className="work-session-body">Product designer</div>
              <div className="work-session-body-small">
                I contributed to the end-to-end design process, starting from
                hypothesis generation, conducting contextual inquiries,
                ideation, creating prototypes, and ultimately delivering the
                final product.
              </div>
            </div>
            <div className="work-frame-3col-each">
              <div className="work-session-head">Timeline</div>
              <div className="work-session-body">4 month</div>
              <div className="work-session-body-small">
                (with other projects)
              </div>
            </div>
            <div className="work-frame-3col-each">
              <div className="work-session-head">Team</div>
              <div className="work-session-body">Me (Product designer)</div>
              <div className="work-session-body-small">
                1 product manager
                <br />2 software engineers
                <br />1 senior product designer
              </div>
            </div>
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-info"></div>
          <div className="work-frame-1row">
            <div className="work-session-head">Problem</div>
            <div className="work-session-body">
              Drivers expressed frustration with the time it took to park and
              the distance from the parking spot to their destination.
            </div>
            <div className="work-session-body-small">
              "The parking lot is too big."
              <br />
              "Cannot recall the parking spot."
              <br />
              "Inconvenient for heavy belongings."
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Imagine if you are able to have your car park itself and summon it
              whenever you need it.
            </div>
          </div>
        </div>
      </div>

      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">Solution</div>
            <div className="work-session-body">
              Smart Valet Parking(SVP) is designed to autonomously park the car
              in a parking lot and send the car to the driver at a designated
              location upon summoning.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={solutioncover} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
