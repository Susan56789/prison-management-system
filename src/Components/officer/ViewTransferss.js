import React, { useState } from "react";
import "./login.css";

const ViewTransferss = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/tran", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);

    setReturnedData(newData[2]);
  };

  fetchData();

  return (
    <>
      <header>
        <title>View transfer record </title>
      </header>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="800"
        cellpadding="8"
        cellSpacing="0"
        height="200"
      >
        <td bgcolor="#999999" valign="center">
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="3"
            cellSpacing="2"
            bgcolor="green"
          >
            <caption>
              <h3>PRISONER TRANSFER INFORMATION</h3>
            </caption>
            <tr bgcolor="green">
              <th width="3%">National id</th>
              <th width="10%">File Number</th>
              <th width="15%">From Prison</th>
              <th width="10%">To Prison</th>
              <th width="10%">Date of Transfer</th>
            </tr>

            <tr bgcolor="grey">
              <td>{returnedData.National_id}</td>
              <td>{returnedData.File_num}</td>
              <td>{returnedData.From_prison}</td>
              <td>{returnedData.To_Prison}</td>
              <td>{returnedData.Dateoftransfer}</td>
              <td>
                <b>
                  <a href="deletetransfer.php?id=' . $row['National_id'] . '">
                    Delete
                  </a>
                </b>
              </td>
            </tr>
          </table>

          <br />
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
        </td>
      </table>
    </>
  );
};

export default ViewTransferss;