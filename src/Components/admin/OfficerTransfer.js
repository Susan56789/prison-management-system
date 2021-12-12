import React from 'react';
import './login.css';
import './Admin';

const OfficerTransfer = () => {
    return (
        <>
          <header>
<title> Officer Transfer Form</title>
</header>

<table width="45%" height="81" border="1" align="center" bgcolor="#FFFFFF">
<tr>
<td height="33" align="center" bgcolor="green">
<font size="5">
<a href="./Admin">Home</a> 
</font>
</td>
</tr>
<td border="0"  align="center" id="container" height="5" bgcolor="#FFFFFF">

<form action="processofficer.php" method="post">
<table bgcolor="white" height="431" border="0" align="center" width="50%">
<td width="34%" bgcolor="#FFFFFF"><b>identification Number:</b></td>
<td width="66%" bgcolor="#FFFFFF"><input type="text" name="Nid" required placeholder="9666" /></td>
<span class="required_notification"> Required</span>

<td width="34%" bgcolor="#FFFFFF"><b>Telephone Number:</b></td>
<td width="66%" bgcolor="#FFFFFF"><input type="text" name="Phone" size={12} maxlength={12} required placeholder="07888889"/></td>
	<span class="required_notification"> Required</span>
	


<tr><td bgcolor="#FFFFFF"><b>From Prison:</b></td>
        <td> <select name="From">
        <option>LANGATA</option>
		<option>KODIAGA</option>
		<option>SHIMOLATEWA</option>
        </select>
        </td></tr>
	<tr><td bgcolor="#FFFFFF"><b>To Prison:</b></td>
        <td> <select name="To">
		<option>LANGATA</option>
		<option>KODIAGA</option>
		<option>SHIMOLATEWA</option>
        </select>
        </td></tr>
        
<tr>
<td bgcolor="#FFFFFF"><b>Date of Transfer:</b></td>
<td bgcolor="#FFFFFF"><input type="text" name="dot" size={12} maxlength={12} required placeholder="YYYY-MM-DD" /></td>
</tr>

<tr>
  <td height="26" bgcolor="#FFFFFF" align="center"> <input type="submit" value="Add" /></td>
 </tr>
 </table>
</form>
</td>
<td bgcolor="#FFFFFF"></td>

</table>

        </>
    )
}

export default OfficerTransfer;
