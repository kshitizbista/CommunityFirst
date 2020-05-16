import React from 'react'
import styles from './CovidStyle.css'
import { CoronaCards, CoronaChart, CoronaCountryPicker } from '../coronaTracker';
import { fetchData } from "./api";

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
            <div className={styles.container}>
                <CoronaCards data = {data}/>
                <CoronaCountryPicker handleCountryChange={this.changeCountryHandler}/>
                <CoronaChart data={data} country={country}/>
            </div>
        )
    }
}

export default CoronaPage;
