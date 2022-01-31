import React, { useState } from "react";
import "./login.css";
import banner from "./banner.gif";

const Prisoner = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    const newData = await fetch("/prisons", {
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
        <div>
          <div width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;
            <div width="50%" align="center" bgcolor="white">
              <div id="content" className="ctrdiv">
                <form id="frmReg" method="POST" action="prisonerval.php">
                  <h2 id="hdr_title">Register Prisoner </h2>
                  <>
                    <td className="control_input">
                      <label className="label">National Id</label>
                      <input
                        type="text"
                        id="Nid"
                        name="Nid"
                        size="8"
                        maxlength="8"
                        className="reg_fields"
                        required
                        placeholder="00001111"
                      />
                    </td>
                  </>
                  <>
                    <td className="control_input">
                      <label for="Fname" className="label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="Fname"
                        name="Fname"
                        className="reg_fields"
                        required
                        placeholder="Otienno jin"
                      />
                    </td>
                  </>

                  <tr className="control_input">
                    <label for="date" className="label">
                      Birth Date
                    </label>

                    <input
                      type="date"
                      id="txtDay"
                      name="txtDay"
                      className="reg_fields"
                    />
                  </tr>

                  <div className="control_input"></div>

                  <tr className="control_input">
                    <label for="datein" className="label">
                      Date In
                    </label>

                    <input
                      type="date"
                      id="TxtDay"
                      name="TxtDay"
                      className="reg_fields"
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
                        name="TXtDay"
                        className="reg_fields"
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
                      required
                      placeholder="Rongai"
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
                        >
                          <option selected="selected">Lamu</option>
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
                        >
                          <option selected="selected">Male</option>
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
                        >
                          <option selected="selected">KECP</option>
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
                    <label for="Pname" className="label">
                      Offence
                    </label>
                    <textarea
                      cols="17"
                      rows="4"
                      name="offence"
                      required
                      placeholder="fill this box"
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
                        >
                          <option selected="selected">3 months</option>
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
                      size="8"
                      maxlength="8"
                      className="reg_fields"
                      required
                      placeholder="xxx"
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
                          id="Add"
                          value="Add "
                          title=""
                          border="0"
                        />
                      </div>

                      <div id="validation_msg"></div>
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

export default Prisoner;
