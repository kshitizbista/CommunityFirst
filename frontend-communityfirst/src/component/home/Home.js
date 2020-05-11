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
                            Community First is an initiative to help communities come together in difficult times. We at
                            community First believe that real, sustainable change requires ingenuity and engagement of
                            community
                            members. Our forum helps communities to better equip themselves to deal with unforeseen
                            circumstances such as war, nature disasters and epidemics etc. We provide a platform for
                            people to
                            share, donate and offer services amongst their communities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
