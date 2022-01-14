import React from "react";
import "./login.css";
import banner from "./banner.gif";

const Announce = () => {
  return (
    <div>
      <table
        width="74%"
        height="112"
        border="0"
        align="center"
        bgcolor="#FFFFFF"
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
        <td>
          <form action="" method="POST">
            <h4>Send feedback / Complain / Request</h4>
            <table
              bgcolor="white"
              height="190"
              border="0"
              align="center"
              width="52%"
            >
              <td width="27%" height="46" bgcolor="#FFFFFF">
                <b>Email:</b>
              </td>
              <td width="73%" bgcolor="#FFFFFF">
                <input type="text" name="Email" />
              </td>

              <tr>
                <td height="51" bgcolor="#FFFFFF">
                  <b>Username:</b>
                </td>
                <td bgcolor="#FFFFFF">
                  <input type="text" name="username" />
                </td>
              </tr>
              <tr>
                <td height="51" bgcolor="#FFFFFF">
                  <b>Subject:</b>
                </td>
                <td bgcolor="#FFFFFF">
                  <input type="text" name="Subject" />
                </td>

                <td>
                  <strong>
                    <b>Message</b>
                  </strong>
                </td>
                <td bgcolor="#FFFFFF">
                  <font size="4" />
                  <textarea cols="17" rows="4" name="Message"></textarea>
                </td>
                <td height="36" bgcolor="#FFFFFF" align="center">
                  <input type="submit" value="Save" />
                </td>
                <td height="26" bgcolor="#FFFFFF" align="center">
                  <input type="reset" value="Cancel" />
                </td>
              </tr>
            </table>
          </form>
        </td>
        <td width="1%" bgcolor="#FFFFFF"></td>
      </table>
    </div>
  );
};

export default Announce;
