import React from "react";
import "./login.css";
import banner from "./banner.gif";
import "./About";
import "./Announce";
import "./Login";

const Home = () => {
  return (
    <table
      align="center"
      border="0"
      bgcolor="green"
      width="540"
      cellPadding="9"
      cellSpacing="0"
      height="525"
    >
      <tr>
        <td colSpan="3" height="2">
          {" "}
          <img src={banner} width="860" alt="" />
        </td>
      </tr>

      <tr>
        <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="./About">About</a>
              </li>
              <li>
                <a href="./Announce">Comments</a>
              </li>
              <li>
                <a href="./Login">Login</a>
              </li>
            </ul>
          </nav>
        </td>
      </tr>

      <tr>
        <td>
          <h2>Online Prison Management System </h2>
        </td>
      </tr>
    </table>
  );
};

export default Home;
