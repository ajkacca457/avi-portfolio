import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full block m768:hidden">
      <div className="flex justify-between items-center m-4">
        <h1 className="text-logo-heading">
          Avi<span className="text-emerald-600">.</span>
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white"
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>
      <nav
        className={` ${
          isOpen ? "block" : "hidden"
        } p-4 text-white text-lg my-4 rounded`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative w-fit mx-auto block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive
                ? "text-emerald-600 after:scale-x-100"
                : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `relative w-fit mx-auto my-3 block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive
                ? "text-emerald-600 after:scale-x-100"
                : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
          onClick={() => setIsOpen(false)}
        >
          Work
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `relative w-fit mx-auto my-3 block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive
                ? "text-emerald-600 after:scale-x-100"
                : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
          onClick={() => setIsOpen(false)}
        >
          Resume
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative w-fit mx-auto my-3 block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive
                ? "text-emerald-600 after:scale-x-100"
                : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileNav;
