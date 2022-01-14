import React, { useState } from "react";
import "./login.css";

const ViewCase = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/cas", {
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

  return (
    <>
      <header>
        <title>PRISONER CASE </title>
      </header>
      <table
        align="center"
        border="1"
        bgcolor="green"
        width="800"
        cellpadding="8"
        cellSpacing="0"
        height="200"
      >
        <td bgcolor="#999999" valign="center"></td>
        <table
          align="center"
          width="100%"
          border="0"
          cellpadding="3"
          cellSpacing="2"
          bgcolor="green"
        >
          <caption>
            <h3>COURT INFORMATION</h3>
          </caption>
          <tr bgcolor="green">
            <th width="3%">National id</th>
            <th width="10%">Fie Number</th>
            <th width="10%">Date of trial</th>
            <th width="15%">Sentence</th>
            <th width="10%">Location</th>
          </tr>

          <tr bgcolor="grey">
            <td width="3%">{returnedData.National_Id}</td>
            <td width="7%">{returnedData.File_number}</td>
            <td width="10%">{returnedData.Dateoftrail}</td>
            <td width="10%">{returnedData.Sentence}</td>
            <td width="10%">{returnedData.Location_}</td>
            <td width="3%">
              <b>
                <a href="#delete">Delete</a>
              </b>
            </td>
          </tr>
        </table>

        <br />

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
    </>
  );
};

export default ViewCase;
