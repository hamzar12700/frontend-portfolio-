import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextApi/Context";
import DarkBtn from "./DarkBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { theme } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  const bgColor = theme ? "bg-[#312f2fef] text-white" : "bg-[#f0e9f06c] text-black";
  const mobileBg = theme ? "bg-yellow-500" : "bg-white";

  return (
    <div className="w-full">
      {/* ================= Navbar ================= */}
      <header className={`fixed top-0 left-0 w-full z-50 border-b ${bgColor}`}>
        <div className="h-20 px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold cursor-pointer">
            Hamza
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Projects"].map(item => (
              <li key={item} className="cursor-pointer hover:opacity-70">
                {item}
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <Link to="/login" className="hidden md:block">
              <button className="border px-4 py-1 rounded hover:bg-black hover:text-white">
                Login
              </button>
            </Link>

            <div className="hidden md:block">
              <DarkBtn />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              {open ? <MdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`
          fixed top-20 left-0 w-full h-screen z-40 md:hidden
          ${mobileBg}
          transform transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <ul className="flex flex-col gap-6 p-6">
          {["Home", "About", "Services", "Projects"].map(item => (
            <li
              key={item}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {item}
            </li>
          ))}

          <Link to="/login">
            <button
              className="border px-4 py-2 rounded w-full" 
              onClick={() => setOpen(false)}
            >
              Login
            </button>
          </Link>

          <DarkBtn />
        </ul>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
};

export default Navbar;
