import React from 'react';
import './login.css';
import '../admin/SearchForm';
import '../admin/Location';
import '../admin/OfficerTransfer';
import '../admin/Registration';
import '../admin/Court';
import './ViewOficcer';




const Admin = () => {
    return (
        <>
         <header>
  <title>KENYA PRISONS SERVICE</title>
</header>

	<table align='center' border='0' bgcolor='green' width='500' cellpadding='10' cellspacing='0' height='525'>
          
		  <tr>
            <td colspan='3' height='2'><img src='banner.gif' alt='' /></td>
          </tr>
		  <tr>
            <td colspan="7" bgcolor="#yellow" height="1" align="center">
		      <h1><font size="5">
	           <a href="/">Home</a> 
              			   
		        <a href="../admin/SearchForm">Search </a> 
                <a href="../admin/Location">Location</a>
				
		        <a href="../admin/OfficerTransfer">Officer</a>|
		        <a href="../admin/Registration">Register</a>
				<a href="../admin/Court">Court</a>
		        </font></h1>
            </td>
			 
		 
            <td height='1' colspan='3' align='right' bgcolor="green">&nbsp;</td>
			
          </tr>
		 
          <tr>
		 
            <td width='4%' bgcolor='#FFFFFF' valign='top'>
<h3 align='center'  title='You should be online'>&nbsp;</h3></td>

            <td width='81%' valign='top' bgcolor="#FFFFFF">

<p align='center'>
 

<h3 align='center'>&nbsp;</h3>
<br/>
<h3 align='center'>THIS FOR ADMINSITRATOR </h3>
<p align='justify'><font face='Arial, Helvetica, sans-serif'>The system enable an Administrator 
	to provide services to users nd here the administrator can add and upload information,
	 update, delete, view the record added. The administrator
	  can also change his account for more security.</font>
      
</p>
</p>
		<br/>
			</td>
            <td width='25%' bgcolor='green'  valign='top'>
			
	
<table border='1' align='center'>
<tr>
<td width="252" bgcolor="green">
<h4>  Admin Management : </h4>


<ul>
	
	<li><a href='./ViewOficcer'><b><button>Prison Officer Transfer</button></b></a></li>
		<br/>

	<li><a href='viewprisoners.php'><b><button>Prisoners Details</button></b></a></li>
		<br/>
	<li><a href='viewcase.php'><b><button>Case Details</button></b></a></li>
		<br/>
	<li><a href='viewtransfer.php'><b><button>Transfer Information</button></b></a></li>
		<br/>
	<li><a href='viewvis.php'><b><button>Visitors Information</button></b></a></li>
		<br/>
	<li><a href='viewoff.php'><b><button>Officer details</button></b></a></li>
		<br/>
	<li><a href='viewnewprison.php'><b><button>New Prison</button></b></a></li>
		<br/>
	<li><a href='viewcourt.php'><b><button>Court Information</button></b></a></li>
		<br/>
	<li><a href='viewAnnounce.php'><b><button>View Comment</button></b></a></li>
		<br/>
	<li><a href='report.php'><b><button>Report</button></b></a></li>
		<br/>
    <li><a href='../index.php'><b><button>LOG OUT</button></b></a></li>
</ul>
</td>
</tr>
</table>


			
			</td>
          </tr>
          
      </table>     
 
        </>
    )
}

export default Admin;
