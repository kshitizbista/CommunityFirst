import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container-fluid home-wrapper">
            <div className="row justify-content-center pt-2">
                <div className="col-auto ">
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
                <div className="col-auto">
                    <Link to="/signup" className="btn btn-warning">Join Now!</Link>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Community First</h3>
                        <p className="card-text">
                        Community First is a platform for people to voluntarily share, 
                        donate and offer services to others in their communities. 
                        We at Community First believe that real, sustainable change requires 
                        ingenuity and engagement of its members. Our vision is to help communities 
                        better equip themselves to deal with unforeseen circumstances such as war, 
                        natural disasters and pandemics etc. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div class="card-columns">
                    <div class="card bg-warning">
                        <img class="card-img-top"src={require('../../assets/images/community.png')}></img>
                            <div class="card-body">
                                <h5 class="card-title">Quote of the Day!</h5>
                                <p class="card-text">Small acts, when multiplied, can transform the world.</p>
                            </div>
                    </div>
                    <div class="card bg-warning p-3">
                            <div class="card-body">
                                <h5 class="card-title">For Latest Updates on COVID19!</h5>
                                <a href={"https://c19.se/"}>Click Here!</a>
                            </div>
                    </div>
                    <div class="card bg-warning p-3">
                        <img class="card-img-top"src={require('../../assets/images/ALL.png')}></img>
                            <div class="card-body">
                            <p class="card-text">Täby Park community meet on 05/20/2020. Please join us!</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
