import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Main/Home";
import {Login} from "./Auth/Login"
import {SignUp} from "./Auth/SignUp";
import {ProfilePage} from "./Main/ProfilePage";
import {Dashboard} from "./Main/Dashboard";
import {Fountains} from "./Main/Fountains";
import {Routes} from "./Main/Routes";


function App() {
  return (
    <React.Fragment>
        <Router>
         <Switch>
            <Route exact path="/" component = {Home}/>
            <Route path = "/signUp" component = {SignUp}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/dashboard" component ={Dashboard}/>
            <Route path = "/profilePage" component ={ProfilePage}/>
            <Route path = "/fountains" component ={Fountains}/>
            <Route path = "/routes" component = {Routes}/>
          </Switch>
        </Router> 
    </React.Fragment>
  );
}
export default App;