import "./navbar.scss";

import {
  MdFullscreenExit,
  MdLanguage,
  MdOutlineDarkMode,
} from "react-icons/md";

import { AiOutlineBars } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { DarkModeContext } from "../../context/darkModeContext";
import { IoNotificationsOutline } from "react-icons/io5";
import React from "react";

const Navbar = () => {
  const { darkMode, dispatch } = React.useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BiSearchAlt2 />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <MdFullscreenExit />
          </div>
          <div className="item">
            <IoNotificationsOutline />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <BsChatLeft />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <AiOutlineBars />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
