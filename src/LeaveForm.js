import React from "react";
import "./styles.css";
import banner from "./banner.gif";
import "./Home";
import "./About";

const LeaveForm = () => {
  return (
    <>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="540"
        cellpadding="9"
        cellSpacing="0"
        height="525"
      >
        <tr>
          <td colSpan="3" height="2">
            <img src={banner} width="860" alt="" />
          </td>
        </tr>
        <tr>
          <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
            <font size="4">
              <a href="/">HOME</a> |<a href="./About">ABOUT US</a>
            </font>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Leave Form</h1>
          </td>
        </tr>
      </table>
    </>
  );
};

export default LeaveForm;
