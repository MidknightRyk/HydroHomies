import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Login} from "./Login"
import {SignUp} from "./SignUp";
import {ProfilePage} from "./ProfilePage";
import {Dashboard} from "./Dashboard";


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

          </Switch>
        </Router> 
    </React.Fragment>
  );
}
export default App;