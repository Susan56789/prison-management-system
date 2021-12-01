import React from 'react';
import './login.css';
import banner from './banner.gif';
import './Admin';
import '../../Home';

const SearchForm = () => {
    return (
        <>
        <header>
  
         <title>PRISONERS SEARCH RECORD</title>
  
       </header>

<table align="center" border="1" bgcolor="#937541" width="600" cellpadding="8" cellspacing="0" height="415">
          <tr>
            <td colspan="0" height="246"><img src={banner} alt='banner' width="1045" height="230" /></td>
          </tr>
          <tr>
            <td colspan="8" bgcolor="green" height="3" align="center">
			
			
		<font size="5">  
		 <a href="/">Logout</a> |
         <a href="./Admin">Admin Panel</a>
          </font>
            </td>
</tr>
<tr>
<td align="center" bgcolor="#FFFFFF"><h1> Seacrh Prisoners By ID</h1></td>
        <form action="search.php" method="get">
           <label>ID:
         <input type="text" name="keyname" />
       </label>
          <input type="submit" value="Search" />
      </form>
     <td height="191" bgcolor="#FFFFFF"></td>
</tr>
    <tr>
     <td align="center" bgcolor="#FFFFFF"><h1> Seacrh Officer By ID</h1></td>
        <form action="search1.php" method="get">
           <label> Officer ID:
         <input type="text" name="keyname" />
       </label>
          <input type="submit" value="Search" />
      </form>
     <td height="191" bgcolor="#FFFFFF"></td>
</tr>
     
      <td align="center" bgcolor="#FFFFFF"><h1> Seacrh Visitor By ID</h1></td>
        <form action="search3.php" method="get">
           <label> Visitors ID:
         <input type="text" name="keyname" />
       </label>
          <input type="submit" value="Search" />
      </form>
     <td height="191" bgcolor="#FFFFFF"></td>

    <tr>
     
      <td align="center" bgcolor="#FFFFFF"><h1> Seacrh Transfer By ID</h1></td>
        <form action="search2.php" method="get">
           <label> National  Id :
         <input type="text" name="keyname" />
       </label>
          <input type="submit" value="Search" />
      </form>
     <td height="191" bgcolor="#FFFFFF"></td></tr>

<td width="7%" bgcolor="#FFFFFF"></td>
<td width="2%" bgcolor="#FFFFFF"></td>

</table>
  
        </>
    );
}

export default SearchForm;
