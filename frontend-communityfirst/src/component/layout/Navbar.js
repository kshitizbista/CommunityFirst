import React, {useState} from "react";
import {Link, NavLink, useRouteMatch, useHistory} from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import Search from "../../services/Search";
function Navbar({onLogout}) {

    const {url} = useRouteMatch();
    const history = useHistory();
    const [state, setState] = useState({
            searchText: ""
    });
    const handleSearchSubmit = () => {
            if (state.searchText) {
                let text = state.searchText;
                 let url1=window.location.pathname;
                 Search.setSearchText(text);
                 setState({ searchText: "" })
                 history.push({
                 pathname:history.push(`${url}/services`),
                 state: { searchText: text }
                });
            } else {
                alert("Please enter some search text!");
            }
        };
        const handleSearchKeyUp = event => {
                    event.preventDefault();
                    if (event.key === 'Enter' && event.keyCode === 13) {
                        this.handleSearchSubmit();
                    }
        }
        const handleSearchInput = event => {
            setState({
                searchText: event.target.value
            });
        };
    const handleFormSubmit = e => e.preventDefault();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to={`${url}/services`} className="navbar-brand">CommunityFirst</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={`${url}/services`} className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/items`} className="nav-link">Items</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/my-posts`} className="nav-link">My Posts</NavLink>
                    </li>
                </ul>
                <button className="btn btn-outline-light ml-lg-4" onClick={() => {
                    history.push('/communityfirst/selection');
                }}>Choose Community</button> &nbsp;&nbsp;
                <Form inline onSubmit={handleFormSubmit}>
                    <FormControl
                        onChange={handleSearchInput}
                                                                            value={state.searchText}
                                                                            onKeyUp={handleSearchKeyUp}
                                                                            type="text"
                                                                            placeholder="Enter text to Search"
                                                                            className="mr-sm-2" />
                        <Button onClick={handleSearchSubmit} variant="outline-info">
                                                                            Search
                                                                        </Button>
                    </Form>
                <button className="btn btn-outline-secondary ml-lg-4" onClick={() => {
                    onLogout();
                    history.push('/');
                }}>Logout</button>

            </div>
        </nav>
    );
}

export default Navbar;
