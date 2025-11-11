import React from "react";
import PlayButton from "./PlayButton";
import StatusIndicator from "./StatusIndicator";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Smart Mobile Pro</h1>
      <StatusIndicator />
      <PlayButton />
    </div>
  );
};

export default Dashboard;
