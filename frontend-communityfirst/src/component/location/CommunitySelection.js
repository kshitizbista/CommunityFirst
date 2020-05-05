import React from 'react';

class CommunitySelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            communities : [],
            community : [],
            selectedCity : '--Choose City--',
            selectedState : '--Choose State--'
        };
        this.changeCity = this.changeCity.bind(this);
        this.changeCommunity = this.changeCommunity.bind(this);
    }

    componentDidMount() {
        this.setState({
            communities : [
                { "id": 1, "name": "Stockholm", "community":[ {"id":2,"name": "Vallingby"}, {"id":1,"name": "Täby"}]},
                { "id": 2, "name": "Ljubljana", "community":[ {"id":2,"name": "Gorenjska"}, {"id":1,"name": "Dolenjska"}]}
            ]
        });
    }

    changeCity(event) {
        this.setState({selectedCity: event.target.value});
        this.setState({community : this.state.communities.find(cty => cty.name === event.target.value).community});
    }

    changeCommunity(event) {
        this.setState({selectedState: event.target.value});
        const stats = this.state.communities.find(cty => cty.name === this.state.selectedCity).community;
    }

    render() {
        return (
            <div id="container">

                <div>
                    <label>City: </label>
                    <select placeholder="City" value={this.state.selectedCity} onChange={this.changeCity}>
                        <option>--Choose City--</option>
                        {this.state.communities.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>

                <div>
                    <label>Community: </label>
                    <select placeholder="Community" value={this.state.selectedState} onChange={this.changeCommunity}>
                        <option>--Choose Community--</option>
                        {this.state.community.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>

                <button>SUBMIT</button>

            </div>
        )
    }
}

export default CommunitySelection;
