import React from "react";
import "./login.css";
import banner from "./banner.gif";
import capture from "./Capturee.gif";
import "./Home";
import "./About";

const Login = () => {
  return (
    <div>
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
          <td width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;
            <img src={capture} width="200" height="179" alt="" />
          </td>
          <td width="50%" align="center" bgcolor="#FFFFFF">
            <h2>
              <b>LOGIN MEMBERS </b>
            </h2>
          </td>
          <td>
            <font size="4">
              <a href="/userLogin">User</a>
              <br />
              <a href="/officerLogin">Officer</a>
              <br />
              <a href="./adminLogin">Admin</a>
            </font>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Login;
