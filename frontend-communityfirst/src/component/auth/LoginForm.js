import React from 'react';
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

function LoginForm({onSubmit}) {
    const {handleSubmit, register, errors} = useForm();

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Login</h4>
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
                            {errors.email && <span className="form-error">Email is required and Must be a well-formed email address </span>}
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input name="password"
                                   type="password"
                                   placeholder="Enter your password"
                                   className="form-control"
                                   ref={register({required: true})}/>
                            {errors.password &&
                            <span className="form-error">Password is required </span>}
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>{'   '}
                            <Link to="/communityfirst">
                                <button className="btn btn-primary">
                                    Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
