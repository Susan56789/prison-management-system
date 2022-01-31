import React, { useState } from "react";
import "./login.css";

const ViewPrisoners = () => {
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

    setReturnedData(newData);
  };

  fetchData();

  return (
    <>
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
            {returnedData.map((Data) => (
              <tr bgcolor="grey">
                <td>{Data.id}</td>
                <td>{Data.Fullname}</td>
                <td>{Data.DOB}</td>
                <td>{Data.datein}</td>
                <td>{Data.dateout}</td>
                <td>{Data.Address_}</td>
                <td>{Data.County}</td>
                <td>{Data.Gender}</td>
                <td>{Data.Education}</td>
                <td>{Data.MaritalStatus}</td>
                <td>{Data.Offence}</td>
                <td>{Data.Sentence}</td>
                <td>{Data.File_num}</td>
                <td>{Data.prison}</td>
                <td>
                  <b>
                    <a href="deleteprisoners.php?id=' . $row['id'] . '">
                      Delete
                    </a>
                  </b>
                </td>
              </tr>
            ))}
          </table>
        </tr>

        <br />
        <tr>
          <td align="center">
            <a href="./Admin" target="_parent">
              Panel Admin
            </a>
            <b>|</b>
            <a href="/" target="_parent">
              Log out
            </a>
          </td>
        </tr>
      </table>
    </>
  );
};

export default ViewPrisoners;
