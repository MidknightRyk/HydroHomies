import React, {useEffect, useState} from "react"

export const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (firstname.trim() && lastname.trim() && username.trim() && email.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [firstname, lastname, username, email, password]);

    return (
        <div>
            <div className="form-container">
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="name"> First Name</label>
                    <input type="text" className="form-control" name="firstname" placeholder="First Name"
                           onChange={(e)=>setFirstname(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname"> Last Name</label>
                    <input type="text" className="form-control" name="lastname" placeholder="Last Name"
                           onChange={(e)=>setLastname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="name"> User Name</label>
                    <input type="text" className="form-control" name="username" placeholder="User Name"
                           onChange={(e)=>setUsername(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Email"
                           onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter Password"
                           onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <br></br>
                <div className="text-center">
                    <a href="./Dashboard">
                        <button className="btn btn-primary btn-lg" disabled={isButtonDisabled}>Create account</button>
                    </a>
                    <br></br>
                    <a href='./Login'> <b> Already have an account? </b></a>
                </div>

            </div>

        </div>
    )
}