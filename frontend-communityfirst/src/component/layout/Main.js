import React, {useEffect} from "react";
import Navbar from "./Navbar";
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import Auth from "../../services/Auth";
import Post from "../post/Post";
import ItemPost from "../post/ItemPost";
import MyPost from "../post/MyPost";
import ServiceDetail from "../post/ServiceDetail";

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
            <div className="container-fluid p-0" style={{background: "whitesmoke", minHeight: 'calc(100vh - 56px)'}}>
                <Switch>
                    <Redirect exact from={path} to={`${url}/services`}/>
                    <Route exact path={`${path}/services`}>
                        <Post/>
                    </Route>

                    <Route exact path={`${path}/items`}>
                        <ItemPost/>
                    </Route>
                    <Route exact path={`${path}/service-details/:id`} children={<ServiceDetail/>}/>

                    <Route exact path={`${path}/my-posts`}>
                        <MyPost/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default Main;
