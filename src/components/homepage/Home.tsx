import React from "react";
import Header from "../Header";
import "../../styles/globals.css";
import Footer from "../Footer";
import HomepageBody from "./HomepageBody";

function Home() {
  return (
    <div className="w-full h-full bg-black flex-col justify-start items-center gap-8 inline-flex">
      <Header />
      <HomepageBody />
      <Footer />
    </div>
  );
}

export default Home;
