import React, {Component} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";

class LoginPage extends Component {
    async signin(loginData) {
        const loginSuccess = await Auth.signin(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials. Try again");
        }
    }

    async signup(registrationData) {
        const registerSuccess = await Auth.signup(registrationData);
        if (!registerSuccess) {
            alert("Oops! Please check credentials and try again");
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 ">
                                <LoginForm onSubmit={this.signin}/>
                            </div>
                            <div className="col-12 mt-4">
                                <RegisterForm onSubmit={this.signup}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
