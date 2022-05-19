import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  FaSignOutAlt,
  FaHome,
  FaShoppingBasket,
  FaCogs,
  FaUserCog,
} from "react-icons/fa";

export default function Sidebar({isOpen}) {
  return (
    <div className={`w-4/5 z-10 -left-3/4 md:left-0 ${isOpen ? 'visible' : 'hidden'} md:visible  h-full sm:w-2/5 md:flex md:w-2/6 lg:w-1/6 absolute md:relative flex flex-col rounded-r-3xl bg-blue-700 text-white font-semibold text-lg justify-between pl-3 py-3`}>
      <h1 className="flex items-center flex-row bg-blue-50 text-blue-700 rounded-full mr-3">
        <i className="mr-2 w-1/5">
          <Logo />
        </i>
        <span>Cuckify.io</span>
      </h1>
      <ul>
        <li className="p-3 mb-2 group hover:bg-white rounded-l-3xl transition-all duration-300">
          <Link
            className="flex items-center group-hover:text-blue-700 flex-row "
            to={"/dashboard"}
          >
            <i className="mr-2">
              <FaHome />
            </i>{" "}
            Dashboard
          </Link>
        </li>
        <li className="p-3 mb-2 group hover:bg-white rounded-l-3xl transition-all duration-300">
          <Link
            to={"/dashboard"}
            className="flex items-center flex-row group-hover:text-blue-700"
          >
            <i className="mr-2">
              <FaShoppingBasket />
            </i>{" "}
            Products
          </Link>
        </li>
        <li className="p-3 mb-2 group hover:bg-white rounded-l-3xl transition-all duration-300">
          <Link
            to={"/products"}
            className="flex items-center flex-row group-hover:text-blue-700"
          >
            <i className="mr-2">
              <FaUserCog />
            </i>{" "}
            User Profile
          </Link>
        </li>
        <li className="p-3 mb-2 group hover:bg-white rounded-l-3xl transition-all duration-300">
          <Link
            to={"/"}
            className="flex items-center flex-row group-hover:text-blue-700"
          >
            <i className="mr-2">
              <FaCogs />
            </i>{" "}
            Settings
          </Link>
        </li>
      </ul>
      <p className="p-3 mb-2 group hover:bg-white rounded-l-3xl transition-all duration-300">
        <Link
          to={"/"}
          className="flex items-center flex-row group-hover:text-blue-700"
        >
          <i className="mr-2">
            <FaSignOutAlt />
          </i>
          Log Out
        </Link>
      </p>
    </div>
  );
}
