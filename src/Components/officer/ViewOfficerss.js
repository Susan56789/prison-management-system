import React, { useState, useEffect } from "react";
import "./login.css";

const ViewOfficerss = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("http://localhost:3001/det", {
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
    // console.log(newData);
    setReturnedData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <title>Officer Details</title>

      <table
        align="center"
        border="0"
        bgcolor="green"
        width="1300"
        cellpadding="8"
        cellSpacing="0"
        height="200"
      >
        <td bgcolor="#999999" valign="center"></td>

        <table
          align="center"
          width="100%"
          bgcolor="GREEN"
          border="0"
          cellpadding="3"
          cellSpacing="2"
        >
          <caption>
            <h3>OFFICER DETAILS</h3>
          </caption>

          <tr bgcolor="#CCCCCC">
            <th width="3%">National id</th>
            <th width="10%">First Name</th>
            <th width="10%">Last Name</th>
            <th width="15%">Address</th>
            <th width="10%">Date of birth</th>
            <th width="10%">Gender</th>

            <th width="10%">Telephone</th>

            <th width="10%">Education</th>
            <th width="10%">Experiance</th>
          </tr>

          {returnedData.map((Data) => (
            <tr bgcolor="grey">
              <td width="3%">{Data.id}</td>
              <td width="7%">{Data.firstname}</td>
              <td width="10%">{Data.lastname}</td>
              <td width="10%">{Data.address_}</td>
              <td width="10%">{Data.dateofbirth}</td>
              <td width="10%">{Data.gender}</td>
              <td width="3%">{Data.telephone}</td>
              <td width="10%">{Data.education}</td>
              <td width="10%">{Data.experience}</td>
            </tr>
          ))}
        </table>

        <br />

        <tr>
          <td align="center" bgcolor="green">
            <a href="./Officer" target="_parent">
              {" "}
              Officer Panel <b>|</b>
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

export default ViewOfficerss;
