import React, {useState} from "react";
import "./SignUp.css";
import axios from "axios";

function SignUp() {

    const [state, setState] = useState({
        firstName: "abc",
        lastName: "def",
        username: "xyz",
        email: "x@y.z",
        password: "123456",
        repeatPassword: "123456",
    });

    const validForm = () => {
        return (
            state.username !== "" &&
            state.email.length > 0 &&
            state.password.length > 0 &&
            state.password === state.repeatPassword
        );
    };

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const HandleSubmitClick = (e) =>{
        e.preventDefault();
        const endpoint = 'http://localhost:3600/api/register';
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

    return (
        <form onSubmit={HandleSubmitClick}>
            <div>
                <h1>Sign Up</h1>
                <label>First Name </label><br />
                <input type="text" id="firstName" name="firstName" value={state.firstName} onChange={handleChange} required />
                <br />
                <label>Last Name </label><br />
                <input type="text" id="lastName" name="lastName" value={state.lastName} onChange={handleChange} />
                <br />
                <label>Username </label><br />
                <input type="text" id="username" name="username" value={state.username} onChange={handleChange} required />
                <br />
                <label>Email Address </label><br />
                <input type="text" id="email" name="email" value={state.email} required onChange={handleChange} />
                <br />
                <label>Password </label><br />
                <input type="password" id="password" value={state.password} name="password" required onChange={handleChange} />
                <br />
                <label>Repeat Password </label><br />
                <input type="password" id="repeatPassword" value={state.repeatPassword} name="repeatPassword" required onChange={handleChange}/>
                <br />
                <br />

                <button type="submit" className="submit" disabled={!validForm()} onClick={HandleSubmitClick} >Create Account</button>
            </div>
        </form>
    )
}

export default SignUp;