import React, {useState} from "react";

function CommunitySelection({cities, communities, onCityClick, onCommunityClick}) {

    const [selectedCity, setSelectedCity] = useState("Select City");
    const [selectedCommunity] = useState("Select Community");

    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="dropdown">
                    <span className="btn btn-warning dropdown-toggle btn-lg" role="button" id="cityDropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {selectedCity}
                    </span>

                    <div className="dropdown-menu" aria-labelledby="cityDropdownMenuLink">
                        {cities.map((city) => <span key={city.id} className="dropdown-item community-selection"
                                                    onClick={() => {
                                                        onCityClick(city.id)
                                                        setSelectedCity(city.name)
                                                    }}>{city.name}</span>)}
                    </div>
                </div>
            </div>
            {communities.length > 0 && <div className="col-auto">
                <div className="dropdown">
                    <span className="btn btn-warning dropdown-toggle btn-lg" role="button" id="communityDropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {selectedCommunity}
                    </span>
                    <div className="dropdown-menu" aria-labelledby="communityDropdownMenuLink">
                        {communities.map((community) => <span key={community.id}
                                                              className="dropdown-item community-selection"
                                                              onClick={() => {
                                                                  onCommunityClick(community.id, community.name)
                                                              }}>{community.name}</span>)}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CommunitySelection;
