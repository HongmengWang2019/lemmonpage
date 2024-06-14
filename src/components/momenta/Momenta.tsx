import React from "react";
import TopSession from "./TopSession";
import Overview from "./Overview";
import Highlights from "./Highlights";
import Research from "./Research";
import Approach from "./Approach";
import Clarification from "./Clarification";
import Solution from "./Solution";

const sidebar = [
  { name: "Overview", href: "#overview", current: false },
  { name: "Highlights", href: "#highlights", current: false },
  { name: "Research summary", href: "#researchsummary", current: false },
  { name: "Approach", href: "#approach", current: false },
  { name: "Clarification", href: "#clarification", current: false },
  { name: "Solution", href: "#solution", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Momenta() {
  return (
    <div>
      <aside className="hidden lg:block lg:self-start lg:fixed lg:top-40 lg:right-8 xl:right-16 lg:col-span-1">
        <ul role="list" className="-mx-2 space-y-1">
          <li className="p-1 pl-3 text-sm font-semibold leading-6 text-stone-50/50">
            CONTENT
          </li>
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-stone-50/70"
                    : "text-gray-700 hover:text-stone-50/70",
                  "group flex gap-x-3 rounded-md p-1 pl-3 text-sm font-semibold leading-6"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main>
        <div className="w-full h-full bg-black flex-col justify-start items-center gap-4 sm:gap-8 inline-flex">
          <TopSession />
          <Overview id="overview" />
          <Highlights id="highlights" />
          <Research id="researchsummary" />
          <Approach id="approach" />
          <Clarification id="clarification" />
          <Solution id="solution" />
          {/* 
          <Solution id="solution" />
          <UAT id="UAT" />
          <Improvements id="improvements" /> */}
        </div>
      </main>
    </div>
  );
}

export default Momenta;
