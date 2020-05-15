import React, {useState} from "react";
import'./LogIn.css';
import axios from 'axios';

function LogIn() {
    const [state, setState] = useState({
        username: "Enter username here",
        email: "Enter email address here",
        password: "",
        successMessage: null
    });
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const HandleSubmitClick = (e) =>{
        e.preventDefault();
        const endpoint = 'http://localhost:3600/api/login';
        axios
            .post(endpoint, state)
            .then(res => {
                console.log('RESPONSE', res.data);
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/users');
            })
            .catch(error => {
                console.error('ERROR', error);
            });
    };

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