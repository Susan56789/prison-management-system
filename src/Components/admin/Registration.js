import React, { useState } from "react";
import "./login.css";
import "./Admin";
import { withRouter } from "react-router";

const Registrations = (props) => {
  const [returnedData, setReturnedData] = useState([]);
  const [message, setMessage] = useState(null);
  const [id, setId] = useState();
  const [fullname, setFullname] = useState();
  const [dob, setDob] = useState();
  const [datein, setDatein] = useState();
  const [dateout, setDateout] = useState();
  const [address, setAddress] = useState();
  const [county, setCounty] = useState();
  const [gender, setGender] = useState();
  const [education, setEducation] = useState();
  const [status, setStatus] = useState();
  const [offence, setOffence] = useState();
  const [sentence, setSentence] = useState();
  const [file, setFile] = useState();
  const [prison, setPrison] = useState();

  const data = {
    id: id,
    fullname: fullname,
    dateofbirth: dob,
    datein: datein,
    dateout: dateout,
    address: address,
    county: county,
    gender: gender,
    education: education,
    status: status,
    offence: offence,
    sentence: sentence,
    filenum: file,
    prison: prison,
  };

  const fetchData = async () => {
    const newData = await fetch("http://localhost:3001/prisons", {
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

  const handleSubmit = (e) => {
    fetch("http://localhost:3001/newPrisoners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
      return response;
    });

    e.preventDefault();

    setMessage("Registration Successful");
    props.history.push("/Admin");
  };

  return (
    <>
      <table
        align="center"
        border="0"
        bgcolor="white"
        width="800"
        cellpadding="9"
        cellSpacing="0"
        height="525"
      >
        <tr></tr>
        <tr>
          <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
            <font size="4">
              <a href="./Admin">HOME</a> |
            </font>
          </td>
        </tr>
        <div>
          <div width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;
            <div width="50%" align="center" bgcolor="white">
              <div id="content" className="ctrdiv">
                <form id="frmReg" onSubmit={handleSubmit}>
                  <h2 id="hdr_title">Register Prisoner </h2>
                  <>
                    <td className="control_input">
                      <label className="label">National Id</label>
                      <input
                        type="text"
                        id="id"
                        name="id"
                        className="reg_fields"
                        placeholder="00001111"
                        onChange={(e) => setId(e.target.value)}
                      />
                    </td>
                  </>
                  <>
                    <td className="control_input">
                      <label className="label">Full Name</label>
                      <input
                        type="text"
                        id="Fullname"
                        name="Fname"
                        placeholder="Otienno jin"
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </td>
                  </>

                  <tr className="control_input">
                    <label className="label">Birth Date</label>

                    <input
                      type="date"
                      id="txtDay"
                      name="dateofbirth"
                      className="reg_fields"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </tr>

                  <div className="control_input"></div>

                  <tr className="control_input">
                    <label className="label">Date In</label>

                    <input
                      type="date"
                      id="datein"
                      name="datein"
                      className="reg_fields"
                      onChange={(e) => setDatein(e.target.value)}
                    />
                    <td>
                      <label for="opendate" className="label">
                        Date Out
                      </label>
                    </td>

                    <td>
                      <input
                        type="date"
                        id="TXtDay"
                        name="dateout"
                        className="reg_fields"
                        onChange={(e) => setDateout(e.target.value)}
                      />
                    </td>
                  </tr>

                  <td className="control_input">
                    <label className="label">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="reg_fields"
                      placeholder="Rongai"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>

                  <div>
                    <>
                      <td>
                        <label className="label">County</label>
                      </td>
                      <td>
                        <select
                          id="county"
                          name="county"
                          className="reg_fields"
                          onChange={(e) => setCounty(e.target.value)}
                        >
                          <option>----select---</option>
                          <option>Lamu</option>
                          <option>Nairobi</option>
                          <option>Nakuru</option>
                          <option>Mombassa</option>
                          <option>Machakos</option>
                          <option>Malindi</option>
                          <option>Mandera</option>
                          <option>Meru</option>
                        </select>
                      </td>
                    </>
                  </div>

                  <div>
                    <>
                      <td>
                        <label className="label">Gender</label>
                      </td>
                      <td>
                        <select
                          id="Gender"
                          name="Gender"
                          className="reg_fields"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option>----select---</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </td>
                    </>
                  </div>

                  <>
                    <tr>
                      <td>
                        <label className="label">Education Level</label>
                      </td>
                      <td>
                        <select
                          id="education"
                          name="education"
                          className="reg_fields"
                          onChange={(e) => setEducation(e.target.value)}
                        >
                          <option>----select---</option>
                          <option>KCPE</option>
                          <option>Never</option>
                          <option>O level</option>
                          <option>Certificate</option>
                          <option>Diploma</option>
                          <option>Bachelor Degree</option>
                          <option>PGD</option>
                          <option>Above</option>
                        </select>
                      </td>
                    </tr>
                  </>

                  <div>
                    <>
                      <td>
                        <label className="label">Maritial Status</label>
                      </td>
                      <td>
                        <select
                          id="status"
                          name="status"
                          className="reg_fields"
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option selected="selected">Select</option>
                          <option>Divorced</option>
                          <option>Widowed</option>
                          <option>Married</option>
                          <option>Single</option>
                          <option>In Relationship</option>
                        </select>
                      </td>
                    </>
                  </div>

                  <td className="control_input">
                    <label className="label">Offence</label>
                    <textarea
                      cols="17"
                      rows="4"
                      name="offence"
                      placeholder="fill this box"
                      onChange={(e) => setOffence(e.target.value)}
                    ></textarea>
                  </td>

                  <>
                    <>
                      <td>
                        <label className="label">Sentence</label>
                      </td>
                      <td>
                        <select
                          id="sentence"
                          name="sentence"
                          className="reg_fields"
                          onChange={(e) => setSentence(e.target.value)}
                        >
                          <option>3 months</option>
                          <option>6 months</option>
                          <option>1 year</option>
                          <option>2 years</option>
                          <option>3 year</option>
                          <option>5 year</option>
                          <option>7 year</option>
                          <option>10 year</option>
                        </select>
                      </td>
                    </>
                  </>

                  <div className="control_input">
                    <label for="Filenum" className="label">
                      File Number
                    </label>
                    <input
                      type="text"
                      id="Filenum"
                      name="Filenum"
                      className="reg_fields"
                      placeholder="xxx"
                      onChange={(e) => setFile(e.target.value)}
                    />
                  </div>

                  <div className="control_input">
                    <div>
                      <td>
                        <label for="Campus" className="label">
                          Prison
                        </label>
                      </td>
                      <td>
                        <select
                          id="prison"
                          name="prison"
                          className="reg_fields"
                          onChange={(e) => setPrison(e.target.value)}
                        >
                          <option value="">--Select prison--</option>
                          {returnedData.map((Data) => (
                            <option>{Data.pname}</option>
                          ))}
                        </select>
                      </td>

                      <div className="control_input">
                        <input
                          type="submit"
                          name="signup"
                          value="Submit "
                          border="0"
                        />
                      </div>

                      <div id="validation_msg">{message}</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </table>
    </>
  );
};

export default withRouter(Registrations);
