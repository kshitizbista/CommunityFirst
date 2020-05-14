import React from "react";
import {Link} from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <homepage>
           <header>
               <ul className="navigation-list">
                   <li className="navigation-item-main-left" > <img className="logo-image" src={require('./logo.png')}></img></li>
                   <li className="navigation-item-main-right" > <Link to="/signup" className="btn btn-warning btn-lg">Join Now!</Link></li>
                   <li className="navigation-item-main-right" ><Link to="/login" className="btn btn-secondary btn-lg">Login</Link></li>
               </ul>
           </header>
            <aside>
                <h1>CommunityFirst</h1>
                <p className="description">Community First is a platform for people to voluntarily share,
                    donate and offer services to others in their communities.
                    We at Community First believe that real, sustainable change requires
                    ingenuity and engagement of its members. Our vision is to help communities
                    better equip themselves to deal with unforeseen circumstances such as war,
                    natural disasters and pandemics etc.</p>

                <ul className="navigation-list-sidebar">
                    <li className="navigation-item-sidebar" ><a href={"https://www.visitstockholm.com/sv/evenemang/"} className="btn btn-danger btn-lg" role="button">Events</a></li>
                    <li className="navigation-item-sidebar" >
                        <a href={"https://c19.se/"} className="btn btn-dark btn-lg" role="button">Coronavirus</a></li>
                </ul>
            </aside>
            <main>
                <picture className="side-image-blur"><img className="side-image"src={require('/Users/ire/communityfirst/frontend-communityfirst/src/assets/images/ALL2.jpg')}></img></picture>
            </main>
            <footer>
                <ul className="navigation-list-footer">
                    <li className="navigation-item-footer" > <Link className="navigation-item-footer-btn" to="/communityfirst" >Home</Link></li>
                    <li className="navigation-item-footer" ><Link className="navigation-item-footer-btn" to="/communityfirst" >Contact</Link></li>
                </ul>
            </footer>
        </homepage>

    )
}

export default Home;
