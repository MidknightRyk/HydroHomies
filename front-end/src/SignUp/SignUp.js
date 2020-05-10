import React, {useState} from "react";
import "./SignUp.css";

function SignUp() {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",

        successMessage: null,
    });

    const validForm = () => {
        return (
            state.firstName !== "" &&
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
    };

    return (
        <form>
            <div>
                <h1>Sign Up</h1>
                <label>First Name </label>
                <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
                <br />
                <label>Last Name </label>
                <input type="text" id="lastName" name="lastName" onChange={handleChange} />
                <br />
                <label>Email Address </label><br />
                <input type="text" id="email" name="email" required onChange={handleChange} />
                <br />
                <label>Password </label><br />
                <input type="password" id="password" name="password" required onChange={handleChange} />
                <br />
                <label>Repeat Password </label><br />
                <input type="password" id="repeatPassword" name="repeatPassword" required onChange={handleChange}/>
                <br />
                <br />

                <button type="submit" className="submit" disabled={!validForm()} onClick={HandleSubmitClick} >Create Account</button>
            </div>
        </form>
)
}

export default SignUp;

