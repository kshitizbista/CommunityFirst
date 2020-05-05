import React, {useState} from "react";

function CommunitySelection({cities, communities, onCityClick, onCommunityClick}) {

    const [selectedCity, setSelectedCity] = useState("Select City");
    const [selectedCommunity] = useState("Select Community");

    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="dropdown">
                    <span className="btn btn-info dropdown-toggle btn-lg" role="button" id="dropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {selectedCity}
                    </span>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {cities.map((city) => <span key={city.id} className="dropdown-item"
                                                    onClick={() => {
                                                        onCityClick(city.id)
                                                        setSelectedCity(city.name)
                                                    }}>{city.name}</span>)}
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="dropdown">
                    <span className="btn btn-info dropdown-toggle btn-lg" role="button" id="dropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {selectedCommunity}
                    </span>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {communities.map((community) => <span key={community.id} className="dropdown-item"
                                                              onClick={() => {
                                                                  onCommunityClick(selectedCity, community.name)
                                                              }}>{community.name}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunitySelection;
