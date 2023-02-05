import "./featuered.scss";
import "react-circular-progressbar/dist/styles.css";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { BsThreeDotsVertical } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <BsThreeDotsVertical fontSize={"small"} />
      </div>
      <div className="bottom">
        <div className="featureChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transcations processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <MdKeyboardArrowDown fontSize={"small"} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp fontSize={"small"} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp fontSize={"small"} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
