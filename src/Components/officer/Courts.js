import React from "react";
import "./login.css";

const Courts = () => {
  return (
    <>
      <table border="1" bgcolor="#FFFFFF" align="center" width="54%">
        <tr bgcolor="#FF0000">
          <td align="center">
            <font size="4">
              <a href="./Officer">HOME</a> ||
              <a href="/transferForm">TRANSFERS</a>
            </font>
          </td>
        </tr>
        <tr>
          <td>
            <h2 className="bg-primary" align="center">
              COURT VERDICTS FORM
            </h2>

            <form action="validatecourt" method="post">
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
                    size="8"
                    maxlength="8"
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
                    <input type="date" name="dot" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Time</b>
                  </td>
                  <td>
                    <input type="time" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Prisoner Name</b>
                  </td>
                  <td>
                    <input type="text" placeholder="Jane Doe" />
                  </td>
                </tr>

                <tr>
                  <td bgcolor="#FFFFFF">
                    <b>Sentence:</b>
                  </td>
                  <td>
                    {" "}
                    <select name="sentence">
                      <option>2 Weeks</option>
                      <option>1 to 3 Months</option>
                      <option>1year</option>
                      <option>5 to 10 Years</option>
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
                      size="25"
                      maxlength="25"
                    />
                  </td>
                </tr>

                <td height="26" bgcolor="#FFFFFF" align="center">
                  <input type="submit" value="SAVE" />
                </td>
              </table>
            </form>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Courts;
