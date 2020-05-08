import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterForm({onSubmit}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {handleSubmit, register, errors} = useForm();

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Become a Member</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="firstname"
                                       type="text"
                                       className="form-control form-control-lg"
                                       value={firstname}
                                       onChange={e => setFirstname(e.target.value)}
                                       placeholder="Firstname"
                                       ref={register({required: true, minLength: 3, maxLength: 20})}/>
                                {errors.firstname && <span className="form-error">Firstname is required and size must be between 3 and 20 </span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="lastname"
                                       type="text"
                                       className="form-control form-control-lg"
                                       value={lastname}
                                       onChange={e => setLastname(e.target.value)}
                                       placeholder="lastname"
                                       ref={register({required: true, minLength: 3, maxLength: 20})}/>
                                {errors.lastname && <span className="form-error">Lastname is required and size must be between 3 and 20 </span>}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input name="email"
                               type="email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}
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
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                               ref={register({required: true, minLength: 5, maxLength: 50})}/>
                        {errors.password &&
                        <span className="form-error">Password is required and size must be between 5 and 50 </span>}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onSubmit={(e) => {
                            onSubmit({firstname, lastname, email, password});
                        }}>
                        Join now
                    </button>{'   '}
                    <Link to="/communityfirst">
                        <button className="btn btn-primary">
                            Home
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
