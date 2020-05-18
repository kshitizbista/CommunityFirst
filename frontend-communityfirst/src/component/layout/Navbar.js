import React from "react";
import {Link, NavLink, useRouteMatch, useHistory} from "react-router-dom";

function Navbar({onLogout}) {

    const {url} = useRouteMatch();
    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to={`${url}/services`} className="navbar-brand">CommunityFirst</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={`${url}/services`} className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/items`} className="nav-link">Items</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/my-posts`} className="nav-link">My Posts</NavLink>
                    </li>
                </ul>
                <button className="btn btn-outline-light ml-lg-4" onClick={() => {
                    history.push('/communityfirst/selection');
                }}>Choose Community</button>
                <button className="btn btn-outline-secondary ml-lg-4" onClick={() => {
                    onLogout();
                    history.push('/');
                }}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
