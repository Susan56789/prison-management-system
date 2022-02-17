import React, { useState } from "react";
import "./login.css";

const NewPrison = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("http://localhost:3001/np", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);

    setReturnedData(newData);
  };

  fetchData();

  return (
    <>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="1300"
        cellpadding="8"
        cellSpacing="0"
        height="200"
      >
        <tr>
          <td bgcolor="#999999" valign="center">
            <table
              align="center"
              width="100%"
              bgcolor="GREEN"
              border="0"
              cellpadding="3"
              cellSpacing="2"
            >
              <caption>
                <h3>NEW PRISON INFORMATION</h3>
              </caption>
              <tr bgcolor="#CCCCCC">
                <th width="3%">Prison Nunber</th>
                <th width="3%">Prison Name</th>
                <th width="10%">Location</th>
                <th width="15%">Open Date</th>
                <th width="10%">Contact</th>
                <th width="10%">Capacity</th>
              </tr>

              {returnedData.map((Data) => (
                <tr bgcolor="grey">
                  <td width="3%">{Data.pno}</td>
                  <td width="7%">{Data.pname}</td>
                  <td width="10%">{Data.location_}</td>
                  <td width="10%">{Data.opendate}</td>
                  <td width="10%">{Data.contact}</td>
                  <td width="3%">{Data.capacity}</td>
                </tr>
              ))}
            </table>

            <br />
          </td>
        </tr>
        <tr>
          <td align="center" bgcolor="green">
            <a href="/Admin" target="_parent">
              Admin Panel
            </a>{" "}
            <br />
            <a href="/" target="_parent">
              Log out
            </a>
          </td>
        </tr>
      </table>
    </>
  );
};

export default NewPrison;
