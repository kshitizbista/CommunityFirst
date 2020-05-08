import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {handleSubmit, register, errors} = useForm();

    return (
        <div className="card">
            <div class="card-header">
                Welcome Back!
            </div>
            <div className="card-body" >
                <h4 className="card-title">Login</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input name="email"
                                   type="email"
                                   className="form-control"
                                   placeholder="Please enter your email"
                                   value={email}s
                                   onChange={e => setEmail(e.target.value)}
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
                                   placeholder="Please enter your password"
                                   className="form-control"
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                                   ref={register({required: true, minLength: 5, maxLength: 50})}/>
                            {errors.password &&
                            <span className="form-error">Password is required and size must be between 5 and 50 </span>}
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onSubmit={() => onSubmit({email, password})}>
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
