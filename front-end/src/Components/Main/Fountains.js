import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup'
import fountain1 from "./Links/fountain1.jpg";
import fountain2 from "./Links/fountain2.jpg";
import fountain3 from "./Links/fountain3.jpg";
import "./Fountains.css";

export const Fountains = () => (

    <div className = "fountain-images">
        <h1 className= "fountain-title"> Fountains you love</h1>
        <br></br>
        <br></br>

    <CardDeck>
{/* create cards to show the fountain information*/}
        <Card border = "primary">
            <Card.Img variant="top" src={fountain1}/>
            <Card.Body>
            <Card.Title>Location goes here</Card.Title>
            <ListGroup>
                <ListGroup.Item>Refill options here</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Card.Footer>
            <a href = "./Carousels"><small className="text-muted">Click for more information</small> </a>
            </Card.Footer>
        </Card>

        <Card border = "primary">
            <Card.Img variant="top" src={fountain2} />
            <Card.Body>
            <Card.Title>Location goes here</Card.Title>
            <ListGroup>
                <ListGroup.Item>Refill options here</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Card.Footer>
            <a href = "./Carousels"> <small className="text-muted">Click for more information</small> </a>
            </Card.Footer>
        </Card>

        <Card border = "primary">
            <Card.Img variant="top" src={fountain3} />
            <Card.Body>
            <Card.Title>Location goes here</Card.Title>
            <ListGroup>
                <ListGroup.Item>Refill options here</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Card.Footer>
            <a href = "./Carousels"> <small className="text-muted">Click for more information</small> </a>   
            </Card.Footer>
        </Card>

    </CardDeck>

        <br></br>

        <div>
            <a className = 'return' href ="./Dashboard"> Return to Dashboard</a>
        </div>

    </div>

)