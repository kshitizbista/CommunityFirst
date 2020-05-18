import React from "react";
import {Link} from "react-router-dom";
import '../home/Home.css';

function Footer() {
    return (
            <footer>
                <ul className="navigation-list-footer">
                    <li className="navigation-item-footer" > <Link className="navigation-item-footer-btn" to="/communityfirst" >Home</Link></li>
                    <li className="navigation-item-footer" ><Link className="navigation-item-footer-btn" to="/communityfirst/about" >About</Link></li>
                    <li className="navigation-item-footer" ><Link className="navigation-item-footer-btn" to="/communityfirst/covid" >Covid</Link></li>
                </ul>
            </footer>
    )
}

export default Footer;
