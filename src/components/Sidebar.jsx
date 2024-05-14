import React from "react";
import "../styles/sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>Dravya </h2>
        <h6>Analytical</h6>
      </div>

      <div className="sidebar-menu">
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-table-columns"></i>Dashboard
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-syringe"></i>Sample receive
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-file-import"></i> Sample outside send
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-flask"></i>Test analysis
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-regular fa-pen-to-square"></i>Test master
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-vial-circle-check"></i>Item master
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-file-invoice"></i>Lab Quotation
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-shield-cat"></i>Client master
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-solid fa-truck-arrow-right"></i>Dispatch
          </p>
        </a>
        <a href="/" className="item">
          <p>
            <i class="icon fa-regular fa-circle-user"></i>User
          </p>
        </a>
      </div>
      <div className="sidebar-user">
        <h3>Anand Joshi</h3>
        <p>ananajoshi@dravyaanalytical.com</p>
        <button className="login-btn">
          Logout<i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
