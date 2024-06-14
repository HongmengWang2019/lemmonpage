import React from "react";
import "../../styles/globals.css";
import "../../output.css";
import picTS from "../../assets/tusimple/homePicTS.png";
import picM from "../../assets/homePicM.png";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const HomepageBody = () => {
  const navigate = useNavigate();

  // const handleNavigate = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  // ) => {
  //   event.preventDefault(); // Prevent the default anchor behavior
  //   navigate("/devviztool");
  // };

  const navigateToTuSimple = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate("/devviztool"); // Navigate programmatically to '/tusimple'
  };

  const navigateToMomenta = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate("/mobile-hmi"); // Navigate programmatically to '/momenta'
  };

  return (
    <div className="home-frame">
      {/* block - first session for self intro  */}
      <div className="home-intro-frame">
        {/* block - lemmon wang & /hongmeng  */}
        <div className="home-title-frame-left">
          <h2 className="home-title-upper">Lemmon W.</h2>
          <h3 className="home-title-sub">/hongmeng</h3>
        </div>

        {/* block - personal intro  */}
        <div className="home-body-frame">
          <div className="home-body">
            An independent creator who cares about people and is passionate
            about creating delightful things that empower and bring joy.
          </div>
          <div className="home-body">
            Based wherever my cat is, currently lead product strategy & design
            at SmartPrep.ai, and founded YuzuTech LLC.
          </div>
        </div>
      </div>

      {/* block - tusimple work samples  */}
      <div className="home-work-frame">
        {/* block - tusimple left intro  */}
        <div className="home-work-title-frame-left">
          <div className="home-work-title-sub">
            2023 - process & prototyping
          </div>
          <div className="home-work-title">dev viz tool</div>
        </div>
        {/* block - tusimple image  */}
        <div className="w-full h-fit lg:w-[800px] lg:h-80 justify-start items-start inline-flex">
          <a
            href="/devviztool"
            onClick={navigateToTuSimple}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-fit lg:w-[570px] lg:h-80 rounded-2xl border-2 border-stone-50/50 flex-col justify-center items-start inline-flex"
          >
            <img
              className="self-stretch grow shrink basis-0 rounded-[20px]"
              alt="TuSimple work sample"
              src={picTS}
            />
          </a>
        </div>
      </div>

      {/* block - momenta work samples  */}
      <div className="w-full h-fit px-14 pt-20 pb-2.5 flex-col justify-start items-center gap-14 inline-flex lg:flex-row lg:justify-center lg:items-start lg:gap-32">
        {/* block - momenta left intro  */}
        <div className="home-work-title-frame-left">
          <div className="home-work-title-sub">2021 - story & prototyping</div>
          <div className="home-work-title">mobile - hmi</div>
        </div>
        {/* block - momenta image  */}
        <div className="w-full h-fit lg:w-[800px] lg:h-80 justify-start items-start inline-flex">
          <a
            href="/mobile-hmi"
            onClick={navigateToMomenta}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-fit lg:w-[570px] lg:h-80 rounded-2xl border-2 border-stone-50/50 flex-col justify-center items-start inline-flex"
          >
            <img
              className="self-stretch grow shrink basis-0 rounded-[20px]"
              alt="Momenta work sample"
              src={picM}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomepageBody;
