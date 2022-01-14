import React from "react";
import "./styles.css";
import "./PerfomanceMeasures";
import "./Recruitment";
import "./employeeDetails";
import "./LeaveForm";
import "./Announce";

const Navbar = () => {
  return (
    <div>
      <header>
        <div>
          <h3>Prison Management System</h3>

          <nav className="navbar">
            <ul>
              <li>
                <a href="./PerfomanceMeasures">Performance Measure </a>
              </li>
              <li>
                <a href="./Recruitment">Recruitment </a>
              </li>
              <li>
                <a href="./employeeDetails">employee details </a>
              </li>
              <li>
                <a href="./LeaveForm">leaveform </a>
              </li>
              <li>
                <a href="./Announce">Feedback</a>
              </li>
              <li>
                <a href="./Training">Training </a>
              </li>
              <li>
                <a href="./Salary">Salary</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
