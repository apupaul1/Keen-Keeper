import React from "react";
import NavLink from "./NavLink";
import { RxHome } from "react-icons/rx";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink href="/">
          <RxHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink href="/timeline">
          <RiTimeLine />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink href="/stats">
          <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-0 px-2 lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {navLinks}
            </ul>
          </div>
          <Link href={"/"} className="text-2xl font-extrabold">
            <p className="text-[#1F2937]">Keen<span className="text-[#244D3F]">Keeper</span></p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
