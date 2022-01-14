import React from "react";
import banner from "./banner.gif";
import "./login.css";

function SearchForms() {
  return (
    <div>
      <table
        align="center"
        border="1"
        bgcolor="green"
        width="820"
        cellpadding="10"
        cellspacing="0"
        height="325"
      >
        <tr>
          <td colSpan="3" height="2">
            <img src={banner} alt="" />
          </td>
        </tr>

        <tr>
          <td colSpan="8" bgcolor="FF0000" height="3" align="center">
            <font size="5">
              <a href="/">Log Out</a>|<a href="/Officer">Back to Panel</a>
            </font>{" "}
          </td>
        </tr>
        <td align="center" bgcolor="#FFFFFF">
          <h1> Seacrh By Prisoner Name</h1>
          <form action="search" method="get">
            <label>
              Prisoner Name:
              <input type="text" name="keyname" />
            </label>
            <input type="submit" value="Search" />
          </form>
          <td height="191" bgcolor="#FFFFFF"></td>
          <td width="7%" bgcolor="#FFFFFF"></td>
          <td width="2%" bgcolor="#FFFFFF"></td>
        </td>
      </table>
    </div>
  );
}

export default SearchForms;
