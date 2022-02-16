import React from "react";
import "./login.css";

const Registration = () => {
  return (
    <>
      <table border="1" bgcolor="#FFFFFF" align="center" width="54%">
        <tr bgcolor="#FF0000">
          <td align="center">
            <font size="5">
              <a href="./User">HOME</a>
            </font>
          </td>
        </tr>

        <td>
          <h2 className="bg-primary" align="center">
            PRISONNER REGISTRATION FORM
          </h2>
          <div id="content">
            <form action="validate" method="post">
              <table
                bgcolor="white"
                height="450"
                border="0"
                align="center"
                width="65%"
              >
                <tr>
                  <tr>
                    <td width="34%" bgcolor="#FFFFFF">
                      <b>National Id:</b>
                      <input
                        type="text"
                        name="id"
                        size="8"
                        maxlength="8"
                        required
                        placeholder="XX111100"
                      />

                      <tr>
                        <td bgcolor="#FFFFFF">
                          <b>Full Name:</b>
                          <input
                            type="text"
                            name="Fullname"
                            required
                            placeholder="Alexandia James"
                          />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label for="on">
                            <b>Date of Birth:</b>
                          </label>

                          <input type="date" name="dateofbirth" />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label for="on">
                            <b>Date In:</b>
                          </label>
                        </td>
                        <td>
                          <input type="date" name="datein" />
                        </td>
                      </tr>

                      <br />

                      <tr>
                        <tr>
                          <td>
                            <label for="on">
                              <b>Date Out:</b>
                            </label>
                          </td>
                          <td>
                            <input type="date" name="dateout" />
                          </td>
                        </tr>
                        <br />

                        <tr>
                          <td bgcolor="#FFFFFF">
                            <b>Address:</b>
                          </td>
                          <td bgcolor="#FFFFFF">
                            <input
                              type="text"
                              name="address"
                              placeholder="address"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td bgcolor="#FFFFFF">
                            <b>County:</b>
                          </td>
                          <td>
                            {" "}
                            <select name="county">
                              <option>Nairobi</option>
                              <option>Nakuru</option>
                              <option>Mombassa</option>
                              <option>Machakos</option>
                              <option>Malindi</option>
                              <option>Mandera</option>
                              <option>Meru</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Gender</b>
                          </td>
                          <td>
                            <select>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </td>

                          <tr>
                            <td bgcolor="#FFFFFF">
                              <b>Education Level:</b>
                            </td>
                            <td>
                              {" "}
                              <select name="education">
                                <option>Never</option>
                                <option>Highschool/Secondary</option>
                                <option>Diploma</option>
                                <option>Bachelor Degree</option>
                                <option>Above</option>
                              </select>
                            </td>
                          </tr>
                          <br />

                          <tr>
                            <td bgcolor="#FFFFFF">
                              <b>Marital Status:</b>
                            </td>
                            <td>
                              {" "}
                              <select name="status">
                                <option>Divorced</option>
                                <option>Married</option>
                                <option>Single</option>
                              </select>
                            </td>
                          </tr>
                          <br />

                          <tr>
                            <td bgcolor="#FFFFFF">
                              <b>Offence</b>
                            </td>
                            <td bgcolor="#FFFFFF">
                              <font size="4">
                                <textarea
                                  cols="17"
                                  rows="4"
                                  name="offence"
                                  placeholder="fill this box"
                                ></textarea>
                              </font>
                            </td>
                          </tr>
                          <br />

                          <tr>
                            <td bgcolor="#FFFFFF">
                              <b>Sentence:</b>
                              <input
                                type="text"
                                name="sentence"
                                placeholder="2 Years"
                              />
                            </td>
                          </tr>
                          <br />

                          <tr>
                            <td bgcolor="#FFFFFF">
                              <b>File Number:</b>
                            </td>
                            <td bgcolor="#FFFFFF">
                              <input
                                type="text"
                                name="Filenum"
                                placeholder="NBI-001XX"
                              />
                            </td>
                          </tr>

                          <br />

                          <td height="26" bgcolor="#FFFFFF" align="center">
                            <input type="submit" value="SAVE" />
                          </td>
                        </tr>
                      </tr>
                    </td>
                  </tr>
                </tr>
              </table>
            </form>
          </div>
        </td>
      </table>
    </>
  );
};

export default Registration;
