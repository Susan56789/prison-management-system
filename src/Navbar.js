import React from 'react';
import './styles.css';
import './PerfomanceMeasures';
import './Recruitment';
import './employeeDetails';
import './LeaveForm';
import './Announce';


const Navbar = () => {
    return (
        <div>
         <header >
      <div >
        
          <h3>
            Prison Management System
          </h3>
        
        <nav className='NavBar'>
            <ul>
                <li><a href="./PerfomanceMeasures">Performance Measure </a></li>
                <li><a href="./Recruitment">Recruitment </a></li>
                <li><a href="./employeeDetails.js">employee details </a></li>
                <li><a href="./LeaveForm">leaveform </a></li>
                <li><a href="./Announce">Announcements</a></li>
                <li><a href="./Training">Training </a></li>
                <li><a href="Salary.php">Salary</a></li>
            </ul>
        
        </nav>
 </div>
    </header>   
        </div>
    )
}

export default Navbar;
