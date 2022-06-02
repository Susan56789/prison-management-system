import React from "react";
import banner from "./banner.gif";
import "./login.css";

const Officer = () => {
  return (
    <>
      <table
        align="center"
        border="1"
        bgcolor="green"
        width="820"
        cellPadding="10"
        cellSpacing="0"
        height="325"
      >
        <tr>
          <td colSpan="3" height="2">
            <img src={banner} width="860" height="300" alt="" />
          </td>
        </tr>

        <tr>
          <tr width="100%">
            <td bgcolor="#FF0000" height="1" align="center">
              <a href="./Courts">COURT</a> |
              <a href="/transferForm">TRANSFER </a>|
              <a href="/newPrisons">NEW PRISON </a> |
              <a href="/officerSearch">SEARCH </a>
            </td>
          </tr>

          <td height="1" colspan="3" align="right" bgcolor="#006600">
            &nbsp;
          </td>
        </tr>

        <tr>
          <td bgcolor="#FFFFFF" height="100%">
            <td bgcolor="#FFFFFF" height="100%">
              <h3 align="center"> PRISON MNGNT SYSTEM FOR THE OFFICER </h3>
              <p align="justify">
                <font face="Arial, Helvetica, sans-serif">
                  The officer has the abilty to view all prison information
                  without editing.
                </font>
              </p>
            </td>
            <td bgcolor="GREEN" height="100%">
              <table border="0" align="center">
                <tr>
                  <td>
                    <h3> OFFICER PANNEL : </h3>
                    <br />

                    <div id="menu">
                      <ul>
                        <li>
                          <a href="/viewComments">Comment</a>
                        </li>
                        <li>
                          <a href="/viewPrisonerss">Prisoners Info</a>
                        </li>
                        <li>
                          <a href="/viewCourts">Court Information</a>
                        </li>
                        <li>
                          <a href="/viewVisitorss">Visitors</a>
                        </li>
                        <li>
                          <a href="/viewNewPrisons">New Prison</a>
                        </li>
                        <li>
                          <a href="/viewOfficerss">Officer</a>
                        </li>
                        <li>
                          <a href="/viewTransferss">Prisoners Transfer</a>
                        </li>
                        <li>
                          <a href="/">Log Out</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Officer;
