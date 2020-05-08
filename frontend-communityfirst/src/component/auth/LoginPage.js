import React from "react";
import LoginForm from "./LoginForm";
import Auth from "../../services/Auth";
import {useHistory} from "react-router-dom"

function LoginPage() {

    const history = useHistory();

    const signIn = async (loginData) => {
        const loginSuccess = await Auth.signIn(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials. Try again");
        } else {
            history.push('/communityfirst/selection');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <LoginForm onSubmit={signIn}/>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;
