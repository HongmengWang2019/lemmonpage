import React from "react";
import "../../styles/work.css";
import sessionSplit from "../../assets/tusimple/sessionSplit.png";
import trailor from "../../assets/tusimple/tailorTS.png";
import featureList from "../../assets/tusimple/featureList.png";
import ideation from "../../assets/tusimple/ideation.png";
import structure from "../../assets/tusimple/Structure.png";
import sitemap from "../../assets/tusimple/sitemap.png";

const Approach = () => {
  return (
    <>
      <div className="work-session-frame-blue">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              How might we provide a unified interface that enables streamlined
              data manipulation and offers an efficient method for accessing
              detailed data?
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head">Tailor</div>
            <div className="work-session-body">
              I created the user workflow first to walk through the sequence of
              actions regular/advanced users take to accomplish tasks.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={trailor} />
          </div>
          <div className="work-pic-frame-split">
            <img className="work-pic" src={sessionSplit} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">Deconstruct</div>
            <div className="work-session-body">
              According to the user workflow, we deconstructed it into a feature
              list with priorities.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={featureList} />
          </div>
        </div>
      </div>
      <div className="work-session-frame-gray">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-head-big">
              Ideation - Start from the user workflow
            </div>
          </div>
        </div>
      </div>
      <div className="work-session-frame">
        <div className="work-frame-info">
          <div className="work-frame-1row">
            <div className="work-session-body">
              The basic part can be retained as the previous workflow to avoid
              impacting the regular user group.
              <br />
              <br /> The other two parts can then be categorized into settings -
              typically configured at the start of work or retained from prior
              settings, and data info - which users might interact with
              frequently during their daily tasks.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={ideation} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">The whole structure first</div>
            <div className="work-session-body">
              Prior to delving into the internal design work, the structure of
              the interface was meticulously crafted to preemptively circumvent
              conflicts and limitations when integrated with other components.
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={structure} />
          </div>
          <div className="work-frame-1row">
            <div className="work-session-head">Solution</div>
            <div className="work-session-body">
              Engineers(users) were frustrated by the limits of the previous
              tool "CameraViewer", that…
            </div>
          </div>
          <div className="work-pic-frame-inner">
            <img className="work-pic" src={sitemap} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;
