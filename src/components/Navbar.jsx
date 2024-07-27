import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="hidden m768:flex gap-x-10 items-center p-4 text-white text-lg my-4 mx-4 rounded">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-emerald-600 after:scale-x-100" : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-emerald-600 after:scale-x-100" : "hover:text-emerald-600"
            } after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-emerald-600 after:scale-x-100" : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-emerald-600 after:scale-x-100" : "hover:text-emerald-600"
            } after:bg-emerald-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
