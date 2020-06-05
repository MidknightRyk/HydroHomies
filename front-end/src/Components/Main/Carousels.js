import React, {useState} from "react";
import Heart from "react-animated-heart";
import fountain1 from "./Links/fountain1.jpg";
import fountain2 from "./Links/fountain2.jpg";
import fountain3 from "./Links/fountain3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

export const Carousels = () =>{

    const [isClick, setClick] = useState(false);

    return(
        
        <div ClassName = "container-fluid">
            <h1 ClassName = "fountain-title"> Fountain name goes here</h1>
            <br></br>

    {/*create a table to hold the carousel images */}
        <table className = "table-border">
            <tr>
                <td rowSpan = "6">
                    <Carousel>
                        <Carousel.Item>
                            <img className = "d-block w-100" src={fountain1}/>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img className = "d-block w-100" src={fountain2}/>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className = "d-block w-100" src={fountain3}/>
                        </Carousel.Item>
                    </Carousel>
                </td>
            </tr>
        </table>

    {/*Show individual fountain details*/}
        <table className = "details">
            <tr>
                <th> Fountain details </th>
            </tr>
            <tr>
                <td className = "information"> Location goes here </td>
            </tr>
            <tr>
                <td className = "information"> Accesibility goes here </td>
            </tr>
            <tr>
                <td className = "information"> Refill options go here </td>
            </tr>
            <tr>
                <td className = "information"> Visited before goes here </td>
            </tr>
            <tr>
                <td className = "information"> Rating goes here </td>
            </tr>
            
    {/*create heart react button for the fountains*/}
            <tr>
                <td className = "like">
                    <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>
                </td>
            </tr>
        </table>

        <a className ="return" href = "./Dashboard"> Return to the Dashboard</a>

        </div>
    )
}