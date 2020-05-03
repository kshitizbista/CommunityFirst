import React, {useState} from 'react';
import { useForm } from "react-hook-form";

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleSubmit, register, watch, errors } = useForm();
    const onClick = data => {
        console.log(data);
    };
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Login</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input name ="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            ref={register({ required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            }
                        })}/>
                        {errors.email && <e>Email is required and Must be a well-formed email address </e>}
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input name="password"
                            type="password" 
                            placeholder="Enter your password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            ref={register({ required: true, minLength: 5, maxLength: 50 })} />
                            {errors.password && <e>Password is required and size must be between 5 and 50 </e>}
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-primary" 
                            onSubmit={() => onSubmit({email, password})}>
                            Login
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;