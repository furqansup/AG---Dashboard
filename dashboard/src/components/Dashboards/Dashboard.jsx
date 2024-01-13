import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Dashboard.css";
import missionData from "../../assets/space-mission-data.json";
import PieChart from "../Charts/PieChart";
import SuccessRatePie from "../Charts/SuccessRatePie";

const Dashboard = () => {
  // AG-Grid column
  const columnDefs = [
    { headerName: "Mission", field: "mission" },
    { headerName: "Company", field: "company" },
    { headerName: "Location", field: "location" },
    { headerName: "Date", field: "date" },
    { headerName: "Time", field: "time" },
    { headerName: "Rocket", field: "rocket" },
    { headerName: "Price", field: "price" },
    { headerName: "Successful", field: "successful" },
  ];

  const gridOptions = {
    columnDefs: columnDefs,
    pagination: true,
    paginationPageSize: 5,
    domLayout: "autoHeight",
  };

  return (
    <div className="dashboard-container">
      <h2>SpaceView Dashboard</h2>
      <div className="ag-theme-alpine ag-grid-container">
        <AgGridReact
          gridOptions={gridOptions}
          rowData={missionData}
          domLayout="autoHeight"
        />
      </div>
      <div className="charts">
        <PieChart data={missionData} />
        <SuccessRatePie data={missionData} />
      </div>
    </div>
  );
};

export default Dashboard;
