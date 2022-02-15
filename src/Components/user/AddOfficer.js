import React, { useState } from "react";
import "./login.css";
import banner from "./banner.gif";

const AddOfficer = () => {
  const [id, setId] = useState(0);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState(0);
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState(0);
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [password, setPassword] = useState();

  const data = {
    id,
    firstname,
    lastname,
    address,
    dob,
    gender,
    tel,
    education,
    experience,
    password,
  };

  const clearInputs = () => {
    setId("");
    setAddress("");
    setDob("");
    setEducation("");
    setExperience("");
    setGender("");
    setPassword("");
    setfirstName("");
    setlastName("");
    setTel("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/newOfficers", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: data,
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    clearInputs();
  };

  return (
    <>
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
          <div width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;
            <td width="50%" align="center" bgcolor="white">
              <div id="content" className="ctrdiv">
                <form id="frmReg" onSubmit={handleSubmit}>
                  <h2 id="hdr_title">Officer Registration Form </h2>
                  <td className="control_input">
                    <label id="id" className="label">
                      Natioanal Id
                    </label>
                    <input
                      type="text"
                      id="id"
                      name="id"
                      size="14"
                      maxlength="8"
                      className="reg_fields"
                      placeholder="12345678"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </td>
                  <td className="control_input">
                    <label id="fname" className="label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="reg_fields"
                      placeholder="John"
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </td>
                  <td>
                    <label id="lname" className="label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="reg_fields"
                      placeholder="Doe"
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </td>
                  <td className="control_input">
                    <label id="address" className="label">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="reg_fields"
                      placeholder="langata"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>
                  <div className="control_input">
                    <div>
                      <table>
                        <tr>
                          <td>
                            <label id="dateofbirth" className="label">
                              Date of birth
                            </label>
                          </td>

                          <td>
                            <input
                              type="date"
                              id="txtDay"
                              name="txtDay"
                              className="reg_fields"
                              onChange={(e) => setDob(e.target.value)}
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div className="control_input">
                    <div>
                      <table>
                        <td>
                          <label id="gender" className="label">
                            Gender
                          </label>
                        </td>
                        <td>
                          <select
                            id="gender"
                            name="gender"
                            className="reg_fields"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </td>
                      </table>
                    </div>

                    <div className="control_input">
                      <label id="uemail" className="label">
                        Telephone No.
                      </label>
                      <input
                        type="text"
                        id="telephone"
                        name="telephone"
                        size="13"
                        maxlength="13"
                        className="reg_fields"
                        placeholder="074565558"
                        onChange={(e) => setTel(e.target.value)}
                      />
                    </div>

                    <div className="control_input">
                      <div>
                        <table>
                          <td>
                            <label id="campus" className="label">
                              Education Background
                            </label>
                          </td>
                          <td>
                            <select
                              id="education"
                              name="education"
                              className="reg_fields"
                              onChange={(e) => setEducation(e.target.value)}
                            >
                              <option>O level</option>
                              <option>Certificate</option>
                              <option>Diploma</option>
                              <option>Bsc/B.A</option>
                              <option>PDG</option>
                              <option>Master</option>
                              <option>PHD</option>
                            </select>
                          </td>
                        </table>
                      </div>

                      <div className="control_input">
                        <div>
                          <table>
                            <td>
                              <label id="campus" className="label">
                                Years of experience
                              </label>
                            </td>
                            <td>
                              <select
                                id="exp"
                                name="exp"
                                className="reg_fields"
                                onChange={(e) => setExperience(e.target.value)}
                              >
                                <option>1-6 months</option>
                                <option>1-2years</option>
                                <option>3-4years</option>
                                <option>5-7years</option>
                                <option>above 7 years</option>
                              </select>
                            </td>
                            <td>
                              <label>Password</label>
                              <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </td>
                          </table>
                        </div>

                        <div className="control_input">
                          <input
                            type="submit"
                            name="signup"
                            id="signup"
                            value="Submit"
                            title=""
                            border="0"
                          />
                        </div>

                        <div id="validation_msg"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </td>
          </div>
        </tr>
      </table>
    </>
  );
};

export default AddOfficer;
