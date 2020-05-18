import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import '../home/Home.css';

function RegisterForm({onSubmit}) {
    const {handleSubmit, register, errors} = useForm();
    const history = useHistory();

    return (
        <div className="homepage">
            <Menu />
            <main>
                <picture className="side-image-blur"><img className="side-image"src={require('../../assets/images/registerbg.jpg')}></img></picture>
            </main>
            <aside>
                <div>
                    <div className="card card-layout">
                        <div className="card-header">
                            Glad to hear that you want to be a part of our community.
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Become a Member</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="firstname"
                                                   type="text"
                                                   className="form-control form-control-lg"
                                                   placeholder="Firstname"
                                                   ref={register({required: true, minLength: 3, maxLength: 20})}/>
                                            {errors.firstname &&
                                            <span className="form-error">First name is required and size must be between 3 and 20 </span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="lastname"
                                                   type="text"
                                                   className="form-control form-control-lg"
                                                   placeholder="lastname"
                                                   ref={register({required: true, minLength: 3, maxLength: 20})}/>
                                            {errors.lastname &&
                                            <span className="form-error">Last name is required and size must be between 3 and 20 </span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input name="email"
                                           type="email"
                                           className="form-control form-control-lg"
                                           placeholder="Email"
                                           ref={register({
                                               required: true,
                                               pattern: {
                                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                               }
                                           })}/>
                                    {errors.email &&
                                    <span className="form-error">Email is required and Must be a well-formed email address </span>}
                                </div>
                                <div className="form-group">
                                    <input name="password"
                                           type="password"
                                           placeholder="Enter your password"
                                           className="form-control form-control-lg"
                                           ref={register({required: true, minLength: 5, maxLength: 50})}/>
                                    {errors.password &&
                                    <span
                                        className="form-error">Password is required and size must be between 5 and 50 </span>}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Join now
                                </button>
                                <button className="btn btn-primary ml-1" onClick={() => history.push("/")}>Home</button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
            <Footer />
        </div>
    );
}

export default RegisterForm;
