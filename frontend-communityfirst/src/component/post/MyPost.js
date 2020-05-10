import React, {useEffect, useState} from "react";
import SubMenu from "./SubMenu";
import {assistanceType} from "./PostCreation";
import PostApi from "../../api/PostApi";
import Auth from "../../services/Auth";
import Card from "../card/Card";
import {Spinner} from "react-bootstrap";

function MyPost() {

    const [services, setServices] = useState([]);
    const [requestedChecked, setRequestedChecked] = useState(true);
    const [offeredChecked, setOfferedChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const toggleRequested = (checked) => setRequestedChecked(checked);
    const toggleOffered = (checked) => setOfferedChecked(checked);


    useEffect(() => {
        getMyPost(getFilter())
    }, [requestedChecked, offeredChecked])

    const getFilter = () => {
        if (requestedChecked && offeredChecked) {
            return [
                assistanceType.REQUEST_HELP,
                assistanceType.OFFER_HELP
            ];
        } else if (!requestedChecked && offeredChecked) {
            return [
                assistanceType.OFFER_HELP
            ];
        } else if (requestedChecked && !offeredChecked) {
            return [
                assistanceType.REQUEST_HELP
            ];
        } else {
            return [];
        }
    }

    const getMyPost = async (data) => {
        try {
            setLoading(true);
            const requestBody = {assistanceTypes: data}
            const response = await PostApi.getPostByUserIdAndServiceType(parseInt(Auth.getUserId()), requestBody);
            setServices(response.data);
            setLoading(false);
        } catch (e) {

        }
    }

    return (
        <>
            <SubMenu onRequestedCheckBoxClick={toggleRequested}
                     onOfferedCheckBoxClick={toggleOffered}/>
            <div className="row justify-content-center">
                <div className="col-10">
                    {loading && <Spinner animation="border" role="status" style={{width: "7rem", height: "7rem"}} className="d-block mx-auto test">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}

                    {services.map(service =>
                        <Card key={service.id}
                              title={service.title}
                              description={service.description}
                              serviceType={service.assistanceType}
                              postedDate={service.postedDate}
                              userId={service.userId}
                              email={service.email}
                              firstname={service.firstname}
                              lastname={service.lastname}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default MyPost;
