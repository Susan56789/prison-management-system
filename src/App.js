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
import Employees from './employeeDetails';
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
import OfficerDetails from './Components/admin/OfficerDetails';
import NewPrison from './Components/admin/NewPrison';
import ViewCourt from './Components/admin/ViewCourt';
import Reports from './Components/admin/Reports';
import User from './Components/user/User';
import Prisoner from './Components/user/prisoner';
import Registration from './Components/user/Registration';
import UserVisitors from './Components/user/UserVisitors';
import AddOfficer from './Components/user/AddOfficer';
import Officer from './Components/officer/Officer';
import Courts from './Components/officer/Courts';




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
      <Employees/>
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
<Route path='/OfficerDetails'>
  <OfficerDetails />
</Route>
<Route path='/NewPrison'>
  <NewPrison />
</Route>
<Route path='/ViewCourt'>
  <ViewCourt/>
</Route>
<Route path='/Reports'>
  <Reports />
</Route>
<Route path='/User'>
  <User />
</Route>
<Route path='/prisoner'>
  <Prisoner/>
</Route>
<Route path='/registration'>
  <Registration/>
</Route>
<Route path='/UserVisitors'>
  <UserVisitors/>
</Route>
<Route path='/AddOfficer'>
  <AddOfficer />
</Route>
<Route path='/Officer'>
  <Officer/>
</Route>
<Route path='/Courts'>
  <Courts />
</Route>
  </Switch>
</Router>
 

      <Footer />
    </div>
  );
}

export default App;
