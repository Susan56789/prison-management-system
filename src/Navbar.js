import React from 'react';
import './styles.css';

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
                <li><a href="Performance Measure.php">Performance Measure </a></li>
                <li><a href="Recruitment.php">Recruitment </a></li>
                <li><a href="employee details.php">employee details </a></li>
                <li><a href="leaveform.php">leaveform </a></li>
                <li><a href="Announcements.php">Announcements</a></li>
                <li><a href="Training.php">Training </a></li>
                <li><a href="Salary.php">Salary</a></li>
            </ul>
        
        </nav>
 </div>
    </header>   
        </div>
    )
}

export default Navbar;
