import React, { useState } from "react";
import "./login.css";

const ViewOfficerss = () => {
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

    setReturnedData(newData[0]);
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
                  <h3>PRISONER TRANSFER INFORMATION</h3>
                </caption>
                <tr bgcolor="green">
                  {/**
   * <th width='3%'> id</th>
<th width='10%'>Phone Number</th>
<th width='15%'>From Prison</th>
<th width='10%'>To Prison</th>
<th width='10%'>Date of Transfer</th>
   */}
                  <th>National ID</th>
                  <th>Phone Number</th>
                  <th>From Prison</th>
                  <th>To Prison</th>
                  <th>Date of Transfer</th>
                </tr>
                <tr bgcolor="green">
                  <td>{returnedData.National_id}</td>
                  <td>{returnedData.Telephone}</td>
                  <td>{returnedData.From_prison}</td>
                  <td> {returnedData.To_prison}</td>
                  <td>{returnedData.Dateoftransfer}</td>
                </tr>
              </table>

              <br />
            </td>
          </tr>
          <tr>
            <td align="center">
              <a href="./Officer" target="_parent">
                Officer Panel <b>|</b>
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

export default ViewOfficerss;
