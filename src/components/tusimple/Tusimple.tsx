import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TopSession from "./TopSession";
import Overview from "./Overview";
import Research from "./Research";
import Insights from "./Insights";
import Approach from "./Approach";

function Tusimple() {
  return (
    <div className="w-full h-full bg-black flex-col justify-start items-center gap-4 sm:gap-8 inline-flex">
      <Header />
      <TopSession />
      <Overview />
      <Research />
      <Insights />
      <Approach />
      <Footer />
    </div>
  );
}

export default Tusimple;
