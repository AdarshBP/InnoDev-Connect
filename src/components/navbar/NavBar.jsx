import { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav >
      <Link to="/" className="title bg-white lg:bg-opacity-75 gap-4">
        WeekendWork
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <TfiClose /> : <FiAlignJustify />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};