import React from "react";
import "./login.css";
import banner from "./banner.gif";

const AddOfficer = () => {
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
                <form id="frmReg" method="POST" action="validateofficer">
                  <h2 id="hdr_title">Officer Registration Form </h2>
                  <td className="control_input">
                    <label for="id" className="label">
                      Natioanal Id
                    </label>
                    <input
                      type="text"
                      id="id"
                      name="id"
                      size="14"
                      maxlength="8"
                      className="reg_fields"
                      required
                      placeholder="12345678"
                    />
                  </td>
                  <td className="control_input">
                    <label for="fullname" className="label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="reg_fields"
                      required
                      placeholder="John otieno"
                    />
                  </td>
                  <td className="control_input">
                    <label for="address" className="label">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="reg_fields"
                      required
                      placeholder="langata"
                    />
                  </td>

                  <div className="control_input">
                    <div>
                      <table>
                        <tr>
                          <td>
                            <label for="dateofbirth" className="label">
                              Date of birth
                            </label>
                          </td>

                          <td>
                            <input
                              type="date"
                              id="txtDay"
                              name="txtDay"
                              className="reg_fields"
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
                          <label for="gender" className="label">
                            Gender
                          </label>
                        </td>
                        <td>
                          <select
                            id="gender"
                            name="gender"
                            className="reg_fields"
                          >
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </td>
                      </table>
                    </div>

                    <div className="control_input">
                      <label for="uemail" className="label">
                        Telephone No.
                      </label>
                      <input
                        type="text"
                        id="telephone"
                        name="telephone"
                        size="13"
                        maxlength="13"
                        className="reg_fields"
                        required
                        placeholder="074565558"
                      />
                    </div>

                    <div className="control_input">
                      <div>
                        <table>
                          <td>
                            <label for="campus" className="label">
                              Education Background
                            </label>
                          </td>
                          <td>
                            <select
                              id="education"
                              name="education"
                              className="reg_fields"
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
                              <label for="campus" className="label">
                                Years of experience
                              </label>
                            </td>
                            <td>
                              <select
                                id="exp"
                                name="exp"
                                className="reg_fields"
                              >
                                <option>1-6 months</option>
                                <option>1-2years</option>
                                <option>3-4years</option>
                                <option>5-7yrs</option>
                                <option>7-above</option>
                              </select>
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
