import React from 'react';
import './Admin';
import './login.css';
import '../../Home';

const ViewOficcer = () => {
    return (
        <>
          <header>
  <title>PRISON OFFICER RECORD </title>
</header>
<body>
	<table align='center' border='0' bgcolor='green' width='1200' cellpadding='8' cellspacing='0' height='200'>
          <tr>
            <td bgcolor='#999999' valign='center'>

{/*Database here */}

<table align='center' width='100%' border='0' cellpadding='3' cellspacing='2' bgcolor='gr'>
<caption><h3>PRISONER TRANSFER  INFORMATION</h3></caption>
<tr bgcolor='green'>
<th width='3%'> id</th>
<th width='10%'>Phone Number</th>
<th width='15%'>From Prison</th>
<th width='10%'>To Prison</th>
<th width='10%'>Date of Transfer</th>
</tr>

  {/*if present */}
{
 
{/**Fetch from database */}


}
</table>;



<br/>
			</td>
          </tr>
          <tr>
			<td align="center"><a href="./Admin" target="_parent">Panel Admin <b>|</b></a>
			<a href="../../Home" target="_parent">Log out</a></td>
		
          </tr>
          
	</table>
</body>
 
        </>
    )
}

export default ViewOficcer;
