import React from "react";
import "../../styles/globals.css";
import "../../output.css";
import picTS from "../../assets/homePicTS.png";
import picM from "../../assets/homePicM.png";
import { Button } from "@headlessui/react";
import "../../index.css";

const HomepageBody = () => {
  return (
    <div className="w-full h-auto my-14 lg:my-24 flex-col justify-start items-center inline-flex overflow-hidden gap-8">
      {/* block - first session for self intro  */}
      <div className="w-full px-14 py-2 flex-col justify-start items-start inline-flex gap-[80px] mb-24 lg:justify-center lg:gap-32 lg:flex-row">
        {/* block - lemmon wang & /hongmeng  */}
        <div className="item-start w-full h-auto  flex-col justify-start gap-3 flex lg:inline-flex lg:w-[300px] lg:items-end lg:gap-5">
          <h2 className="text-2xl text-stone-50 sm:text-[28px] font-bold font-['Inter'] uppercase">
            Lemmon W.
          </h2>
          <h3 className="text-xl opacity-40 text-stone-50 sm:text-2xl font-medium font-roboto-flex">
            /hongmeng
          </h3>
        </div>

        {/* block - personal intro  */}
        <div className="w-full h-auto flex-col justify-start items-start gap-5 inline-flex lg:w-[800px]">
          <div className="text-xl leading-7 self-stretch text-stone-50 sm:text-2xl font-medium font-roboto-flex sm:leading-9 sm:antialiased">
            An independent creator who cares about people and is passionate
            about creating delightful things that empower and bring joy.
          </div>
          <div className="text-xl leading-7 self-stretch text-stone-50 sm:text-2xl font-medium font-roboto-flex sm:leading-9 sm:antialiased">
            Based wherever my cat is, currently lead product strategy & design
            at SmartPrep.ai, and founded YuzuTech LLC.
          </div>
        </div>
      </div>

      {/* block - tusimple work samples  */}
      <div className="w-full h-fit px-14 pt-20 pb-2.5 flex-col justify-start items-center gap-14 inline-flex lg:flex-row lg:justify-center lg:items-start lg:gap-32">
        {/* block - tusimple left intro  */}
        <div className="w-[300px] flex-col justify-start items-center lg:items-end gap-3 lg:gap-5 inline-flex">
          <div className="text-lg opacity-40 text-stone-50 lg:text-xl font-regular font-roboto-flex">
            2023 - see process & prototyping
          </div>
          <div className="text-stone-50 text-4xl sm:text-5xl font-bold font-roboto-flex">
            dev viz tool
          </div>
        </div>
        {/* block - tusimple image  */}
        <div className="w-full h-fit lg:w-[800px] lg:h-80 justify-start items-start inline-flex">
          <a
            href="https://example.com"
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
        <div className="w-[300px] flex-col justify-start items-center lg:items-end gap-3 lg:gap-5 inline-flex">
          <div className="text-lg opacity-40 text-stone-50 lg:text-xl font-regular font-rototo-flex">
            2021 - see story & prototyping
          </div>
          <div className="text-stone-50 text-4xl sm:text-5xl font-bold font-roboto-flex">
            mobile - hmi
          </div>
        </div>
        {/* block - momenta image  */}
        <div className="w-full h-fit lg:w-[800px] lg:h-80 justify-start items-start inline-flex">
          <a
            href="https://example.com"
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
