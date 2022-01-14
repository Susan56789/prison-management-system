import React from "react";
import "./login.css";
import banner from "./banner.gif";

function NewPrisons() {
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
              <form id="frmReg" method="POST" action="validatenewprison.php">
                <h2 id="hdr_title">Add New Prison </h2>
                <div className="control_input">
                  <label for="Pno" className="label">
                    Prison No
                  </label>
                  <input
                    type="text"
                    id="pno"
                    name="pno"
                    size="5"
                    maxlength="5"
                    className="reg_fields"
                    required
                    placeholder="-XXXX/XX"
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
                    required
                    placeholder="xxx"
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
                    required
                    placeholder="Mombasa"
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
                        </td>
                        <td style={{ margin: "0", padding: "0" }}>
                          <select
                            id="lMonth"
                            name="lMonth"
                            className="reg_fields"
                            style={{
                              margin: "0 0 0 -5px",
                              height: "36px",
                              display: "block",
                            }}
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
                            style={{ width: "40px" }}
                            value="DD"
                            className="reg_fields"
                          />
                          <input
                            type="text"
                            id="txtYear"
                            name="txtYear"
                            style={{ width: "60px" }}
                            value="YYYY"
                            className="reg_fields"
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
                    maxlength="11"
                    className="reg_fields"
                    required
                    placeholder="074565558"
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
                        <select
                          id="capacity"
                          name="capacity"
                          className="reg_fields"
                          style={{
                            margin: "0 0 0 -5px",
                            height: "36px",
                            display: "block",
                          }}
                        >
                          <option value="">--Select capacity--</option>
                          {/**Select from database */}
                        </select>
                      </td>
                    </table>
                  </div>
                </div>

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
              </form>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default NewPrisons;
