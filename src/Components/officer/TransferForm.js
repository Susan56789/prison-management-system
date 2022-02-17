import React, { useState } from "react";

import "./login.css";

const TransferForms = () => {
  const [returnData, setReturnData] = useState([]);
  const [id, setId] = useState();
  const [from, setFrom] = useState();
  const [To, setTo] = useState();
  const [file, setFile] = useState();
  const [date, setDate] = useState();

  const data = {
    id: id,
    file: file,
    from: from,
    to: To,
    date: date,
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:3001/Prisonertransfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };

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
    //console.log(newData);

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
          <>
            <form
              bgcolor="white"
              height="431"
              border="0"
              align="center"
              width="200"
              onSubmit={handleSubmit}
            >
              <tr>
                <td>
                  <b>File Number</b>
                </td>

                <td>
                  <input
                    type="text"
                    onChange={(e) => setFile(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>National Id </b>{" "}
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setId(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td bgcolor="#FFFFFF">
                  <b>From Prison:</b>
                </td>
                <td>
                  <select name="From" onChange={(e) => setFrom(e.target.value)}>
                    <option>--Select prison---</option>
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
                  <select name="To" onChange={(e) => setTo(e.target.value)}>
                    <option>--Select prison---</option>
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
                </td>
                <td>
                  <input
                    type="date"
                    name="day"
                    size="4"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td height="26" bgcolor="#FFFFFF" align="center">
                  <input type="submit" value="SUBMIT" />
                </td>
              </tr>
            </form>
          </>
        </td>
      </table>
    </div>
  );
};

export default TransferForms;
