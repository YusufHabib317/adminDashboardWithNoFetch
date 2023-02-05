import "./sidebar.scss";

import { BsBorderWidth, BsShopWindow } from "react-icons/bs";
import { FiLogOut, FiSettings, FiTruck } from "react-icons/fi";
import { MdOutlinePsychology, MdSettingsSystemDaydream } from "react-icons/md";

import { BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { DarkModeContext } from "../../context/darkModeContext";
import { IoMdStats } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { useContext } from "react";

const Sidebar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">YH Admin</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <RxDashboard />
            <span>Dash</span>
          </li>

          <p className="title">Lists</p>
          <Link to="/users">
            <li>
              <BiUser />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products">
            <li>
              <BsShopWindow />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <BsBorderWidth />
            <span>Orders</span>
          </li>
          <li>
            <FiTruck />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <IoMdStats />
            <span>Stats</span>
          </li>
          <li>
            <IoNotificationsOutline />
            <span>Notifactions</span>
          </li>

          <p className="title">Service</p>

          <li>
            <MdSettingsSystemDaydream />
            <span>System Health</span>
          </li>
          <li>
            <MdOutlinePsychology />
            <span>Logs</span>
          </li>
          <li>
            <FiSettings />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <CgProfile />
            <span>Profile</span>
          </li>
          <li>
            <FiLogOut />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
