import React from "react";
import Navbar from "./Navbar";
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import Auth from "../../services/Auth";

function Main() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let {path, url} = useRouteMatch();
    return (
        <>
            <Navbar onLogout={() => Auth.logout()}/>
            <Switch>
                <Redirect exact from={path} to={`${url}/services`}/>
                <Route exact path={`${path}/services`}>
                    <div>Services</div>
                </Route>
                <Route exact path={`${path}/donation`}>
                    <div>Donation</div>
                </Route>
                <Route exact path={`${path}/loans`}>
                    <div>Loans</div>
                </Route>
            </Switch>
        </>
    );
}

export default Main;
