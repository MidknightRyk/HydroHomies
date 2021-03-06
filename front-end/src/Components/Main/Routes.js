import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup'
import route1 from "./Links/route1.jpg";
import route2 from "./Links/route2.jpg";
import route3 from "./Links/route3.jpg";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export const Routes = () => (
    <div className="container">
        <Form inline>
        <Button variant="outline-primary" ><Nav.Link href="/dashboard">Dashboard</Nav.Link></Button>
        </Form>
    <div>
        <h1> Presaved routes</h1>
        <br></br>

    <CardDeck>
{/* create cards to show the fountain information*/}
        <Card>
            <Card.Img variant="top" src={route1}/>
            <Card.Body>
            <Card.Title>Route name here</Card.Title>
            <ListGroup>
                <ListGroup.Item>Distance goes here</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>

        <Card >
            <Card.Img variant="top" src={route2} />
            <Card.Body>
            <Card.Title>Route name here</Card.Title>
            <ListGroup>
                <ListGroup.Item>Distance goes here</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={route3} />
            <Card.Body>
            <Card.Title>Route name here</Card.Title>
            <ListGroup>
                <ListGroup.Item>Distance goes here</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>

    </CardDeck>


        <br></br>


    </div>
    </div>
)