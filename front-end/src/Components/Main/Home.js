import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

export const Home = () => (
  <div className="home">
    <h1> Welcome to Hydrohomies </h1>

    <div className="section">
    {/* Create links to take user to the signup page*/}
        <br/><br/>
    <div className="signup">
    <h5> New to Hydrohomies</h5>
    <a href="./SignUp">

      <Button size="lg">Sign Up</Button>
    </a>
    </div>


    <br/><br/>
    <h3> OR </h3>

    {/* Create links to take user to the login page*/}
    <div className="login">
        <br/><br/>
    <h5>Already a user</h5>
    <a href="./Login">
      <Button size="lg">Login</Button>
    </a>
    </div>
    </div>
  </div>
);
