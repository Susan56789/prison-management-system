import React, { useState } from "react";
import "./Admin";
import "./login.css";
import "../../Home";

const ViewOficcer = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/api", {
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

    setReturnedData(newData);
  };

  fetchData();

  console.log(returnedData);

  return (
    <>
      <header>
        <title>PRISON OFFICER RECORD </title>
      </header>
      <body>
        <table
          align="center"
          border="0"
          bgcolor="green"
          width="1200"
          cellpadding="8"
          cellSpacing="0"
          height="200"
        >
          <tr>
            <td bgcolor="#999999" valign="center">
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="3"
                cellSpacing="2"
                bgcolor="gr"
              >
                <caption>
                  <h3>OFFICER TRANSFER INFORMATION</h3>
                </caption>
                <tr bgcolor="green">
                  <th>National ID</th>
                  <th>Phone Number</th>
                  <th>From Prison</th>
                  <th>To Prison</th>
                  <th>Date of Transfer</th>
                </tr>
                {returnedData.map((Data) => (
                  <tr bgcolor="green">
                    <td>{Data.National_id}</td>
                    <td>{Data.Telephone}</td>
                    <td>{Data.From_prison}</td>
                    <td> {Data.To_prison}</td>
                    <td>{Data.Dateoftransfer}</td>
                  </tr>
                ))}
              </table>

              <br />
            </td>
          </tr>
          <tr>
            <td align="center">
              <a href="./Admin" target="_parent">
                Panel Admin <b>|</b>
              </a>
              <a href="/" target="_parent">
                Log out
              </a>
            </td>
          </tr>
        </table>
      </body>
    </>
  );
};

export default ViewOficcer;
