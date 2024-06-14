import React from "react";
import "../styles/globals.css";
import "../output.css";
import logo from "../assets/blackLogo.png";

const Footer = () => {
  return (
    <div className="w-full h-80 px-14 pt-[248px] mb-8 flex-col justify-start items-center inline-flex gap-6 sm:flex-row sm:justify-between sm:gap-0">
      <div className="order-2 sm:order-1 justify-start items-center gap-2 flex">
        <div className="hidden sm:w-10 sm:h-10 sm:justify-start sm:items-start sm:flex">
          <img className="w-9 h-9" src={logo} />
        </div>
        <div className="text-stone-50/80 text-base font-medium font-roboto-flex">
          &copy; 2024 Lemmon W. All rights reserved.
        </div>
      </div>

      <a
        className="[&>svg]:h-5 [&>svg]:w-5 order-1 pr-2 sm:order-2"
        href="http://www.linkedin.com/in/lemmon-wang"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFCF7"
          viewBox="0 0 448 512"
        >
          <path
            fillRule="evenodd"
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
