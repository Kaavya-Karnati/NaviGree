"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";
import { Link } from "react-router-dom";

const navlinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Chat",
    path: "#chat",
  },
  {
    title: "Team",
    path: "#team",
  },
];
const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#a64d79] bg-opacity-80">
      <div className="flex container lg:py-1 flex-wrap items-center justify-between mx-auto px-5">
        <div className="flex flex-row">
        <Link
          to="/"
          className="flex items-center text-2xl md:text-5xl text-white font-semibold italic"
        >
          <img src={require('../images/NaviGreeLogo.png')} className="w-24 h-24"/>
          <h1 className="text-md">NAVIGREE</h1>
        </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <IoClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default NavigationBar;
