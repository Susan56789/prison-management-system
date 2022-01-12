import React, { useEffect, useState } from "react";
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
  const [message, setMessage] = useState("");

  let sendData = async (e) => {
    //e.preventDefault();

    const newData = await fetch("/userlogin", {
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
        message: message,
      }),
    });
    //let Report = await newData.json();

    if (newData.status === 200) {
      setid("");
      setprisoner("");
      setfullname("");
      setAddress_("");
      setDate("");
      setTimein("");
      setTimeoutt("");
      setRelationship("");
      setGender("");
      setCounty("");
      setMonth("");
      setMessage("User created Successfully");
    } else {
      setMessage("Some error occored. Ry again !");
    }
  };

  useEffect(() => {
    sendData();
  });

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
                <form id="frmReg" method="POST" onSubmit={sendData}>
                  <h2 id="hdr_title">Register visitor </h2>
                  <div className="control_input">
                    <label for="Nid" className="label">
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
                    <label for="Fname" id="name" className="label">
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
                            <label for="date" className="label">
                              Birth Date
                            </label>
                          </td>
                          <td>
                            <select
                              id="lMonth"
                              name="1Month"
                              className="reg_fields"
                            >
                              <option selected="selected" value="01">
                                January
                              </option>
                              <option value="02">February</option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="txtDay"
                              name="txtDay"
                              value="DD"
                              className="reg_fields"
                            />
                            <input
                              type="text"
                              id="txtYear"
                              name="txtYear"
                              value="YYYY"
                              className="reg_fields"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div className="control_input">
                    <br />
                    <table>
                      <td>
                        <label for="uemail" className="label">
                          Date
                        </label>
                      </td>
                      <td>
                        <select
                          onChange={(e) => setMonth(e.target.value)}
                          id="Month"
                          name="Month"
                          className="reg_fields"
                        >
                          <option selected="selected" value="01">
                            January
                          </option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </td>
                      <td>
                        <label for="timein" id="timein" className="label">
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
                          <label for="timeout" className="label">
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
                    <label for="address" className="label">
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
                          <label for="county" className="label">
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
                          <label for="opendate" className="label">
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
                        <label for="relationship" className="label">
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
                          <label for="prison" className="label">
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
                            <option value="">--Select prison--</option>
                            {/**Select from Database */}
                          </select>
                        </td>
                      </table>

                      <div className="control_input">
                        <input
                          type="submit"
                          name="signup"
                          id="Add"
                          value="Add "
                          title=""
                          border="0"
                        />
                      </div>

                      <div id="validation_msg">{setMessage}</div>
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
