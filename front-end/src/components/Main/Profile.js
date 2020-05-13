import React, {useState} from 'react';
import './Profile.css';

export default function Profile() {
    const [state, setState] = useState({
        profilePicture: null,
        firstName: "",
        lastName: "",
        email: "",
    });


    return (
        <form>
            <div>
                <h1>Profile</h1>
                <div className="pfp">
                    <h3>Profile Picture</h3>
                    <img src="https://townsquare.media/site/252/files/2019/09/oli-london-jimin.jpg?w=980&q=75" alt="bruh"/>
                </div>

                <div className="description">
                    <h3>First Name: </h3>
                    <h3 id="firstName">Oli</h3>
                    <br />
                    <h3>Last Name: </h3>
                    <h3 id="lastName">London</h3>
                    <br />
                    <h3>Email Address: </h3>
                    <h3 id="email">oli.london@oliayoh.com</h3>
                    <br />
                </div>
            </div>
        </form>
    )
}