import React, {useState} from "react";
import'./LogIn.css';

function LogIn() {
    const [state, setState] = useState({
        username: "",
        email: "",
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

    const HandleSubmitClick = () =>{
        console.log("log in");
    };

    return(
        <form>
            <div>
                <h1>Log In</h1>
                <label>Username:</label>
                <br/>
                <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Enter username here"
                />
                <br/>
                <h3>OR</h3>
                <label>Email Address:</label>
                <br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email here"
                />
                <br/>
                <br/>
                <label>Password:</label>
                <br/>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                />
                <button
                    type="submit"
                    onClick={HandleSubmitClick}
                >Submit</button>
            </div>
        </form>
    )
}

export default LogIn