import React from 'react';
import './login.css';
import banner from './banner.gif';

const About = () => {
    return (
        <div>
        <table align="center" border="0" bgcolor="green" width="540" cellpadding="9" cellspacing="0" height="525">
          <tr>
            <td colSpan="3" height="2"><img src={banner} width="860"  alt=''/></td>
          </tr>
          <tr>
            <td colSpan="3" bgcolor="#FF0000" height="1" align="center">
	     	<font size="4">
         
         <a href="/">HOME</a>  |
		     <a href="./About">ABOUT US</a> 
          </font>
            </td>
          </tr>
            
           <h2>Prison Management System</h2> 
           <p>Welcome !</p>
        </table>
        </div>
    );
}

export default About;
