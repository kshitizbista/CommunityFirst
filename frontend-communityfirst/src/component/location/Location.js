import React, { Component } from "react";
import CommunitySelection from "./CommunitySelection";


class Location extends Component {
    render() {
        return (
            <div>
                <h2>Before we get started, pick your community!</h2>
                <CommunitySelection/>
            </div>
        );
    }
}

export default Location;
