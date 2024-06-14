import React from "react";
import afterUAT1 from "../../assets/tusimple/afterUAT1.png";
import afterUAT2 from "../../assets/tusimple/afterUAT2.png";
import afterUAT3 from "../../assets/tusimple/afterUAT3.png";
import afterUAT4 from "../../assets/tusimple/afterUAT4.png";
import afterUAT5 from "../../assets/tusimple/afterUAT5.png";
import timeline from "../../assets/tusimple/timeline.png";
import sessionSplit from "../../assets/sessionSplit.png";

interface ImprovementsProps {
  id: string;
}

const Improvements: React.FC<ImprovementsProps> = (props) => {
  const { id } = props;
  return (
    <>
      <div id={id} className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Minor improvements before official release
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              Header might be collapsed.
              <br />
              Position the specific functions within the window to achieve{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                100% feature visibility{" "}
              </span>{" "}
              for users.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={afterUAT1} />
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              Use text labels instead of ambiguous icons for{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                easy read at first glance{" "}
              </span>{" "}
              .
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={afterUAT2} />
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              Replace tabs with dropdown menus to{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                improve user awareness{" "}
              </span>{" "}
              when selecting specific objects.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={afterUAT3} />
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              Expose the action buttons to improve{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                50% feature visibility{" "}
              </span>{" "}
              for users.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={afterUAT4} />
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              Simplify the task from{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                14 steps{" "}
              </span>{" "}
              to{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                9 steps{" "}
              </span>{" "}
              , resulting in a{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                36% improvement{" "}
              </span>{" "}
              in interaction efficiency.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={afterUAT5} />
          </div>
        </div>
      </div>
      <div className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              How will we process from here?
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={timeline} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-body-big">
              The internal users have provided positive feedback on Advanced
              CameraViewer, resulting in a{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "#FFFCF7",
                }}
              >
                {" "}
                significant improvement of 40%{" "}
              </span>{" "}
              in time efficiency for one case setting.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Improvements;
