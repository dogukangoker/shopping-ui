import React from "react";
import "./style.scss";
import ItemList from "../ItemList";
import Cart from "../Cart";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <ItemList />
      </div>
      <div className="dashboard__right">
        <Cart />
      </div>
    </div>
  );
};

export default Dashboard;
