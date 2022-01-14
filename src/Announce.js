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
        <td width="100%" align="center">
          <tr bgcolor="grey">
            <th width="20%">Subject</th>
            <th width="30%">Message</th>
          </tr>
          <tr>
            <td width="20%">{returnedData._subject}</td>
            <td width="30%">{returnedData._message}</td>
          </tr>
        </td>
        <td width="1%" bgcolor="#FFFFFF"></td>
      </table>
    </div>
  );
};

export default Announce;
