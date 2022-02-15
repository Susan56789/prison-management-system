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
            <form>
              <label>National ID: </label>
              <input type="number" />
              <br />
              <br />
              <label>Full Names: </label>
              <input type="text" />
              <br />
              <br />
              <label>Start date: </label>
              <input type="date" />
              <br />
              <br />
              <label>End date: </label>
              <input type="date" />
              <br />
              <br />

              <label>Reason for Leave: </label>
              <select>
                <option>Medical issues</option>
                <option>Family emergency</option>
                <option>Other</option>
              </select>
              <br />
              <br />
              <label>If Other Explain</label>
              <textarea></textarea>
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </td>
        </tr>
      </table>
    </>
  );
};

export default LeaveForm;
