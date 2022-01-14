import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Announce from "./Announce";
import PerfomanceMeasures from "./PerfomanceMeasures";
import Recruitment from "./Recruitment";
import Employees from "./employeeDetails";
import LeaveForm from "./LeaveForm";
import Training from "./Training";
import Salary from "./Salary";
import ViewOficcer from "./Components/admin/ViewOficcer";
import Admin from "./Components/admin/Admin";
import ViewPrisoners from "./Components/admin/ViewPrisoners";
import ViewCase from "./Components/admin/ViewCase";
import ViewTransfer from "./Components/admin/ViewTransfer";
import ViewVisitors from "./Components/admin/ViewVisitors";
import VisitorReport from "./Components/admin/VisitorReport";
import OfficerDetails from "./Components/admin/OfficerDetails";
import NewPrison from "./Components/admin/NewPrison";
import ViewCourt from "./Components/admin/ViewCourt";
import Reports from "./Components/admin/Reports";
import User from "./Components/user/User";
import Prisoner from "./Components/user/prisoner";
import Registration from "./Components/user/Registration";
import UserVisitors from "./Components/user/UserVisitors";
import AddOfficer from "./Components/user/AddOfficer";
import Officer from "./Components/officer/Officer";
import Courts from "./Components/officer/Courts";
import Locations from "./Components/admin/Location";
import OfficerTransfer from "./Components/admin/OfficerTransfer";
import SearchForm from "./Components/admin/SearchForm";
import Registrations from "./Components/admin/Registration";
import Court from "./Components/admin/Court";
import LoginUser from "./Components/LoginUser";
import LoginOfficer from "./Components/LoginOfficer";
import LoginAdmin from "./Components/LoginAdmin";
import NewPrisons from "./Components/officer/NewPrison";
import SearchForms from "./Components/officer/SearchForm";
import TransferForms from "./Components/officer/TransferForm";
import ViewComments from "./Components/officer/ViewComments";
import ViewPrisonerss from "./Components/officer/ViewPrisonerss";
import ViewCourtss from "./Components/officer/ViewCourtss";
import ViewVisitorss from "./Components/officer/ViewVisitorss";
import ViewNewPrison from "./Components/officer/ViewNewPrison";
import ViewOfficerss from "./Components/officer/ViewOfficerss";
import ViewTransferss from "./Components/officer/ViewTransferss";

const App = () => {
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
            <Login />
          </Route>
          <Route path="/announce">
            <Announce />
          </Route>
          <Route path="/PerfomanceMeasures">
            <PerfomanceMeasures />
          </Route>
          <Route path="/Recruitment">
            <Recruitment />
          </Route>
          <Route path="/employeeDetails">
            <Employees />
          </Route>
          <Route path="/LeaveForm">
            <LeaveForm />
          </Route>
          <Route path="/Training">
            <Training />
          </Route>
          <Route path="/Salary">
            <Salary />
          </Route>
          <Route path="/ViewOfficer">
            <ViewOficcer />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/ViewPrisoners">
            <ViewPrisoners />
          </Route>
          <Route path="/ViewCase">
            <ViewCase />
          </Route>
          <Route path="/ViewTransfer">
            <ViewTransfer />
          </Route>
          <Route path="/ViewVisitors">
            <ViewVisitors />
          </Route>
          <Route path="/VisitorReport">
            <VisitorReport />
          </Route>
          <Route path="/OfficerDetails">
            <OfficerDetails />
          </Route>
          <Route path="/NewPrison">
            <NewPrison />
          </Route>
          <Route path="/ViewCourt">
            <ViewCourt />
          </Route>
          <Route path="/Reports">
            <Reports />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/prisoner">
            <Prisoner />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/UserVisitors">
            <UserVisitors />
          </Route>
          <Route path="/AddOfficer">
            <AddOfficer />
          </Route>
          <Route path="/Officer">
            <Officer />
          </Route>
          <Route path="/Courts">
            <Courts />
          </Route>
          <Route path="/Locations">
            <Locations />
          </Route>
          <Route path="/OfficerTransfer">
            <OfficerTransfer />
          </Route>
          <Route path="/SearchForm">
            <SearchForm />
          </Route>
          <Route path="/Registrations">
            <Registrations />
          </Route>
          <Route path="/Court">
            <Court />
          </Route>
          <Route path="/userLogin">
            <LoginUser />
          </Route>
          <Route path="/officerLogin">
            <LoginOfficer />
          </Route>
          <Route path="/adminLogin">
            <LoginAdmin />
          </Route>
          <Route path="/newPrisons">
            <NewPrisons />
          </Route>
          <Route path="/officerSearch">
            <SearchForms />
          </Route>
          <Route path="/transferForm">
            <TransferForms />
          </Route>
          <Route path="/viewComments">
            <ViewComments />
          </Route>
          <Route path="/viewPrisonerss">
            <ViewPrisonerss />
          </Route>
          <Route path="/viewCourts">
            <ViewCourtss />
          </Route>
          <Route path="/viewVisitorss">
            <ViewVisitorss />
          </Route>
          <Route path="/viewNewPrisons">
            <ViewNewPrison />
          </Route>
          <Route path="/viewOfficerss">
            <ViewOfficerss />
          </Route>
          <Route path="/viewTransferss">
            <ViewTransferss />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
