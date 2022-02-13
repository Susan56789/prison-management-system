import React, { useState } from "react";
import banner from "../banner.gif";
import capture from "../Capturee.gif";
import "../login.css";
import { withRouter } from "react-router";

const LoginUser = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    await fetch("/userLogin", {
      method: "POST",
      body: {
        id: id,
        password: password,
      },
    })
      .then((res) => {
        JSON.stringify(res);

        props.history.push("/User");
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401) {
          setError(error.response.data.message);
        } else {
          setError("Something is wrong. Please try again later !");
        }
        console.error("Error >>>", error);
      });
  };
  return (
    <div>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="540"
        cellPadding="9"
        cellSpacing="0"
        height="525"
      >
        <tr>
          <td colSpan="3" height="2">
            <img src={banner} width="860" alt="" />
          </td>
        </tr>
        <tr>
          <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
            <font size="4">
              <a href="/">HOME</a> |<a href="./About">ABOUT US</a>
            </font>
          </td>
        </tr>
        <tr>
          <td width="25%" bgcolor="#FFFFFF">
            &nbsp;&nbsp;
            <img src={capture} width="200" height="179" alt="" />
          </td>
          <td width="50%" align="center" bgcolor="#FFFFFF">
            <form onSubmit={handleSubmit}>
              <h2>
                <b>USER LOGIN</b>
              </h2>

              <tr>
                <td height="36" bgcolor="#FFFFFF">
                  <b>National ID</b>
                </td>
                <td height="36" bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="id"
                    onChange={(e) => setId(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td height="36" bgcolor="#FFFFFF">
                  <b>Password:</b>
                </td>
                <td height="36" bgcolor="#FFFFFF">
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {error && (
                    <>
                      <small style={{ color: "red" }}>{error}</small>
                      <br />
                    </>
                  )}
                </td>
                <td bgcolor="#fff" height="36" align="center">
                  <button type="submit">LOGIN</button>
                </td>
              </tr>
            </form>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default withRouter(LoginUser);
