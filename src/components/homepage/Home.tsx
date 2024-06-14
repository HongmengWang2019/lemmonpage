import React from "react";
import "../../styles/globals.css";
import HomepageBody from "./HomepageBody";
import Footer from "../Footer";
import Header from "../Header";

function Home() {
  return (
    <div className="w-full h-full bg-black flex-col justify-start items-center gap-8 inline-flex">
      <HomepageBody />
    </div>
  );
}

export default Home;
