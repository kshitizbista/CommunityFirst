import React from "react";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import {Link} from "react-router-dom";

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            successful: false
        }
        this.signUp = this.signUp.bind(this);
    }

    async signUp(registrationData) {
        const response = await Auth.signUp(registrationData);
        if (response) {
            this.setState(response);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <RegisterForm onSubmit={this.signUp}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert">
                                    {this.state.message} {this.state.successful && <Link to="/login">Sign In</Link>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;
