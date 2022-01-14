import React from "react";
import "./login.css";
import banner from "./banner.gif";
import "./prisoner";
import "./Registration";
import "./UserVisitors";
import "./AddOfficer";

/*When there are new recuits in the prison, new visitors, new officers, 
the officer (user) at the reception logs in to register them
*/
const User = () => {
  return (
    <>
      <table
        align="center"
        border="1"
        bgcolor="green"
        width="820"
        cellpadding="10"
        cellSpacing="0"
        height="215"
      >
        <tr>
          <td colspan="3" height="2">
            <img src={banner} alt=" " />
          </td>
        </tr>
        <tr>
          <td height="1" colspan="3" align="right" bgcolor="#006600">
            &nbsp;
          </td>
        </tr>

        <td width="4%" bgcolor="#FFFFFF" valign="top">
          <h3 align="center" title="You should be online">
            &nbsp;
          </h3>
        </td>

        <td width="71%" valign="top" bgcolor="#FFFFFF">
          <br />
          <h3 align="center">RESPONSABILITY OF USER(NEW REGISTRATIONS) </h3>
          <p align="justify">
            This is for the officer incharge of registration at the prison
            reception. It allows the user to register new incoming prisoners,
            register new visitors and new officers . They can only register and
            his access is secured .
          </p>
        </td>
        <td width="25%" bgcolor="green" valign="top"></td>

        <table border="0" align="center">
          <td width="255">
            <h4> USER MANAGEMENT : </h4>
            <br />
            <div id="header">
              <div id="menu">
                <ul>
                  <li>
                    <a href="./prisoner">
                      <b>Prisoner Registration</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="./UserVisitors">
                      <b>Visitor Registration</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="./AddOfficer">
                      <b>Officer Registration </b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="/">
                      <b>LOG OUT</b>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </table>
      </table>
    </>
  );
};

export default User;
