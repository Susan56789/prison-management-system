import React, { useState } from "react";
import "./login.css";

const ViewVisitorss = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/vis", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);

    setReturnedData(newData[0]);
  };

  fetchData();

  return (
    <>
      <title>View visitors </title>

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
              border="0"
              bgcolor="green"
              cellpadding="3"
              cellSpacing="2"
            >
              <caption>
                <h3>VISITORS INFORMATION</h3>
              </caption>
              <tr bgcolor="#CCCCCC">
                <th width="3%">National id</th>
                <th width="10%">Full Name</th>
                <th width="15%">Address</th>
                <th width="10%">Date of visit</th>
                <th width="10%">Time in</th>
                <th width="10%">Time out</th>
                <th width="10%">Relationship</th>
                <th width="10%">Telephone</th>
                <th width="3%">Prisoner Name</th>
              </tr>

              <tr bgcolor="grey">
                <td width="3%">{returnedData.id}</td>
                <td width="7%">{returnedData.fullname}</td>
                <td width="10%">{returnedData.address_}</td>
                <td width="10%">{returnedData.dateofvisit}</td>
                <td width="10%">{returnedData.timein}</td>
                <td width="10%">{returnedData.timeout}</td>
                <td width="3%">{returnedData.relationship}</td>
                <td width="10%">{returnedData.telephone}</td>
                <td width="10%">{returnedData.prisoner}</td>
              </tr>
            </table>

            <br />
          </td>
        </tr>
        <tr>
          <td align="center" bgcolor="green">
            <a href="/Officer" target="_parent">
              {" "}
              Officer Panel <b>|</b>
            </a>
            <a href="./VisitorReport" target="_parent">
              Report <b>|</b>
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

export default ViewVisitorss;