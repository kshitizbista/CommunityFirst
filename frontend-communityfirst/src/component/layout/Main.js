import React, {useEffect} from "react";
import Navbar from "./Navbar";
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import Auth from "../../services/Auth";
import Post from "../post/Post";
import ItemPost from "../post/ItemPost";
import MyPost from "../post/MyPost";
import Footer from "./Footer";

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
            <div  style={{background: "#F8F0E5", minHeight: 'calc(88vh - 56px)'}}>
                <Switch>
                    <Redirect exact from={path} to={`${url}/services`}/>
                    <Route exact path={`${path}/services`}>
                        <Post/>
                        </Route>

                    <Route exact path={`${path}/items`}>
                        <ItemPost />
                        </Route>

                    <Route exact path={`${path}/my-posts`}>
                        <MyPost/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </>
    );
}

export default Main;
