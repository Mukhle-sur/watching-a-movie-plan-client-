import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsArrowRight, BsXLg } from "react-icons/bs";
import "./Navbar.css";
import logo from "../../../assets/home/NavLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   #ff8057!important

  const navItems = (
    <>
      <li className="tracking-wide md:mx-4 text-black font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li className="tracking-wide md:mx-4 text-black font-medium">
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li className="tracking-wide md:mx-4 text-black font-medium">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="tracking-wide md:mx-4 text-black font-medium">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <section className="px-4 lg:px-12 ">
      <div className="mx-auto">
        <nav className="flex items-center justify-between py-5 ">
          <div className="flex items-center">
            <div className="relative">
              <img src={logo} alt="Side Logo" className="w-auto max-h-12" />
              <div className="bg-[#BDB1B1] h-10 w-[1px] absolute top-1 -right-11 hidden sm:block"></div>
            </div>
            <div>
              <ul
                className={`md:flex z-50 absolute w-full md:pl-20 md:w-auto md:bg-none md:static duration-500 bg-white pt-2 pl-[14px] pb-3 md:pb-0 lg:pt-0 left-0 md:left-auto ${
                  isOpen ? "top-[75px]" : "-top-48"
                }`}
              >
                {navItems}
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-5 md:mr-0">
              <Link to={'/signIn'} className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6">
                Sign In <BsArrowRight size={16}></BsArrowRight>
              </Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <span>
                {isOpen === true ? (
                  <BsXLg className="h-6 w-6 text-[#FF8057]" />
                ) : (
                  <FaBars className="h-6 w-6 text-[#FF8057]" />
                )}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
