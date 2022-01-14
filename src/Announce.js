import React, { useEffect, useState } from "react";
import "./login.css";
import banner from "./banner.gif";

const Announce = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/comment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .catch((err) => console.log(err));
    console.log(newData);

    setReturnedData(newData[0]);
  };

  useEffect(() => {
    fetchData();
  });

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
          <tr bgcolor="green">
            <th width="15%">Subject</th>
            <th width="15%">Message</th>
          </tr>
          <tr>
            <td width="15%">{returnedData._subject}</td>
            <td width="15%">{returnedData._message}</td>
          </tr>

          <tr width="50%" style={{ height: "auto", border: "1 px solid gold" }}>
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
                  <td width="27%" height="20" bgcolor="#FFFFFF">
                    <b>National Id:</b>
                  </td>
                  <td width="73%" bgcolor="#FFFFFF">
                    <input type="text" name="Email" />
                  </td>

                  <tr>
                    <td height="20" bgcolor="#FFFFFF">
                      <b>Username:</b>
                    </td>
                    <td bgcolor="#FFFFFF">
                      <input type="text" name="username" />
                    </td>
                  </tr>
                  <tr>
                    <td height="20" bgcolor="#FFFFFF">
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
                    <td height="30" bgcolor="#FFFFFF" align="center">
                      <input type="submit" value="Send" />
                    </td>
                    <td height="26" bgcolor="#FFFFFF" align="center">
                      <input type="reset" value="Cancel" />
                    </td>
                  </tr>
                </table>
              </form>
            </td>
          </tr>
        </td>
        <td width="1%" bgcolor="#FFFFFF"></td>
      </table>
    </div>
  );
};

export default Announce;
