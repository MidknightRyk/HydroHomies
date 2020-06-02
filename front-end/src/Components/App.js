import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Main/Home";
import { Login } from "./Auth/Login";
import { SignUp } from "./Auth/SignUp";
import { ProfilePage } from "./Main/ProfilePage";
import { Dashboard } from "./Main/Dashboard";
import { Fountain } from "./Main/Fountain"

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          //Please add a redirect to dashboard if already logged in (check
          cookies)
          <Route exact path="/" component={Home} />{" "}
          <Route path="/signUp" component={SignUp} />{" "}
          <Route path="/login" component={Login} />{" "}
          <Route path="/dashboard" component={Dashboard} />{" "}
          <Route path="/fountain" component={Fountain} />{" "}
          <Route path="/profilePage" component={ProfilePage} />
        </Switch>{" "}
      </Router>{" "}
    </React.Fragment>
  );
}
export default App;
