import React, { useState } from "react";
import "./login.css";
import banner from "./banner.gif";
import { withRouter } from "react-router";

const UserVisitors = (props) => {
  const [id, setid] = useState("");
  const [fullname, setfullname] = useState("");
  const [Month, setMonth] = useState("");

  const [timein, setTimein] = useState("");
  const [timeOutt, setTimeoutt] = useState("");
  const [address_, setAddress_] = useState("");
  const [tel, setTel] = useState("");
  const [relationship, setRelationship] = useState("");
  const [prisoner, setprisoner] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const data = {
    id: id,
    fullname: fullname,
    address: address_,
    timein: timein,
    timeout: timeOutt,
    Month: Month,
    telephone: tel,
    relationship: relationship,
    prisoner: prisoner,
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/regVisitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        setError("Something is wrong. Please try again later !");

        console.error("Error >>>", error);
      });
    setMessage("Registration successful");
    props.history.push("/User");
  };

  return (
    <>
      <table
        align="center"
        border="0"
        bgcolor="white"
        width="400"
        cellPadding="9"
        cellSpacing="0"
        height="525"
      >
        <tr>
          <td colSpan="2" height="2">
            <img src={banner} width="860" alt="" />
          </td>
        </tr>
        <tr>
          <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
            <font size="4">
              <a href="./User">HOME</a> |
            </font>
          </td>
        </tr>
        <tr>
          <td width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;
            <td width="50%" align="center" bgcolor="white">
              <div id="content" className="ctrdiv">
                <form id="frmReg" onSubmit={handleSubmit}>
                  <h2 id="hdr_title">Register visitor </h2>
                  <div className="control_input">
                    <label id="Nid" className="label">
                      National Id
                    </label>
                    <input
                      type="text"
                      id="Nid"
                      name="id"
                      className="reg_fields"
                      placeholder="00001111"
                      onChange={(e) => setid(e.target.value)}
                    />
                  </div>
                  <div className="control_input">
                    <label id="Fname" className="label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="Fname"
                      name="Fname"
                      className="reg_fields"
                      placeholder="Otienno jin"
                      onChange={(e) => setfullname(e.target.value)}
                    />
                  </div>

                  <div className="control_input">
                    <br />
                    <table>
                      <td>
                        <label id="tel" className="label">
                          Telephone
                        </label>
                      </td>
                      <td>
                        <input
                          type="tel"
                          onChange={(e) => setTel(e.target.value)}
                        />
                      </td>
                    </table>
                  </div>

                  <div className="control_input">
                    <br />
                    <table>
                      <td>
                        <label id="uemail" className="label">
                          Date of visit
                        </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          onChange={(e) => setMonth(e.target.value)}
                        />
                      </td>

                      <td>
                        <label id="timein" className="label">
                          Time In
                        </label>
                      </td>
                      <td>
                        <select
                          id="timein"
                          name="timein"
                          className="reg_fields"
                          onChange={(e) => setTimein(e.target.value)}
                        >
                          <option>----select---</option>
                          <option>12:00pm</option>
                          <option>12:30pm</option>
                          <option>1:00pm</option>
                          <option>1:30pm</option>
                          <option>2:00pm</option>
                          <option>2:30pm</option>
                          <option>3:00pm</option>
                          <option>3:30pm</option>
                          <option>4:00pm</option>
                          <option>4:30pm</option>
                          <option>5:00pm</option>
                        </select>
                      </td>
                    </table>
                  </div>

                  <div className="control_input">
                    <div>
                      <table>
                        <td>
                          <label id="timeout" className="label">
                            Time Out
                          </label>
                        </td>
                        <td>
                          <select
                            id="timeout"
                            name="timeout"
                            className="reg_fields"
                            onChange={(e) => setTimeoutt(e.target.value)}
                          >
                            <option>----select---</option>
                            <option>12:00pm</option>
                            <option>12:30pm</option>
                            <option>1:00pm</option>
                            <option>1:30pm</option>

                            <option>2:00pm</option>
                            <option>2:30pm</option>
                            <option>3:00pm</option>
                            <option>3:30pm</option>
                            <option>4:00pm</option>
                            <option>4:30pm</option>
                            <option>5:00pm</option>
                          </select>
                        </td>
                      </table>
                    </div>
                  </div>

                  <div className="control_input">
                    <label id="address" className="label">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="reg_fields"
                      required
                      placeholder="Rongai"
                      onChange={(e) => setAddress_(e.target.value)}
                    />
                  </div>

                  <div>
                    <table>
                      <td>
                        <label id="relationship" className="label">
                          relationship
                        </label>
                      </td>
                      <td>
                        <select
                          id="relationship"
                          name="relationship"
                          className="reg_fields"
                          onChange={(e) => setRelationship(e.target.value)}
                        >
                          <option>----select---</option>
                          <option>Parent</option>
                          <option>Friend</option>
                          <option>Wife</option>
                          <option>Husband</option>
                          <option>Daughter/Son</option>
                          <option>Relative</option>
                          <option>other</option>
                        </select>
                      </td>
                    </table>
                  </div>

                  <div className="control_input">
                    <div>
                      <table>
                        <td>
                          <label id="prison" className="label">
                            Prisoner Name
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            id="prison"
                            name="prison"
                            className="reg_fields"
                            onChange={(e) => setprisoner(e.target.value)}
                          />
                        </td>
                      </table>
                    </div>

                    <div>
                      {error && (
                        <>
                          <small style={{ color: "red" }}>{error}</small>
                          <br />
                        </>
                      )}
                      <br />
                      <div className="control_input">
                        <input type="submit" value="Submit" />
                      </div>

                      <div id="validation_msg">{message}</div>
                    </div>
                  </div>
                </form>
              </div>
            </td>
          </td>
        </tr>
      </table>
    </>
  );
};

export default withRouter(UserVisitors);
