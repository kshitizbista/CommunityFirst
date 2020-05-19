import React from 'react';
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import '../home/Background.css';

function LoginForm({onSubmit}) {
    const {handleSubmit, register, errors} = useForm();
    const history = useHistory();

    return (
        <div className="background">
            <Menu />
            <aside>
                <div >
                    <div className="card card-layout">
                        <div className="card-body">
                            <h4 className="card-title">Member Login</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input name="email"
                                               type="email"
                                               className="form-control"
                                               placeholder="Enter your email"
                                               ref={register({
                                                   required: true,
                                                   pattern: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                                   }
                                               })}/>
                                        {errors.email &&
                                        <span className="form-error">Email is a required field and must be well-formatted </span>}
                                    </div>

                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input name="password"
                                               type="password"
                                               placeholder="Enter your password"
                                               className="form-control"
                                               ref={register({required: true})}/>
                                        {errors.password &&
                                        <span className="form-error">Password is a required field </span>}
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-warning" type="submit">
                                            Login
                                        </button>
                                        <button className="btn btn-warning ml-1"
                                                onClick={() => history.push("/")}>Home
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <picture className="side-image-blur"><img className="side-image-login"src={require('../../assets/images/loginbg.jpg')}></img></picture>
            </main>
            <Footer />
        </div>

    );
}

export default LoginForm;
