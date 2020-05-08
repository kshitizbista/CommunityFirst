import React, {useEffect, useState} from "react";
import CommunitySelection from "./CommunitySelection";
import LocationApi from "../../api/LocationApi";
import {useHistory} from "react-router-dom"

function Location() {

    const [cities, setCities] = useState({cities: []});
    const [communities, setCommunities] = useState({communities: []});
    const history = useHistory();

    useEffect(() => {
        const getAllCities = async () => {
            const response = await LocationApi.getAllCities();
            setCities({cities: response.data});
        }
        getAllCities();
    }, [])

    const getCommunities = async (cityId) => {
        const response = await LocationApi.getCommunityByCityId(cityId);
        setCommunities({communities: response.data});
    }

    const onCommunityClick = (selectedCity, selectedCommunity) => {
        history.push("/communityfirst/se", {
            selectedCity,
            selectedCommunity
        });
    }

    return (
        <div className="container" style={{height: "100vh"}}>
            <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="col ">
                    <h2 className="text-center mb-5">Choose your community!</h2>
                    <CommunitySelection {...cities} {...communities} onCityClick={getCommunities}
                                        onCommunityClick={onCommunityClick}/>
                </div>
            </div>

        </div>
    );

}

export default Location;
