import React, { useState } from "react";
import "./login.css";
import banner from "./banner.gif";
import { withRouter } from "react-router-dom";

function NewPrisons(props) {
  const [message, setMessage] = useState(null);
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [tel, setTel] = useState();
  const [capacity, setCapacity] = useState();
  const [error, setError] = useState(null);

  const data = {
    pnumber: number,
    pname: name,
    location: location,
    date: date,
    contact: tel,
    capacity: capacity,
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:3001/newPrisons", {
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
      .then((res) => {
        res.json();
      })
      .catch((error) => {
        setError("Something is wrong. Please try again later !");

        console.error("Error >>>", error);
      });

    e.preventDefault();
    setMessage("Registration Successful");
    props.history.push("/viewNewPrisons");
  };

  return (
    <div>
      <table
        align="center"
        border="0"
        bgcolor="white"
        width="400"
        cellpadding="9"
        cellspacing="0"
        height="525"
      >
        <tr>
          <td colSpan="2" height="2">
            <img src={banner} width="860" alt="banner" />
          </td>
        </tr>
        <tr>
          <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
            <font size="4">
              <a href="/Officer">HOME</a> |
            </font>
          </td>
        </tr>
        <tr>
          <td width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;{" "}
          </td>
          <td width="50%" align="center" bgcolor="white">
            <div id="content" className="ctrdiv">
              <form id="frmReg" onSubmit={handleSubmit}>
                <h2 id="hdr_title">Add New Prison </h2>
                <div className="control_input">
                  <label for="Pno" className="label">
                    Prison No
                  </label>
                  <input
                    type="text"
                    id="pno"
                    name="pno"
                    className="reg_fields"
                    placeholder="-XXXX/XX"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="control_input">
                  <label for="Pname" className="label">
                    Prison Name
                  </label>
                  <input
                    type="text"
                    id="pname"
                    name="pname"
                    className="reg_fields"
                    placeholder="xxx"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="control_input">
                  <label for="location" className="label">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="reg_fields"
                    placeholder="Mombasa"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="control_input">
                  <div style={{ display: "inline-block" }}>
                    <table>
                      <tr>
                        <td>
                          <label for="opendate" className="label">
                            Open Date
                          </label>

                          <input
                            id="Month"
                            name="date"
                            type="date"
                            className="reg_fields"
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="control_input">
                  <label for="contact" className="label">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    size="11"
                    className="reg_fields"
                    placeholder="074565558"
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>

                <div className="control_input">
                  <div style={{ display: "inline-block" }}>
                    <table>
                      <td>
                        <label for="Campus" className="label">
                          Capacity
                        </label>
                      </td>
                      <td style={{ margin: "0", padding: "0" }}>
                        <input
                          id="capacity"
                          name="capacity"
                          type="number"
                          className="reg_fields"
                          onChange={(e) => setCapacity(e.target.value)}
                        />
                      </td>
                    </table>
                  </div>
                </div>

                <div className="control_input">
                  {error && (
                    <>
                      <small style={{ color: "red" }}>{error}</small>
                      <br />
                    </>
                  )}
                  <input
                    type="submit"
                    name="signup"
                    id="Add"
                    value="Add "
                    title=""
                    border="0"
                  />
                </div>

                <div id="validation_msg">{message}</div>
              </form>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default withRouter(NewPrisons);
