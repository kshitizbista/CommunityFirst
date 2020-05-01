import React, {useState} from "react";
import { useForm } from "react-hook-form";


function RegisterForm({onSubmit}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleSubmit, register, watch, errors } = useForm();
    const onClick = data => {
        console.log(data);
    };
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Become a Member</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name ="firstname"
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.value)}
                                    placeholder="Firstname"
                                    ref={register({ required: true, minLength: 3, maxLength: 20  })} />
                                    {errors.firstname && <e>Firstname is required and size must be between 3 and 20 </e>}
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
                                    ref={register({ required: true, minLength: 3, maxLength: 20 })} />
                                    {errors.lastname && <e>Lastname is required and size must be between 3 and 20 </e>}
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
                            ref={register({ required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                }
                            })}/>
                            {errors.email && <e>Email is required and Must be a well-formed email address </e>}
                    </div>
                    <div className="form-group">
                        <input name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            ref={register({ required: true, minLength: 5, maxLength: 50 })} />
                            {errors.password && <e>Password is required and size must be between 5 and 50 </e>}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit({firstname, lastname, email, password});
                        }}>
                        Join now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
