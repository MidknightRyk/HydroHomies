import React, {useState} from "react";
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';
import'./LogIn.css';
import store from 'store';
import Button from "react-bootstrap/Button";


function LogIn() {
    const [state, setState] = useState({
        username: "Enter username here",
        email: "Enter email address here",
        password: "",
    });
    
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const HandleSubmitClick = (e) =>{
        e.preventDefault();

        const { username, password } = state;

        setError(false);

        if (!(username === 'xxx' && password === 'yyy')) {
            return setError(true);
        }

        console.log("you're logged in. yay!");
        store.set('loggedIn', true);
    }

    return(

        <form onSubmit={HandleSubmitClick}>

            <div>
                <h1>Log In</h1>
                <label>Username:</label>
                <br/>
                <input
                    type="username"
                    id="username"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
                <br/>
                <h3>OR</h3>
                <label>Email Address:</label>
                <br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <label>Password:</label>
                <br/>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                /> <br /> <br />
                <button
                    type="submit"
                    onClick={HandleSubmitClick}
                >Submit</button>
            </div>
        </form>
    )
}

export default LogIn