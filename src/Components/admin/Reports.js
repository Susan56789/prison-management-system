import React from 'react';
import './login.css';
import banner from './banner.gif';

const Reports = () => {
    return (
         <>
                   <table align="center" border="0" bgcolor="green" width="540" cellpadding="9" cellspacing="0" height="525">
          <tr>
            <td colSpan="3" height="2"><img src={banner} width="860"  alt=''/></td>
          </tr>
          <tr>
            <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
	     	<font size="4">
         
         <a href="./Admin">Admin Panel</a>  |
		     <a href="/">Log Out</a> 
          </font>
            </td>
          </tr>  
          <tr>
              <td>
                  <h1>Reports</h1>
              </td>
          </tr>
          </table>      
        </>
    )
}

export default Reports;
