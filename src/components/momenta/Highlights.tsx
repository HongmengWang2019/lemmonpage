import React from "react";
import "../../styles/work.css";
import highlight1 from "../../assets/momenta/solution1.png";
import highlight2 from "../../assets/momenta/solution2.png";
import highlight3 from "../../assets/momenta/solution3.png";
import highlight4 from "../../assets/momenta/activate.gif";
import highlight5 from "../../assets/momenta/parking.gif";
import highlight6 from "../../assets/momenta/parking_completion.gif";
import highlight7 from "../../assets/momenta/activate_summon.gif";
import highlight8 from "../../assets/momenta/summon.gif";

interface HighlightsProps {
  id: string;
}

const Highlights: React.FC<HighlightsProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">How does it work?</div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-1row">
              <div className="work-session-head">
                1. Engage the Smart Valet Parking
              </div>
              <div className="work-session-body">
                Press on the brake pedal and shift into 'P' when the vehicle is
                ready to engage the Smart Valet Parking function.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-each" src={highlight1} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-1row">
              <div className="work-session-head">
                2. Choose location to get off
              </div>
              <div className="work-session-body">
                Drag to pick the drop-off point.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-each" src={highlight2} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-1row">
              <div className="work-session-head">3. Get off the vehicle</div>
              <div className="work-session-body">
                Get off the vehicle and activate the Smart Valet Parking from
                mobile app.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-each" src={highlight3} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">
                4. Connect & activate from mobile
              </div>
              <div className="work-session-body">
                Use mobile to connect and swipe to activate the Smart Valet
                Parking.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={highlight4} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">5. Hold to park</div>
              <div className="work-session-body">
                Hold the button and watch the parking process with the main
                perspective views.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={highlight5} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">6. Parking complete</div>
              <div className="work-session-body">
                Receive the parking location after completion.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={highlight6} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">7. Activate summon</div>
              <div className="work-session-body">
                Activate the summon function when get close enough to the
                vehicle.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={highlight7} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">8. Hold to summon</div>
              <div className="work-session-body">
                Wait at the pick-up point and hold to summon the vehicle.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={highlight8} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
