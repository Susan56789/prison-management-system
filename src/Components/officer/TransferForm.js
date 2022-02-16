import React, { useState } from "react";

import "./login.css";

const TransferForms = () => {
  const [returnedData, setReturnedData] = useState([]);
  const [returnData, setReturnData] = useState([]);

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

  const getData = async () => {
    const newData = await fetch("http://localhost:3001/prisons", {
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

    setReturnData(newData);
  };

  getData();

  return (
    <div>
      <table
        width="60%"
        height="91"
        border="1"
        align="center"
        bgcolor="#FFFFFF"
      >
        <tr>
          <td height="33" align="center" bgcolor="green">
            <font size="5">
              <a href="/Officer">HOME</a>
            </font>
          </td>
        </tr>
        <td height="5" bgcolor="#FFFFFF"></td>
        <td>
          <h2 class="bg-primary" align="center">
            TRANSFER FORM FOR PRISONERS
          </h2>
          <form action="validatetransfer" method="post">
            <form
              bgcolor="white"
              height="431"
              border="0"
              align="center"
              width="50%"
            >
              <tr>
                <td>
                  <b>National Id </b>{" "}
                </td>
                <td>
                  <select name="Nid">
                    <option value="">--Select National Id--</option>
                    {returnedData.map((Data) => (
                      <option>{Data.id}</option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <b>Time </b>{" "}
                </td>
                <td>
                  <input type="time" />
                </td>
              </tr>

              <tr>
                <td bgcolor="#FFFFFF">
                  <b>From Prison:</b>
                </td>
                <td>
                  <select name="From">
                    {returnData.map((Data) => (
                      <option>{Data.pname}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td bgcolor="#FFFFFF">
                  <b>To Prison:</b>
                </td>
                <td>
                  <select name="To">
                    {returnData.map((Data) => (
                      <option>{Data.pname}</option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="on">
                    <b>Date of Transfer:</b>
                  </label>

                  <td>
                    <input type="date" name="day" size="4" maxlength="2" />
                  </td>

                  <td height="26" bgcolor="#FFFFFF" align="center">
                    <input type="submit" value="SUBMIT" />
                  </td>
                </td>
              </tr>
            </form>
          </form>
        </td>
      </table>
    </div>
  );
};

export default TransferForms;
