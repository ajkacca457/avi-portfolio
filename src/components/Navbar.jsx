import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="hidden m768:flex gap-x-4 items-center p-4 text-white text-lg my-4 mx-4 rounded">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative w-fit block transition duration-300 ${
              isActive ? "text-emerald-600 bg-slate-800" : "hover:text-emerald-600"
            } px-4 py-1 rounded-md`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `relative w-fit block transition duration-300 ${
              isActive ? "text-emerald-600 bg-slate-800" : "hover:text-emerald-600"
            } px-4 py-1 rounded-md`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `relative w-fit block transition duration-300 ${
              isActive ? "text-emerald-600 bg-slate-800" : "hover:text-emerald-600"
            } px-4 py-1 rounded-md`
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative w-fit block transition duration-300 ${
              isActive ? "text-emerald-600 bg-slate-800" : "hover:text-emerald-600"
            } px-4 py-1 rounded-md`
          }
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
