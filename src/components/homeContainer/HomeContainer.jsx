import "./homeContainer.scss";

import Chart from "../chart/Chart";
import Featured from "../featured/Featured";
import Navbar from "../navbar/Navbar";
import Table from "../tabel/Table";
import Widget from "../widget/Widget";

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <Navbar />
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
      </div>
      <div className="listContainer">
        <div className="listTitle">Lates Transactions</div>
        <Table />
      </div>
    </div>
  );
};
export default HomeContainer;
