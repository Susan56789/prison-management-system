import React from "react";
import "./login.css";
import banner from "./banner.gif";

const Locations = () => {
  return (
    <>
      <header>
        <title>KENYA PRISONS SERVICE</title>
      </header>
      <table
        align="center"
        border="0"
        bgcolor="green"
        width="820"
        cellpadding="10"
        cellSpacing="0"
        height="325"
      >
        <tr>
          <td colSpan="3" height="2">
            <img src={banner} alt="banner" />
          </td>
        </tr>

        <td colSpan="7" bgcolor="#yellow" height="1" align="center">
          <ul>
            <li>
              <a style={{ margin: "5px", pading: "5px" }} href="./Admin">
                Home
              </a>
            </li>
            <li>
              <a style={{ margin: "5px", pading: "5px" }} href="./SearchForm">
                Search{" "}
              </a>
            </li>
            <li>
              <a href="./Location">Location</a>
            </li>

            <li>
              <a style={{ margin: "5px", pading: "5px" }} href="viewCommentss">
                Complain
              </a>
            </li>
            <li>
              <a style={{ margin: "5px", pading: "5px" }} href="./ViewTransfer">
                Prisoner Trans{" "}
              </a>
            </li>
            <li>
              <a
                style={{ margin: "5px", pading: "5px" }}
                href="./OfficerTransfer"
              >
                Officer
              </a>
            </li>
            <li>
              <a style={{ margin: "5px", pading: "5px" }} href="./Registration">
                Register
              </a>
            </li>

            <li>
              <a style={{ margin: "5px", pading: "5px" }} href="./Court">
                Court
              </a>
            </li>
          </ul>
        </td>

        <td height="1" colSpan="3" align="right" bgcolor="#006600">
          &nbsp;
        </td>

        <tr>
          <td width="4%" bgcolor="#FFFFFF" valign="top">
            <h3 align="center" title="You should be online">
              &nbsp;
            </h3>
          </td>

          <td width="11%" valign="top" bgcolor="#FFFFFF">
            <br />
            <div id="content">
              <div id="gallerycontainer">
                <div className="portfolio-area">
                  <iframe
                    width="100%"
                    title="iframe1"
                    height="390"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com.ph/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Florida+Bus+Terminal,+West+Kamias,+Quezon+City,+Metro+Manila&amp;aq=0&amp;oq=floridBarangay+West+Kamias,+Cubao,+Quezon+City,+Metro+Manila&amp;sll=14.630676,121.047814&amp;sspn=0.011772,0.021136&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Florida+Bus+Terminal,+Quezon+City,+Metro+Manila&amp;ll=14.630676,121.047814&amp;spn=0.011772,0.021136&amp;z=14&amp;output=embed"
                  ></iframe>
                  <br />
                  <small>
                    <a href="https://maps.google.com.ph/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Florida+Bus+Terminal,+West+Kamias,+Quezon+City,+Metro+Manila&amp;aq=0&amp;oq=floridBarangay+West+Kamias,+Cubao,+Quezon+City,+Metro+Manila&amp;sll=14.630676,121.047814&amp;sspn=0.011772,0.021136&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Florida+Bus+Terminal,+Quezon+City,+Metro+Manila&amp;ll=14.630676,121.047814&amp;spn=0.011772,0.021136&amp;z=14">
                      View Larger Map
                    </a>
                  </small>
                  <div className="column-clear"></div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <br />
          </td>
          <td width="75%" bgcolor="green" valign="top">
            <table border="0" align="center">
              <tr>
                <td width="552" bgcolor="green">
                  <h3> Admin Management : </h3>
                  <br />
                  <ul>
                    <li>
                      <a href="./ViewOfficer">
                        <b>View Officer Transfer</b>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="./ViewPrisoners">
                        <b>Prisoners Information Display</b>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="./ViewCase">
                        <b>Case Information View</b>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="./ViewTransfer">
                        <b>Prisoners Transfer Information</b>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="/viewCommentss">
                        <b>View Comment</b>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="/">
                        <b>LOG OUT</b>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colSpan="3" align="center" bgcolor="#FF0000" height="1">
            &copy; <strong>&nbsp;2021 Prison Management System By Susan</strong>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Locations;
