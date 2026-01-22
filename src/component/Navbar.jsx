import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextApi/Context";
import DarkBtn from "./DarkBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { theme } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="container w-full  ">
      {/* Navbar */}
      <div className={`px-30 -b fixed top-0 left-0 w-full z-50 ${theme ? "bg-[black]" : "bg-[#f0e9f06c]"} ${theme ? "text-[white]" : "text-[black]"}     `}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-3xl font-bold cursor-pointer text-black dark:text-white">
            Hamza
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300">
            <li className="cursor-pointer hover:text-black dark:hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-white transition">About</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-white transition">Services</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-white transition">Projects</li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:flex">
              <button className="border px-4 py-1 rounded hover:bg-black hover:text-white transition">
                Login
              </button>
            </Link>

            {/* Desktop Theme */}
            <div className="hidden md:block">
              <DarkBtn />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl text-black dark:text-white"
            >
              {open ? <MdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Slide */}
      <div
        className={`
          fixed top-20 left-0 w-full h-screen bg-white dark:bg-black z-40
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"} md:hidden
        `}
      >
        <ul className="flex flex-col gap-5 px-6 py-6 text-gray-700 dark:text-gray-300">
          <li className="cursor-pointer" onClick={() => setOpen(false)}>Home</li>
          <li className="cursor-pointer" onClick={() => setOpen(false)}>About</li>
          <li className="cursor-pointer" onClick={() => setOpen(false)}>Services</li>
          <li className="cursor-pointer" onClick={() => setOpen(false)}>Projects</li>

          <Link to="/login">
            <button
              className="border px-4 py-2 rounded w-full hover:bg-black hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Login
            </button>
          </Link>

          {/* Mobile Theme Button */}
          <div className="pt-2">
            <DarkBtn />
          </div>
        </ul>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default Navbar;
