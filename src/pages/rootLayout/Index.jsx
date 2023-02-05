import "./index.scss";
import "../../style/dark.scss";

import { DarkModeContext } from "../../context/darkModeContext";
import HomeContainer from "../../components/homeContainer/HomeContainer";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Index = () => {
  const { darkMode } = React.useContext(DarkModeContext);
  return (
    <div className={darkMode ? "index dark" : "index"}>
      <Sidebar />
      <HomeContainer />
    </div>
  );
};

export default Index;
