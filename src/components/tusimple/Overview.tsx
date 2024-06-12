import React from "react";
import "../../styles/work.css";
import problemTS from "../../assets/tusimple/problemTS.png";
import solutionTS from "../../assets/tusimple/solutionTS.png";
import solutionSub1 from "../../assets/tusimple/Cut_for_data_panel.gif";
import solutionSub2 from "../../assets/tusimple/Cut_for_setting.gif";
import sessionSplit from "../../assets/tusimple/sessionSplit.png";

const Overview = () => {
  return (
    <>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">Overview</div>
            <div className="work-session-body">
              Advanced CameraViewer is a web-based all-in-one tool for
              streamlined data visualization, efficient data search and
              customization.
            </div>
          </div>
          <div className="work-frame-col">
            <div className="work-frame-3col-each">
              <div className="work-session-head">My Role</div>
              <div className="work-session-body">Product designer</div>
              <div className="work-session-body-small">
                I led the team through a holistic end-to-end design process,
                from generative research to analysis to ideation, iteration, and
                UAT after implementation.
              </div>
            </div>
            <div className="work-frame-3col-each">
              <div className="work-session-head">Timeline</div>
              <div className="work-session-body">3 month</div>
              <div className="work-session-body-small">
                (with other projects)
              </div>
            </div>
            <div className="work-frame-3col-each">
              <div className="work-session-head">Team</div>
              <div className="work-session-body">Me (Product designer)</div>
              <div className="work-session-body-small">
                1 product manager
                <br />1 software engineer
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
              Engineers(users) were frustrated by the limits of the previous
              tool "CameraViewer", that…
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={problemTS} />
          </div>
        </div>
      </div>
      <div className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Imagine a component that offers visualizations from various data
              sources and enables customizable data presentation.
            </div>
          </div>
        </div>
      </div>

      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">Solution</div>
            <div className="work-session-body">
              Advanced CameraViewer combines multiple windows for streamlined
              data visualization, enabling efficient data search and
              customization for improving work efficiency.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={solutionTS} />
          </div>
          <div className="work-frame-col">
            <img className="work-frame-2col-each" src={solutionSub1} />
            <img className="work-frame-2col-each" src={solutionSub2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
