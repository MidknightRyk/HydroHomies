import React, { useState, useEffect } from "react"
import "./Login.css"

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password]);

    const handleLogin = () => {
        if (username === 'xyz' && password === 'password') {
            setError(false);
            setHelperText('Login Successfully');
        } else {
            setError(true);
            setHelperText('Incorrect username or password')
        }
    };

    return (
       <div>

           <div className="form-container">
                <h1 className="login">Log In </h1>
                <br></br>
                <div className="form-group">
                    <label htmlFor="username"> User Name or Email </label>
                    <input type="text" className="form-control" name="username" id="username" placeholder="Enter User name or Email"
                           error={error} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Password"> Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password"
                           error={error}
                           helperText={helperText}
                           onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <div className="text-center">
                    <a href="./Dashboard">
                    <button className="btn btn-primary btn-lg" onClick={()=>handleLogin()}
                            disabled={isButtonDisabled}>Log In</button>
                    </a>
                    <br></br>
                    <a href = "./SignUp"><b> Create a new account</b></a>
                 </div>
            </div>
           <br></br>


        </div>
    )
}