import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Main/Dashboard";
/*import Button from "@material-ui/core/Button"; */
import Button from 'react-bootstrap/Button';

class App extends React.Component {

    render() {
        return (
            <>
            <main>
            <header>
            <h1>   HYDROHOMIES </h1> 

                </header>
                
                    <Button variant= "outline-primary" size="lg"> <NavLink to="/login">Login</NavLink></Button>
                    <br></br>
                    <br></br>
                    <Button variant = "outline-primary" size="lg"> <NavLink to ="/signUp">Sign Up</NavLink></Button>
                    <br></br>
                    <br></br>
                    <Button variant = "outline-primary" size = "lg"> <NavLink to="/dashboard">Dashboard</NavLink></Button>
                    
                     
                    <Route path="/login" component={LogIn} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path='/dashboard' component={Dashboard}/>
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