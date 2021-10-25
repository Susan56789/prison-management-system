import React from 'react';
import './login.css';
import banner from './banner.gif';

const Login = () => {
    return (
        
<div>
<table align="center" border="0" bgcolor="green" width="540" cellpadding="9" cellspacing="0" height="525">
          <tr>
            <td colspan="3" height="2"><img src={banner} width="860"  alt=''/></td>
          </tr>
          <tr>
            <td colspan="3" bgcolor="#FF0000" height="1" align="center">
	     	<font size="4">
         
         <a href="index.php">HOME</a>  |
		     <a href="location.php">ABOUT US</a> 
          </font>
            </td>
          </tr>
          <tr>
            <td width="25%" bgcolor="#FFFFFF" >&nbsp;&nbsp;<img src="capturee.gif" width="200" height="179"  alt=""/></td>
            <td width="50%" align="center" bgcolor="#FFFFFF">
       


<form action="./Logged.js" method="post">

	    <h2><b>LOGIN MEMBERS </b></h2>

<tr>
<td height="36" bgcolor="#FFFFFF"><b>User Name:</b></td>
<td height="36" bgcolor="#FFFFFF"><input type="text" name="username" /></td>
</tr>

<tr>
<td height="36" bgcolor="#FFFFFF"><b>Password:</b></td>
<td height="36" bgcolor="#FFFFFF"><input type="password" name="password" /></td>
</tr>
<tr><td bgcolor="#FFFFFF"><b>Select User:</b></td>
       <td height="36" bgcolor="#FFFFFF"> <select name="cmbUser"/>
		 <option>User</option>
     <option>Police</option>
     <option>Admin</option></td></tr>
<tr><td bgcolor="#FFFFFF" height="36"  align="center"><input type="submit" value="LOGIN" /></td></tr>
</form>
</td>
</tr>

</table>

</div>
    )
}

export default Login;
