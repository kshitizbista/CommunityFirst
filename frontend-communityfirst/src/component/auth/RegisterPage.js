import React, {useState} from "react";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import {Link} from "react-router-dom";

function RegisterPage() {

    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const signUp = async (registrationData) => {
        const response = await Auth.signUp(registrationData);
        if (response) {
            setMessage(response.message);
            setSuccessful(response.successful);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <RegisterForm onSubmit={signUp}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {message && (
                        <div className="form-group">
                            <div
                                className={
                                    successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert">
                                {message} {successful && <Link to="/login">Sign In</Link>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
