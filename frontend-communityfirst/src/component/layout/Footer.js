import React from "react";
import {Link} from "react-router-dom";
import '../home/Background.css';

function Footer() {
    return (
            <footer>
                <ul className="navigation-list-footer">
                    <li className="navigation-item-footer" > <Link className="navigation-item-footer-btn" to="/communityfirst" >Home</Link></li>
                    <li className="navigation-item-footer" ><Link className="navigation-item-footer-btn" to="/communityfirst/about" >About</Link></li>
                    <li className="navigation-item-footer" ><a  className="navigation-item-footer-btn" href={"https://www.visitstockholm.com/sv/evenemang/"}>Event</a></li>
                </ul>
            </footer>
    )
}

export default Footer;
