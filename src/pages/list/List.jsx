import "./list.scss";
import "../../style/dark.scss";

import { DarkModeContext } from "../../context/darkModeContext";
import DataTeble from "../../components/dataTeble/DataTeble";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const List = ({ link }) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <div className={darkMode ? "list dark" : "list"}>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTeble link={link} />
      </div>
    </div>
  );
};

export default List;
