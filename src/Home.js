import React from 'react';
import './login.css';
import banner from './banner.gif';
import './About';
import './Announce';
import './Login';

const Home =() => {
   
    return (
  <div>
        <div align="center" border="0" color="green" width="540" >
        <img src={banner} width="860"  alt=''/>
        </div>
         

        <nav  align="center" >
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='./About'>About</a></li>
            <li><a href='./Announce'>Comments</a></li>
            <li><a href='./Login'>Login</a></li>
            
          </ul>
          </nav>
          


        <div align="center">
        <h2 >Prison Management System Online </h2>
        </div>
</div>

        
            );
   }


export default Home;
