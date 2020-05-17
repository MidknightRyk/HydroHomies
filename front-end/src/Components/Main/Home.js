import React from "react";
import Button from 'react-bootstrap/Button';
import "./Home.css"

export const Home = () => (

       <div className="home">
           <h1> Welcome to Hydrohomies </h1>
           <br></br>
           <br></br>
           {/* Create links to take user to the signup page*/}
           <h5> New to Hydrohomies</h5>
           <a href = "./Login"><Button size ="lg">Login</Button> </a>
           <br></br>
           <br></br>
           <h3> OR </h3>
           <br></br>
           {/* Create links to take user to the login page*/}
           <h5>Already a user</h5>
           <a href = "./SignUp"> <Button  size = "lg">Sign Up</Button> </a>
        </div>
    )
