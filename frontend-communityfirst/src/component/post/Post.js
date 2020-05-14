import React, {useEffect, useState} from "react";
import Card from "../card/Card";
import SubMenu from "./SubMenu";
import PostCreation, { assistanceType } from "./PostCreation";
import format from "date-fns/format";
import Auth from "../../services/Auth";
import PostApi from "../../api/PostApi";
import {Toast, Spinner} from "react-bootstrap";
import Community from "../../services/Community";

function Post() {

    const [postResponseAction, setPostResponseAction] = useState({
        success: false,
        msg: ""
    });
    const [show, setShow] = useState(false);
    const [services, setServices] = useState([]);
    const [requestedChecked, setRequestedChecked] = useState(true);
    const [offeredChecked, setOfferedChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const toggleRequested = (checked) => setRequestedChecked(checked);
    const toggleOffered = (checked) => setOfferedChecked(checked);

    useEffect(() => {
        getPost(getFilter())
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

    const createPost = async (data) => {
        data.userId = parseInt(Auth.getUserId());
        data.communityId = parseInt(Community.getCommunityId());
        data.postedDate = format(new Date(), "yyyy-MM-dd");
        try {
            await PostApi.saveServicePost(data);
            setPostResponseAction({success: true, msg: "Post created successfully."});
            setShow(true);
            getPost(getFilter());
        } catch (e) {
            setPostResponseAction({success: false, msg: "Error while saving the post."});
        }
    }

    const getPost = async (data) => {
        try {
            setLoading(true);
            const requestBody = {assistanceTypes: data}
            const response = await PostApi.getPostByCommunityIdAndServiceType(parseInt(Community.getCommunityId()), requestBody);
            setServices(response.data);
            setLoading(false);
        } catch (e) {

        }
    }

    return (
        <>
            <SubMenu onRequestedCheckBoxClick={toggleRequested}
                     onOfferedCheckBoxClick={toggleOffered}/>
            <PostCreation onSubmit={createPost}/>
            <div className="row justify-content-center">
                <div className="col-10">

                    {loading && <Spinner animation="border" role="status" style={{width: "7rem", height: "7rem"}} className="d-block mx-auto test">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}

                    {!loading && services.map(service =>
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
            <Toast show={show} onClose={() => setShow(false)} autohide
                   className={"toast-notification " + (postResponseAction.success ? "toast-success" : "toast-danger")}
                   delay={3000}>
                <Toast.Body>{postResponseAction.msg}</Toast.Body>
            </Toast>
        </>
    );
}

export default Post;
