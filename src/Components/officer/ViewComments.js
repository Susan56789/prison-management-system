import React from "react";
import "./login.css";

function ViewComments() {
  // function to fetch comments from database

  return (
    <div>
      <tabl
        align="center"
        border="0"
        bgcolor="green"
        width="800"
        cellPadding="8"
        cellSpacing="0"
        height="200"
      >
        <tr>
          <td bgcolor="#999999" valign="center"></td>

          <table
            align="center"
            bgcolor="GREEN"
            width="100%"
            border="0"
            cellPadding="3"
            cellSpacing="2"
          >
            <caption>
              <h3>ANNOUNCE DETAILS</h3>
            </caption>
            <tr bgcolor="#CCCCCC">
              <th width="3%">To</th>
              <th width="10%">Id</th>
              <th width="15%">Subject</th>
              <th width="10%">Message</th>
            </tr>
            <tr bgcolor="white">
              <td width="3%">{/**to */}</td>
              <td width="10%">{/**Id */}</td>
              <td width="10%">{/**Sunject */}</td>
              <td width="10%">{/**Message */}</td>
            </tr>
          </table>
        </tr>
        <td align="center" bgcolor="green">
          <a href="/Officer" target="_parent">
            Officer Panel <b>|</b>
          </a>
          <a href="#delete" target="_parent">
            Delete <b>|</b>
          </a>
          <a href="/" target="_parent">
            Log out
          </a>
        </td>
      </tabl>
    </div>
  );
}

export default ViewComments;
