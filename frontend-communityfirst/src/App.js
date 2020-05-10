import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./component/home/Home";
import LoginPage from "./component/auth/LoginPage";
import ItemsPage from "./component/items/ItemsPage";
import RegisterPage from "./component/auth/RegisterPage";
import Auth from "./services/Auth";
import Main from "./component/layout/Main";
import Location from "./component/location/Location";

function App() {

    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/communityfirst"/>
                <Route exact path="/communityfirst">
                    <Home/>
                </Route>
                <Route path="/login" render={() =>
                    !Auth.isLoggedIn() ? (<LoginPage/>) : (<Redirect to="/communityfirst/selection"/>)
                }/>
                <Route path="/communityfirst/selection" render={() =>
                    Auth.isLoggedIn() ? (<Location/>) : (<Redirect to="/"/>)
                }/>
                <Route path="/items" render={() =>
                    Auth.isLoggedIn() ? (<ItemsPage/>) : (<Redirect to="/"/>)
                 }/>
                <Route path="/signup" render={(props) => <RegisterPage {...props}/>}/>
                <Route path="/communityfirst/se"
                       render={() => Auth.isLoggedIn() ? (<Main/>) : (<Redirect to="/"/>)
                       }/>
            </Switch>
        </Router>
    )
}

export default App;
