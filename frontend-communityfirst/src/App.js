import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import LoginPage from "./component/auth/LoginPage";
import Auth from "./services/Auth";

function App() {
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    Auth.bindLoggedInStateSetter(setLoggedIn);

    const loggedInRouter = (
        <Router>
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/">
                        <div>
                            Hello
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
    return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
