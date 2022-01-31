import React, { useState } from "react";
import "./login.css";

const ViewCourt = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/cas", {
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
            <h3>COURT CASE</h3>
          </caption>
          <tr bgcolor="green">
            <th width="3%">National id</th>
            <th width="10%">File Number</th>
            <th width="10%">Date of Trial</th>
            <th width="15%">Sentence</th>
            <th width="10%">Location</th>
            <th width="10%">Time of Trial</th>
          </tr>
          {returnedData.map((Data) => (
            <tr bgcolor="grey">
              <td width="3%">{Data.National_Id}</td>
              <td width="7%">{Data.File_number}</td>
              <td width="7%">
                {new Date(Data.Dateoftrail).toLocaleDateString() + ""}
              </td>
              <td width="7%">{Data.Sentence}</td>
              <td width="7%">{Data.Location_}</td>
              <td width="7%">
                {new Date(Data.Time_).toLocaleTimeString() + ""}
              </td>
              <td width="3%">
                <b>
                  <a href="deletecourt.php?id=' . $row['National_id'] . '">
                    Delete
                  </a>
                </b>
              </td>
            </tr>
          ))}
        </table>

        <br />
        <tr>
          <td align="center">
            <a href="./Admin" target="_parent">
              Panel Admin
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

export default ViewCourt;
