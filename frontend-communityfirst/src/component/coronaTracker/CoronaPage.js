import React from 'react'
import { CoronaCards, CoronaChart, CoronaCountryPicker } from '../coronaTracker';
import { fetchData } from "./api";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";

class CoronaPage extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    changeCountryHandler = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data, country} = this.state;

        return (

            <div className="background">
                <Menu />
                <aside>
                    <CoronaCards data = {data}/>
                </aside>
                <main>
                    <CoronaCountryPicker handleCountryChange={this.changeCountryHandler}/>
                    <CoronaChart data={data} country={country}/>
                </main>
                <Footer />
            </div>

        )
    }
}

export default CoronaPage;
