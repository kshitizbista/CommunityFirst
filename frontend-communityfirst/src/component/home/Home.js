import React from "react";
import './Home.css';
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="homepage">
           <Menu />
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
                        <Link to="/communityfirst/covid" className="btn btn-dark btn-lg" role="button">Coronavirus</Link></li>
                </ul>
            </aside>
            <main>
                <picture className="side-image-blur"><img className="side-image"src={require('../../assets/images/ALL2.jpg')}></img></picture>
            </main>
            <Footer />
        </div>
    )
}

export default Home;
