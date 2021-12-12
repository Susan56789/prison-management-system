import React from 'react';
import './login.css';
import banner from './banner.gif';
import  './prisoner';

const User = () => {
    return (
        <>
         <table align='center' border='1' bgcolor='green' width='820' cellpadding='10' cellspacing='0' height='215'>
          <tr>
            <td colspan='3' height='2'><img src={banner} alt=' ' /></td>
          </tr>
          <tr>
            <td height='1' colspan='3' align='right' bgcolor="#006600">&nbsp;</td>
          </tr>
		       
          
            <td width='4%' bgcolor='#FFFFFF' valign='top'>
<h3 align='center'  title='You should be online'>&nbsp;</h3></td>

            <td width='71%' valign='top' bgcolor="#FFFFFF">

<br/>
<h3 align='center'>RESPONSABILITY OF USER(PRISONNER REGISTRAT) </h3>
<p align='justify'>this is for user
  that allows the user to register new income prisonners, it is done by the officer in charge of registration 
  in the prison. he can only register.
   and his access is secured .
   </p>

			</td>
            <td width='25%' bgcolor='green'  valign='top'></td>
			
	
<table border='0' align='center'>

<td width="255" >
<h4>  USER MANAGEMENT : </h4><br/>
<div id="header">
      <div id="menu">
 <ul>

  <li><a href='./prisoner'><b>Prisoner Reg</b></a></li>
    <br/>
  <li><a href='./Registration'><b>Register Form</b></a></li>
		<br/>
	<li><a href='visitors.php'><b>visitors registration </b></a></li>
		<br/> 
  <li><a href='addofficer.php'><b>Officer registration </b></a></li>
    <br/> 
    <li><a href='/'><b>LOG OUT</b></a></li>
</ul>
</div>

</div>
</td>
</table>
</table>   
        </>
    );
}

export default User;
