import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="w-full block m768:hidden">
    <h1 className='text-logo-heading'>Avi<span className='text-purple-600'>.</span></h1>
      <nav className="p-4 text-white text-lg my-4 rounded bg-red-500 w-[100vw]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-purple-500 after:scale-x-100" : "hover:text-purple-500"
            } after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-purple-500 after:scale-x-100" : "hover:text-purple-500"
            } after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-purple-500 after:scale-x-100" : "hover:text-purple-500"
            } after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] transition duration-300 ${
              isActive ? "text-purple-500 after:scale-x-100" : "hover:text-purple-500"
            } after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileNav;
