import React from "react";
import logo from "../assets/blackLogo.png";
// import "../styles/header.css";
import "../styles/globals.css";
import "../output.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Work", href: "/", current: true },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure as="nav" className="w-full pl-14 pr-10 py-4 overflow-hidden">
      {({ open }) => (
        <>
          <div className="w-full h-20 py-2.5 justify-between items-center inline-flex overflow-hidden">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-stone-50/60 hover:bg-stone-50/20 hover:text-stone-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
            <div className="hidden sm:justify-start sm:items-center sm:gap-2 sm:flex sm:overflow-hidden">
              <Link
                to="/"
                className="w-20 text-stone-50 text-left text-xl font-regular tracking-tight hover:font-semibold"
              >
                Work
              </Link>
              <Link
                to="/about"
                className="w-20 text-stone-50 text-left text-xl font-regular tracking-tight hover:font-semibold"
              >
                About
              </Link>
            </div>
            <img className="w-16 h-16" src={logo} />
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  className="text-gray-300 hover:bg-stone-50/20 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;

{
  /* <DisclosureButton
  key={item.name}
  as="a"
  className={classNames(
    item.current
      ? "bg-stone-50/20 text-white"
      : "text-gray-300 hover:bg-stone-50/20 hover:text-white",
    "block rounded-md px-3 py-2 text-base font-medium"
  )}
  aria-current={item.current ? "page" : undefined}
>
  <Link to={item.href}>{item.name}</Link>
</DisclosureButton>; */
}
