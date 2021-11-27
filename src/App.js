import React, {useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Announce from './Announce';

const App =() =>{

const [returnedData, setReturnedData]=useState('Hello');

const fetchData = async () =>{
const newData = await fetch('/hello', {
  method: 'GET',
  headers:{
    'Content-Type':'application/json',
    'Accept': 'application/json'
  }
})
.then(res => res.json())
console.log(newData);
setReturnedData(newData.result);
}


  return (
    <div className="App">
      <button onClick={() => fetchData()}>Click</button>
      {returnedData}
      <Navbar />
      <Router>
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/announce">
      <Announce />
    </Route>
  </Switch>
</Router>
 
      <Footer />
    </div>
  );
}

export default App;
