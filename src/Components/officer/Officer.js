import React from 'react';
import banner from './banner.gif';
import './login.css';


const Officer = () => {
    return (
        <>
         <table align='center' border='1' bgcolor='green' width='820' cellpadding='10' cellspacing='0' height='325'>
          <tr>
            <td colspan='3' height='2'><img src={banner} alt='' /></td>
          </tr>
       
          <tr>
          	 <tr width='100%'>
                   <td bgcolor="#FF0000" height="1" align="center" >
            
            <a href="./Courts">COURT</a>  |
            <a href="transfer.php">TRANSFER </a>|
            <a href="newprison.php">NEW PRISON </a> |
            <a href="search-form.php">SEARCH </a> 
            </td>
          </tr>

            <td height='1' colspan='3' align='right' bgcolor="#006600">&nbsp;</td>

          </tr>



          <tr>

            <td  bgcolor='#FFFFFF' height='100%' >
               

            <td   bgcolor="#FFFFFF" height='100%'>

<h3 align='center'> PRISON MNGNT  SYSTEM FOR THE OFFICER  </h3>
<p align='justify'><font face='Arial, Helvetica, sans-serif'>
	This user has the abilty to view information,edit and delete.
 this is for user The system enable an Administrator to provide
 services to users nd here the administrator can add and upload information, update, delete, view the record added. 
 The administrator can also change his account for more security.
</font>
</p>
			</td>
            <td  bgcolor='GREEN'  height='100%'>
			
	
<table border='0' align='center'>
<tr>
<td  >
<h3>  OFFICER PANNEL : </h3><br/>

	

			<div id="menu">
				<ul>
					
					<li><a href="viewannounce1.php">Comment</a></li>
					<li><a href="viewprisoners1.php">Prisoners Info</a></li> 
					<li><a href="viewcourt1.php">Court Information</a></li>
          <li><a href="viewvisitors.php">Visitors</a></li>
          <li><a href="viewnewprison.php">New Prison</a></li>
          <li><a href="viewofficer.php">Officer</a></li>
          <li><a href="viewtransfer1.php">Prisoners Transfer</a></li>
 					<li><a href="/">Log Out</a></li>

				</ul>
				</div>
</td>
</tr>
</table>
	</td>
    </td>
    </tr>
    </table>   
        </>
    );
}

export default Officer;
