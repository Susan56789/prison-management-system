import React,{Component} from 'react';
import './login.css';
import banner from './banner.gif';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Announce from './Announce';


class Home extends Component {
   render(){
    return (
      <div>
        <div>
        <img src={banner} width="860"  alt=''/>
        </div>
        <Router>
<Link to='/' >Home</Link>
<Link to={About}>About</Link>
<Link to={Login}>Login</Link>
<Link to={Announce}>Comments</Link>
       </Router>
      </div>

        
            );
   }
}

export default Home;
