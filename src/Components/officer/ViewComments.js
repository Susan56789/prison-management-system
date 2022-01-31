import React, { useState, useEffect } from "react";
import "./login.css";

function ViewComments() {
  // function to fetch comments from database
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/comment", {
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

  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <tabl
        align="center"
        border="0"
        bgcolor="green"
        width="800"
        cellPadding="8"
        cellSpacing="0"
        height="200"
      >
        <tr>
          <td bgcolor="#999999" valign="center"></td>

          <table
            align="center"
            bgcolor="GREEN"
            width="100%"
            border="0"
            cellPadding="3"
            cellSpacing="2"
          >
            <caption>
              <h3>ANNOUNCE DETAILS</h3>
            </caption>
            <tr bgcolor="#CCCCCC">
              <th width="10%">Id</th>
              <th width="3%">To</th>
              <th width="15%">Subject</th>
              <th width="10%">Message</th>
            </tr>
            {returnedData.map((Data) => (
              <tr bgcolor="grey">
                <td width="10%">{Data.Id}</td>
                <td width="3%">{Data._to}</td>
                <td width="15%">{Data._subject}</td>
                <td width="10%">{Data._message}</td>
              </tr>
            ))}
          </table>
        </tr>
        <tr>
          <td align="center" bgcolor="green">
            <a href="/Officer" target="_parent">
              Officer Panel <b>|</b>
            </a>
            <a href="/" target="_parent">
              Log out
            </a>
          </td>
        </tr>
      </tabl>
    </div>
  );
}

export default ViewComments;
