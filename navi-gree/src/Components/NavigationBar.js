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
    path: "#about",
  },
  {
    title: "About",
    path: "#experience",
  },
  {
    title: "Chat",
    path: "#projects",
  },
  {
    title: "Team",
    path: "#gallery",
  },
];
const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#121212] bg-opacity-80">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto pt-4 px-5">
        <Link
          to="/"
          className="text-2xl md:text-5xl text-white font-semibold italic"
        >
          LOGO
        </Link>
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
