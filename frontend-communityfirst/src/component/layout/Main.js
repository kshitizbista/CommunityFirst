import React, {useEffect} from "react";
import Navbar from "./Navbar";
import {Link, Redirect, Route, Switch, useRouteMatch, useLocation, useHistory} from "react-router-dom";
import Auth from "../../services/Auth";
import ItemsPage from "../../component/items/ItemsPage";

function Main() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    const {path, url} = useRouteMatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (location.state == null) history.push("/communityfirst/selection")
    }, [])

    return (
        <>
            <Navbar onLogout={() => Auth.logout()}/>
            <Switch>
                <Redirect exact from={path} to={`${url}/services`}/>
                <Route exact path={`${path}/services`}>
                    <div>Service</div>
                </Route>

                <Route exact from={path} to={"/communityfirst/items"}/>
                <Route exact path={`${path}/items`}>
                <ItemsPage/>
                </Route>
            </Switch>
        </>
    );
}

export default Main;
