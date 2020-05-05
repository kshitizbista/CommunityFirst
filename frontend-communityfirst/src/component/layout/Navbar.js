import React from "react";
import {Link, NavLink, useRouteMatch, useHistory} from "react-router-dom";


function Navbar({onLogout}) {

    const {url} = useRouteMatch();
    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`${url}/services`} className="navbar-brand">CommunityFirst</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to={`${url}/services`} className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/donation`} className="nav-link">Donate</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/loans`} className="nav-link">Loan</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/community`} className="nav-link">Select Community</NavLink>
                    </li>
                </ul>
                <button className="btn btn-outline-info ml-lg-4" onClick={() => {
                    onLogout();
                    history.push('/');
                }}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
