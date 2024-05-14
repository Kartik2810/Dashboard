import React from "react";
import "../styles/header.css";
function Header() {
  return (
    <>
      <div className="header">
        <h2>Dashboard</h2>
        <div className="buttons">
          <button className="btn">
            <i class="fa-solid fa-filter"></i>Filters
          </button>
          <button className="btn">
            <i class="fa-solid fa-cloud-arrow-down"></i>Export
          </button>
          <button className="btn">
            <i class="fa-solid fa-calendar-days"></i>Start Date
          </button>
          <button className="btn">
            <i class="fa-solid fa-calendar-days"></i>End Date
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
