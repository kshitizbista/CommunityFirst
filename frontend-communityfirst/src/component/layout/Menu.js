import React from "react";
import {Link} from "react-router-dom";
import '../home/Background.css';

function Menu() {
    return (
            <header>
                <ul className="navigation-list">
                    <li className="navigation-item-main-left" > <a href={"/communityfirst"}><img className="logo-image" src={require('../../assets/images/logo2.jpg')}></img></a></li>
                    <li className="navigation-item-main-right" > <Link to="/signup" className="btn btn-warning btn-lg">Join Now!</Link></li>
                    <li className="navigation-item-main-right" ><Link to="/login" className="btn btn-secondary btn-lg">Login</Link></li>
                </ul>
            </header>
    );
}

export default Menu;
