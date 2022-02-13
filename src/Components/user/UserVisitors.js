import React, { useState } from "react";
import "./login.css";
import banner from "./banner.gif";

const UserVisitors = () => {
  const [id, setid] = useState("");
  const [fullname, setfullname] = useState("");
  const [Month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [timein, setTimein] = useState("");
  const [timeOutt, setTimeoutt] = useState("");
  const [address_, setAddress_] = useState("");
  const [county, setCounty] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");
  const [prisoner, setprisoner] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [returnedData, setReturnedData] = useState([]);

  let sendData = async (e) => {
    e.preventDefault();

    return await fetch("/regVisitor", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        fullname: fullname,
        address_: address_,
        date: date,
        timein: timein,
        timeOutt: timeOutt,
        Month: Month,
        gender: gender,
        relationship: relationship,
        county: county,
        prisoner: prisoner,
      }),
    })
      .then((res) => {
        setLoading(false);
        setMessage("Registration successful");
        return res;
      })
      .catch((error) => {
        setLoading(false);

        setError("Something is wrong. Please try again later !");

        console.error("Error >>>", error);
      });
  };

  const fetchData = async () => {
    const newData = await fetch("/pris", {
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
        border="0"
        bgcolor="white"
        width="400"
        cellpadding="9"
        cellSpacing="0"
        height="525"
      >
        <tr>
          <td colspan="2" height="2">
            <img src={banner} width="860" alt="" />
          </td>
        </tr>
        <tr>
          <td colspan="3" bgcolor="#FF0000" height="1" align="center">
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
                <form id="frmReg">
                  <h2 id="hdr_title">Register visitor </h2>
                  <div className="control_input">
                    <label id="Nid" className="label">
                      National Id
                    </label>
                    <input
                      type="text"
                      id="Nid"
                      name="Nid"
                      size="8"
                      maxlength="8"
                      className="reg_fields"
                      required
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
                      required
                      placeholder="Otienno jin"
                      onChange={(e) => setfullname(e.target.value)}
                    />
                  </div>

                  <div className="control_input">
                    <div>
                      <table>
                        <tr>
                          <td>
                            <label id="date" className="label">
                              Birth Date
                            </label>
                          </td>
                          <td>
                            <input type="date" />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div className="control_input">
                    <br />
                    <table>
                      <td>
                        <label id="uemail" className="label">
                          Date in
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
                          <option>12:00am</option>
                          <option>12:30am</option>
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
                            <option>12:00am</option>
                            <option>12:30am</option>
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
                      <tr>
                        <td>
                          <label id="county" className="label">
                            County
                          </label>
                        </td>
                        <td>
                          <select
                            id="county"
                            name="county"
                            className="reg_fields"
                            onChange={(e) => setCounty(e.target.value)}
                          >
                            <option selected="selected" value="01">
                              Lamu
                            </option>
                            <option value="02">Nairobi</option>
                            <option value="03">Nakuru</option>
                            <option value="04">Mombassa</option>
                            <option value="04">Machakos</option>
                            <option value="06">Malindi</option>
                            <option value="07">Mandera</option>
                            <option value="08">Meru</option>
                          </select>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div>
                    <table>
                      <tr>
                        <td>
                          <label id="opendate" className="label">
                            Gender
                          </label>
                        </td>
                        <td>
                          <select
                            id="Gender"
                            name="Gender"
                            className="reg_fields"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option selected="selected" value="01">
                              Male
                            </option>
                            <option value="02">Female</option>
                          </select>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div></div>

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
                          <select
                            id="prison"
                            name="prison"
                            className="reg_fields"
                            onChange={(e) => setprisoner(e.target.value)}
                          >
                            <option>Select</option>
                            {returnedData.map((Data) => (
                              <option>{Data.Fullname}</option>
                            ))}
                          </select>
                        </td>
                      </table>

                      <div className="control_input">
                        {error && (
                          <>
                            <small style={{ color: "red" }}>{error}</small>
                            <br />
                          </>
                        )}
                        <br />
                        <input
                          type="submit"
                          value={loading ? "Loading..." : "SUBMIT"}
                          onSubmit={sendData}
                          disabled={loading}
                          className="btn btn-outline-primary"
                        />
                      </div>

                      <div id="validation_msg" style={{ color: "blue" }}>
                        {message}
                      </div>
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

export default UserVisitors;
