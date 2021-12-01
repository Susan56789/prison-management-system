import React from 'react';
import './login.css';
import banner from './banner.gif';
import capture from './Capturee.gif';
import './Home';
import './About';


const Login = () => {

  const SignIn= () =>{
        console.log('user');
  }

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
          <tr>
            <td width="25%" bgcolor="#FFFFFF" >&nbsp;&nbsp;<img src={capture} width="200" height="179"  alt=""/></td>
            <td width="50%" align="center" bgcolor="#FFFFFF">
       


<form>

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
       <td height="36" bgcolor="#FFFFFF"> 
    <select>
		 <option value='guest' >User</option>
     <option value='police'>Police</option>
     <option value='admin' >Admin</option>
     </select>
     </td></tr>
    
<tr><td bgcolor="#FFFFFF" height="36"  align="center">
  <input type="submit" value="LOGIN" onClick={SignIn} />
  
  </td></tr>
</form>
</td>
</tr>

</table>

</div>
    )
}

export default Login;
