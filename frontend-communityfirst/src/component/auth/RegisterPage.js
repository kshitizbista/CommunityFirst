import React, {useState} from "react";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import {Toast} from "react-bootstrap";
import {Link} from "react-router-dom";

function RegisterPage() {

    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [show, setShow] = useState(false);

    const signUp = async (registrationData) => {
        const response = await Auth.signUp(registrationData);
        if (response) {
            setMessage(response.message);
            setSuccessful(response.successful);
            setShow(true);
        }
    }

    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <RegisterForm onSubmit={signUp}/>
                    </div>
                </div>
            </div>
            <Toast show={show} onClose={() => setShow(false)} autohide
                   className={"toast-notification " + (successful ? "toast-success" : "toast-danger")}
                   delay={5000}>
                <Toast.Body>{message} {successful && <Link to="/login">Sign In</Link>}</Toast.Body>
            </Toast>
        </>
    );
}

export default RegisterPage;
