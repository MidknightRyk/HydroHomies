import React from 'react';
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';
import store from 'store';

import './App.css';
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Main/Dashboard";
import Button from "react-bootstrap/Button";
import Profile from "./components/Main/Profile";


const App = () => {


        return (
            <>
            <main>
                <header>
                    <h1> HYDROHOMIES </h1>
                </header>
                <Button variant= "outline-primary" size="lg"> <NavLink to="/login">Login</NavLink></Button>
                <br></br>
                <br></br>
                <Button variant = "outline-primary" size="lg"> <NavLink to ="/signUp">Sign Up</NavLink></Button>
                <br></br>
                <br></br>
                <Button variant = "outline-primary" size = "lg"> <NavLink to="/dashboard">Dashboard</NavLink></Button>
                <Switch>
                    <Route path="/login" component={LogIn} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path="/profile" component={Profile} />
                </Switch>
                </main>
                <footer>
                    <button onClick={handleLogout()} style={ { textAlign: "center", float: "left" }}>Logout</button>
                </footer>
            </>

        );



};

const handleLogout = () => () => {
    store.remove('loggedIn');
    console.log('you have been logged out. boo!');
};

export default withRouter(App);