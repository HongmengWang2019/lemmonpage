import React from "react";
import "../../styles/work.css";
import solutionjourney from "../../assets/momenta/reviseWorkflow.png";
import sessionSplit from "../../assets/sessionSplit.png";
import step1 from "../../assets/momenta/solution1.png";
import step2 from "../../assets/momenta/solution2.png";
import step3 from "../../assets/momenta/activate.gif";
import step4 from "../../assets/momenta/parking.gif";
import step5 from "../../assets/momenta/parking_completion.gif";
import step6 from "../../assets/momenta/summon.gif";

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
              User journey clarification and final design solutions
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">
              Revise the user workflow to inform the design.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={solutionjourney} />
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">
              Key features of the final design and why it works
            </div>
          </div>
          <div className="work-frame-1row-left70">
            <div className="text-stone-50/30 text-xl sm:leading-9 sm:text-3xl font-['satoshi-bold']">
              SCENARIO
            </div>
            <div className="grow shrink text-stone-50/60 text-lg sm:text-xl font-['satoshi-bold'] italic">
              Jeffery, who uses automatic parking to commute to and from work
              every day, navigates to the company's parking lot this morning in
              a hurry. Every day Jeffery will use Momenta's parking NOP, smart
              park-in and smart summon products to park his car without worry.
              Jeffery has already set up the parking lot map and the default
              drop-off and pick-up points making it easy to use each time.
            </div>
          </div>
          <div className="work-frame-1row-left70">
            <div className="work-session-head">1 Arrive at the parking lot</div>
            <div className="grow shrink text-stone-50/60 text-base sm:text-lg font-['satoshi-medium'] italic">
              When arriving at the parking lot, SVP is activated as setting and
              the car is piloting directly to the default closest drop-off
              point.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={step1} />
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-1row">
              <div className="work-session-head">2 Confirm drop-off point</div>
              <div className="work-session-body">
                Jeffery could also change the default position by dragging the
                target icon to other positions.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-each" src={step2} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">3 Get off & Connecting</div>
              <div className="work-session-body">
                Jeffery gets off his vehicle and opens the app from his phone
                which has automatically synced the status. <br /> <br /> He
                swipes to activate Smart Valet Parking. The app has a status to
                connect with the vehicle.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={step3} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">
                4 Hold to park automatically
              </div>
              <div className="work-session-body">
                Jeffery is leaving the parking lot with holding the button and
                watching the parking process with the main perspective views and
                an AVM. <br /> <br />‍ *Users should have the control of
                starting or stopping their vehicles through apps based on
                National Transportation Regulations.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={step4} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">5 Parking completion</div>
              <div className="work-session-body">
                Jeffery receives the parking location from the app after
                completing with an instructive map.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={step5} />
            </div>
          </div>
        </div>
        <div className="work-frame-info">
          <div className="work-frame-col-left">
            <div className="work-frame-2col-text-w">
              <div className="work-session-head">6 Summon</div>
              <div className="work-session-body">
                Jeffery would like to leave there after his work. He summons the
                car and go to the pick-up point.
              </div>
            </div>
            <div className="work-frame-col">
              <img className="work-frame-2col-pic-h" src={step6} />
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Next - Future development
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              Smart Valet Parking (SVP) focuses on the parking aspect of the
              autonomous driving process. In the next step, we would work on a
              broader user scenario of autonomous pilot for urban area. Our
              biggest concern is how to connect the urban auto-pilot area with
              the parking process to make the experience more coherent and
              smooth.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
