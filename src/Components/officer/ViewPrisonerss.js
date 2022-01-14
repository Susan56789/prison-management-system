import React, { useState } from "react";
import "./login.css";

function ViewPrisonerss() {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/pris", {
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
    <div>
      <header>
        <title>PRISONER DETAILS </title>
      </header>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="1000"
        cellpadding="8"
        cellSpacing="0"
        height="200"
      >
        <tr>
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
              <h3>PRISONER INFORMATION</h3>
            </caption>
            <tr bgcolor="green">
              <th>National id</th>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Date In</th>
              <th>Date Out</th>
              <th>Address</th>
              <th>County</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Marital Status</th>
              <th>Offence</th>
              <th>Sentence</th>
              <th>File Number</th>
              <th>Prison</th>
            </tr>

            <tr bgcolor="grey">
              <td>{returnedData.id}</td>
              <td>{returnedData.Fullname}</td>
              <td>{returnedData.DOB}</td>
              <td>{returnedData.datein}</td>
              <td>{returnedData.dateout}</td>
              <td>{returnedData.Address_}</td>
              <td>{returnedData.County}</td>
              <td>{returnedData.Gender}</td>
              <td>{returnedData.Education}</td>
              <td>{returnedData.MaritalStatus}</td>
              <td>{returnedData.Offence}</td>
              <td>{returnedData.Sentence}</td>
              <td>{returnedData.File_num}</td>
              <td>{returnedData.prison}</td>
            </tr>
          </table>
        </tr>

        <br />
        <tr>
          <td align="center">
            <a href="/Officer" target="_parent">
              Officer Panel
            </a>
            <b>|</b>
            <a href="/" target="_parent">
              Log out
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ViewPrisonerss;
