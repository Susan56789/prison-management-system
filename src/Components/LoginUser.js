import React from "react";
import banner from "../banner.gif";
import capture from "../Capturee.gif";
import "../login.css";

function LoginUser() {
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
            <form>
              <h2>
                <b>VISITOR LOGIN</b>
              </h2>

              <tr>
                <td height="36" bgcolor="#FFFFFF">
                  <b>National ID</b>
                </td>
                <td height="36" bgcolor="#FFFFFF">
                  <input type="text" name="username" />
                </td>
              </tr>

              <tr>
                <td height="36" bgcolor="#FFFFFF">
                  <b>Password:</b>
                </td>
                <td height="36" bgcolor="#FFFFFF">
                  <input type="password" name="password" />
                </td>
              </tr>

              <tr>
                <td bgcolor="#fff" height="36" align="center">
                  <button type="submit">LOGIN</button>
                </td>
                <td
                  bgcolor="#fff"
                  height="36"
                  align="center"
                  className="register"
                >
                  <button>
                    <a
                      href="/UserVisitors"
                      style={{ gcolor: "grey", color: "black" }}
                    >
                      REGISTER
                    </a>
                  </button>
                </td>
              </tr>
            </form>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default LoginUser;
