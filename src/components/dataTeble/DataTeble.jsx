import "./dataTable.scss";

import {
  userColumns,
  userRows,
} from "../../common/dataTableSource/dataTableSource";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTeble = ({ link }) => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((ele) => ele.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (p) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(p.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add New User
        <Link to={link} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTeble;
