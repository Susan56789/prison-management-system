import React from 'react';
import './login.css';
import banner from './banner.gif';


const UserVisitors = () => {
    return (
        
        <>
        <table align="center" border="0" bgcolor="white" width="400" cellpadding="9" cellspacing="0" height="525">
         <tr>
           <td colspan="2" height="2"><img src={banner} width="860" alt='' /></td>
         </tr>
         <tr>
           <td colspan="3" bgcolor="#FF0000" height="1" align="center">
               <font size="4">   
          <a href="./User">HOME</a>  |
         </font>
           </td>
         </tr>
         <tr>
           <td width="25%" bgcolor="#FFFFFF" >&nbsp;&nbsp;
           <td width="50%" align="center" bgcolor="white">
      
<div id="content" class="ctrdiv">
   <form id="frmReg" method="POST" action="visitorvalidate">
      <h2 id="hdr_title">Register visitor </h2>
           <div class="control_input">
           <label for="Nid" class="label">National Id</label><input type="text" id="Nid" name="Nid" size='8'  maxlength='8' class="reg_fields" required placeholder="00001111"  />
           </div>
           <div class="control_input">
               <label for="Fname" class="label">Full Name</label><input type="text" id="Fname" name="Fname" class="reg_fields" required placeholder="Otienno jin"/>
           </div>

           <div class="control_input">               
               <div >
               <table><tr>
                   <td>
                       <label for="date" class="label">Birth Date</label>
                   </td>
                   <td >
                       <select id="lMonth" name="1Month" class="reg_fields" >
                           <option selected="selected" value="01">January</option>
                           <option value="02">February</option>
                           <option value="03">March</option>
                           <option value="04">April</option>
                           <option value="05">May</option>
                           <option value="06">June</option>
                           <option value="07">July</option>
                           <option value="08">August</option>
                           <option value="09">September</option>
                           <option value="10">October</option>
                           <option value="11">November</option>
                           <option value="12">December</option>
                       </select>
                   </td>
                   <td>
                       <input type="text" id="txtDay" name="txtDay"  value="DD" class="reg_fields"/>
                       <input type="text" id="txtYear" name="txtYear"  value="YYYY" class="reg_fields"/>
                   </td>
                   </tr></table>
               </div>
           </div>

           <div class="control_input">  
           <br/>             
               <table>
               <td>
                        <label for="uemail" class="label">Date</label>
                    </td>
                    <td >
                        <select id="lMonth" name="lMonth" class="reg_fields">
                            <option selected="selected" value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </td>
               <td>
                        <label for="timein" class="label">Time In</label>
                    </td>
                    <td >
                        <select id="timein" name="timein" class="reg_fields" >
                           <option>12:00am</option>
                           <option>12:30am</option>
                           <option>1:00pm</option>
                           <option>1:30pm</option>
                          <option>2:00pm</option>
                           <option>2:30pm</option>
                           <option>3:00pm</option>
                           <option>3:30pm</option>
                           <option>4:00pm</option>
                           <option>4:30pm</option>
                           <option>5:00pm</option>
                           
                        </select>
                    </td>
                </table>
                </div>

              <div class="control_input">
                <div >
                <table>
                     <td>
                        <label for="timeout" class="label">Time Out</label>
                    </td>
                    <td >
                        <select id="timeout" name="timeout" class="reg_fields" >
                           <option>12:00am</option>
                           <option>12:30am</option>
                           <option>1:00pm</option>
                           <option>1:30pm</option>
                           
                            <option>2:00pm</option>
                           <option>2:30pm</option>
                           <option>3:00pm</option>
                           <option>3:30pm</option>
                           <option>4:00pm</option>
                           <option>4:30pm</option>
                           <option>5:00pm</option>
                           
                        </select>
                    </td>
                </table>
               </div>
           </div>

           <div class="control_input">
               <label for="address" class="label">Address</label><input type="text" id="address" name="address" class="reg_fields" required placeholder="Rongai"/>
           </div>
           
            <div >
               <table><tr>
                   <td>
                       <label for="county" class="label">County</label>
                   </td>
                   <td >
                       <select id="county" name="county" class="reg_fields">
                           <option selected="selected" value="01">Lamu</option>
                           <option value="02">Nairobi</option>
                            <option value="03">Nakuru</option>
                           <option value="04">Mombassa</option>
                          <option value="04">Machakos</option>
                          <option value="06">Malindi</option>
                          <option value="07">Mandera</option>
                          <option value="08">Meru</option>
                        </select>
                      
                   </td>
                   </tr>
           </table>
               </div>

           <div >
               <table><tr>
                   <td>
                       <label for="opendate" class="label">Gender</label>
                   </td>
                   <td >
                       <select id="Gender" name="Gender" class="reg_fields" >
                           <option selected="selected" value="01">Male</option>
                           <option value="02">Female</option>
                       </select>
                   </td>
                   </tr></table>
               </div>

               <div >
               
               </div>

               
                <div >
               <table>
               <td>
                        <label for="campus" class="label">relationship</label>
                    </td>
                    <td>
                        <select id="relationship" name="relationship" class="reg_fields">
                            <option>Parent</option>
                           <option>Friend</option>
                           <option>Wife</option>
                           <option>Husband</option>
                           <option>Daughter/Son</option>
                           <option>Relative</option>
                          <option>other</option>
                        </select>
                    </td>
                   
                   </table>
               </div>


        
            <div class="control_input">
               <div >
               <table>
                    <td>
                       <label for="Campus" class="label">Prisoner Name</label>
                   </td>
                   <td>
                   <select id="prison" name="prison" class="reg_fields" >
                    <option value="">--Select prison--</option>
                       {/**Select from Database */}
                    </select></td>
                </table>
                
   
           <div class="control_input">
               <input type="submit" name="signup" id="Add" value="Add " title="" border="0" />
           </div>
           
           <div id="validation_msg">
           </div>
           
   </div>
   </div>
   
   
   </form>
   </div>
   </td>
   </td>
   </tr>
   </table>
   
  
       </>
    );
}

export default UserVisitors;
