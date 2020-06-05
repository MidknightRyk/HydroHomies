import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {Map} from './Map';
import Card from "react-bootstrap/Card";

export const Dashboard = () => (
       
       <div>
           <Navbar bg="light" expand="lg">
               <Navbar.Brand href="/dashboard">Hydrohomies</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                       <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                       <Nav.Link href="/profilePage">Profile</Nav.Link>
                       <NavDropdown title="Saved" id="basic-nav-dropdown">
                           <NavDropdown.Item href="#action/3.1">Fountains</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.2">Routes</NavDropdown.Item>
                       </NavDropdown>
                   </Nav>
               </Navbar.Collapse>
               <Form inline>
                   <Button variant="outline-primary" ><Nav.Link href="/">Logout</Nav.Link></Button>
               </Form>
           </Navbar>
           <Card className="text-center">
               <Map className="w-auto p-3"/>
           </Card>

        </div>
    )
