import React from 'react';
import './login.css';
import banner from './banner.gif';

const Prisoner = () => {
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
	<form id="frmReg" method="POST" action="prisonerval.php">
       <h2 id="hdr_title">Register Prisoner </h2>
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
                <div >
                <table><tr>
                    <td>
                        <label for="datein" class="label">Date In</label>
                    </td>
                    <td >
                        <select id="lMonth" name="2Month" class="reg_fields" >
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
                        <input type="text" id="TxtDay" name="TxtDay"  value="DD" class="reg_fields"/>
                        <input type="text" id="TxtYear" name="TxtYear"  value="YYYY" class="reg_fields"/>
                    </td>
                    </tr></table>
                </div>
            </div>

             <div class="control_input">               
                <div >
                <table><tr>
                    <td>
                        <label for="opendate" class="label">Date Out</label>
                    </td>
                    <td >
                        <select id="lMonth" name="3Month" class="reg_fields" >
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
                        <input type="text" id="TXtDay" name="TXtDay"  value="DD" class="reg_fields"/>
                        <input type="text" id="TXtYear" name="TXtYear"  value="YYYY" class="reg_fields"/>
                    </td>
                    </tr></table>
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
                <table><tr>
                    <td>
                        <label for="opendate" class="label">Education Level</label>
                    </td>
                    <td >
                        <select id="education" name="education" class="reg_fields" >
                            <option selected="selected" value="01">KECP</option>
                            <option value="02">Never</option>
                            <option value="03">O level</option>
                            <option value="04">Certificate</option>
                            <option value="05">Diploma</option>
                            <option value="06">Bachelor Degree</option>
                            <option value="07">PGD</option>
                            <option value="08">Above</option>
                            </select>
                        </td></tr>
                        
                    
                </table>
                </div>

                <div >
                <table><tr>
                    <td>
                        <label for="status" class="label">Maritial Status</label>
                    </td>
                    <td >
                        <select id="status" name="status" class="reg_fields" >
                            <option selected="selected" value="01">Fiancee</option>
                            <option value="02">Divorced</option>
                            <option value="03">Married</option>
                            <option value="04">Single</option>
                            <option value="05">In Relationship</option>
                        </select>
                        </td></tr>
                    
                    </table>
                </div>
             
                 
              



                <div class="control_input">
                <label for="Pname" class="label">Offence</label>
                <textarea cols="17" rows="4" name="offence" required placeholder="fill this box"></textarea>
                </div>

                 <div >
                <table><tr>
                    <td>
                        <label for="opendate" class="label">Sentence</label>
                    </td>
                    <td>
                        <select id="sentence" name="sentence" class="reg_fields" >
                            <option selected="selected" value="01">3 months</option>
                            <option value="02">6 months</option>
                            <option value="03">1 year</option>
                            <option value="04">2 years</option>
                            <option value="05">3 year</option>
                            <option value="06">5 year</option>
                            <option value="07">7 year</option>
                            <option value="08">10 year</option>
                        </select>
                        </td></tr>
                    
                    
                    </table>
                </div>


            <div class="control_input">
                <label for="Filenum" class="label">File Number</label><input type="text" id="Filenum" name="Filenum"  size='8'  maxlength='8' class="reg_fields" required placeholder="xxx"/>
            </div>
             
             <div class="control_input">
                <div >
                <table>
                     <td>
                        <label for="Campus" class="label">Prison</label>
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

export default Prisoner;
