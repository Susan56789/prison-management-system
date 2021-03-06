import React from "react";
import "./login.css";

const Court = () => {
  return (
    <>
      <header>
        <title>Court form</title>
      </header>

      <table border="1" bgcolor="#FFFFFF" align="center" width="54%">
        <tr bgcolor="#FF0000">
          <td align="center">
            <font size="4">
              <a href="./Admin">HOME</a> ||
              <a href="./ViewTransfer">TRANSFER</a>
            </font>
          </td>
        </tr>

        <td>
          <h2 className="bg-primary" align="center">
            COURT VERDICTS FORM
          </h2>

          <form action="validatecourt.php" method="post">
            <table
              bgcolor="white"
              height="431"
              border="0"
              align="center"
              width="50%"
            >
              <td width="34%" bgcolor="#FFFFFF">
                <b>National Id:</b>
              </td>
              <td width="66%" bgcolor="#FFFFFF">
                <input
                  type="text"
                  name="Nationalid"
                  size="4"
                  maxlength="7"
                  required
                  placeholder="99999"
                />
              </td>

              <tr>
                <td bgcolor="#FFFFFF">
                  <b>File Number:</b>
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="Filenum"
                    size="6"
                    maxlength="7"
                    required
                    placeholder="NBI-9999"
                  />
                </td>
              </tr>

              <tr>
                <td bgcolor="#FFFFFF">
                  <b>Date Of Trial:</b>
                </td>
                <td bgcolor="#FFFFFF">
                  <input type="text" name="dot" />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="on">
                    <b>Date Of Trial:</b>
                  </label>
                  <td>
                    <select name="month" required>
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
                      name="day"
                      size="4"
                      maxlength="2"
                      required
                      placeholder="DD"
                    />
                  </td>

                  <td>
                    <select name="year" required>
                      <option selected="selected" value="01">
                        2014
                      </option>
                      <option value="02">2015</option>
                    </select>
                  </td>
                </td>
              </tr>
              <tr>
                <td bgcolor="#FFFFFF">
                  <b>Sentence:</b>
                </td>
                <td>
                  <select name="sentence">
                    <option>2 Weeks</option>
                    <option>1 to 3 Months</option>
                    <option>1year</option>
                    <option>5 to 1o Years</option>
                    <option>15 Above</option>
                    <option>Life Sentence</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td bgcolor="#FFFFFF">
                  <b>Court Location:</b>
                </td>
                <td>
                  {" "}
                  <select name="location">
                    <option>Milimani Court</option>
                    <option>Kibera Court</option>
                    <option>Maseno Court</option>
                    <option>Kwale Court</option>
                    <option>Kisumu Court</option>
                    <option>Shanzu Court</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td bgcolor="#FFFFFF">
                  <b>Judge Name:</b>
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="judge"
                    required
                    placeholder="Jury President"
                  />
                </td>
              </tr>

              <td height="26" bgcolor="#FFFFFF" align="center">
                <input type="submit" value="SAVE" />
              </td>
            </table>
          </form>
        </td>
      </table>
    </>
  );
};

export default Court;
