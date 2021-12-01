import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Announce from './Announce';
import PerfomanceMeasures from './PerfomanceMeasures';
import Recruitment from './Recruitment';
import employeeDetails from './employeeDetails';
import LeaveForm from './LeaveForm';
import Training from './Training';
import Salary from './Salary';
import ViewOficcer from './Components/admin/ViewOficcer';
import Admin from './Components/admin/Admin';
import ViewPrisoners from './Components/admin/ViewPrisoners';
import ViewCase from './Components/admin/ViewCase';
import ViewTransfer from './Components/admin/ViewTransfer';
import ViewVisitors from './Components/admin/ViewVisitors';
import VisitorReport from './Components/admin/VisitorReport';

const App =() =>{

  return (
    <div className="App">
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
    <Route path="/PerfomanceMeasures">
      <PerfomanceMeasures/>
    </Route>
    <Route path='/Recruitment'>
      <Recruitment />
    </Route>
    <Route path='/employeeDetails'> 
      <employeeDetails/>
    </Route>
    <Route path='/LeaveForm'>
      <LeaveForm />
    </Route>
    <Route path='/Training'>
      <Training />
    </Route>
    <Route path='/Salary'>
      <Salary/>
    </Route>
    <Route path='/ViewOfficer'>
      <ViewOficcer />
    </Route>
<Route path="/Admin">
<Admin />
</Route>
<Route path='/ViewPrisoners'>
  <ViewPrisoners />
</Route>
<Route path='/ViewCase'>
  <ViewCase/>
</Route>
<Route path='/ViewTransfer'>
  <ViewTransfer/>
</Route>
<Route path='/ViewVisitors'>
  <ViewVisitors/>
</Route>
<Route path='/VisitorReport'>
  <VisitorReport/>
</Route>
  </Switch>
</Router>
 
      <Footer />
    </div>
  );
}

export default App;
