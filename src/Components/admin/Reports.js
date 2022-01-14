import React from "react";
import "./login.css";
import banner from "./banner.gif";

const Reports = () => {
  return (
    <>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="540"
        cellpadding="9"
        cellspacing="0"
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
              <a href="./Admin">Admin Panel</a> |<a href="/">Log Out</a>
            </font>
          </td>
        </tr>
        <tr>
          <td align="center" bgcolor="green">
            <table
              align="center"
              border="0"
              bgcolor="black"
              width="600"
              height="100"
            >
              <tr>
                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <div class="container-brand">
                        <a href="/Report">YOU CAN GET GENERATE REPORT OF ALL</a>
                      </div>
                      <div>
                        <ul class="nav navbar-nav">
                          <td>
                            <li class="active">
                              <a href="#prisonerep">
                                <button>Prisonner Report</button>
                              </a>
                            </li>
                          </td>
                          <td>
                            <li>
                              <a href="#transferrep">
                                <button>Transfer Report</button>
                              </a>
                            </li>{" "}
                          </td>
                          <td>
                            <li>
                              <a href="#courtrep">
                                <button>Court Report</button>
                              </a>
                            </li>
                          </td>
                          <td>
                            <li>
                              <a href="#officer/visitorep">
                                <button>Visitor Report</button>
                              </a>
                            </li>
                          </td>
                          <td>
                            <li>
                              <a href="#Officerrep">
                                <button>Officer Report</button>
                              </a>
                            </li>
                          </td>
                          <td>
                            <li>
                              <a href="#newprisonrep">
                                <button>New Prison Report</button>
                              </a>
                            </li>
                          </td>
                          <td>
                            <li>
                              <a href="#Officereport">
                                <button>Officer details Report</button>
                              </a>
                            </li>
                          </td>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Reports;
