import React, {useState} from "react";

function RegisterForm({onSubmit}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Become a Member</h4>
                <form>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.value)}
                                    placeholder="Firstname"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={lastname}
                                    onChange={e => setLastname(e.target.value)}
                                    placeholder="lastname"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control form-control-lg"
                            placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            setLoading(true);
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
