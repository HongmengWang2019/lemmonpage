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

      <div className="order-1 sm:order-2 justify-start items-center gap-4 flex">
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
        <a
          className="[&>svg]:h-5 [&>svg]:w-5 order-1 pr-2 sm:order-2"
          href="mailto:mail@lemmon.wang"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFFCF7"
            // className="size-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </a>
        <a
          className="[&>svg]:h-5 [&>svg]:w-5 order-1 pr-2 sm:order-2"
          href="https://x.com/LemmonWon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#FFFCF7"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
