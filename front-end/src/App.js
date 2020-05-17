import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Main/Dashboard";
import Button from "@material-ui/core/Button";
import Profile from "./components/Main/Profile";

class App extends React.Component {

    render() {
        return (
            <>
            <header>
                <h1>   HydroHomies </h1>
                        <nav>
                            <Button color="inherit"><NavLink to="/login">Login</NavLink></Button>
                            <Button color="inherit"><NavLink to="/signUp">Sign Up</NavLink></Button>
                            <Button color="inherit"><NavLink to="/dashboard">Dashboard</NavLink><br/><br/></Button>
                        </nav>

                </header>
                <main>

                    <Route path="/login" component={LogIn} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                </main>
                <footer>
                    <button onClick={this.logout} style={ { textAlign: "center", float: "left" }}>Logout</button>
                </footer>
            </>

        );
    }

    logout = () => {
        localStorage.removeItem('jwt');
        this.props.history.push('/login');
    };
}

export default withRouter(App);