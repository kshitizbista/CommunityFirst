import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import SubMenu from "./SubMenu";
import ItemPostCreation, { itemType } from "./ItemPostCreation";
import PostCreation, { assistanceType } from "./PostCreation";
import format from "date-fns/format";
import Auth from "../../items/Auth";
import ItemPostApi from "../../api/ItemPostApi";
import { Toast, Spinner } from "react-bootstrap";
import Community from "../../items/Community";

function ItemPost() {

    const [postResponseAction, setPostResponseAction] = useState({
        success: false,
        msg: ""
    });
    const [show, setShow] = useState(false);
    const [services, items, setServices] = useState([]);
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
                assistanceType.OFFER_HELP,
                itemType.REQUEST_HELP,
                itemType.OFFER_HELP
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
            await ItemPostApi.saveServicePost(data);
            setPostResponseAction({ success: true, msg: "Post created successfully." });
            setShow(true);
            getPost(getFilter());
        } catch (e) {
            setPostResponseAction({ success: false, msg: "Error while saving the post." });
        }
    }

    const getPost = async (data) => {
        try {
            setLoading(true);
            const requestBody = { itemTypes: data }
            const response = await ItemPostApi.getPostByCommunityIdAndItemType(parseInt(Community.getCommunityId()), requestBody);
            setServices(response.data);
            setLoading(false);
        } catch (e) {

        }
    }

    return (
        <>
            <SubMenu onRequestedCheckBoxClick={toggleRequested}
                onOfferedCheckBoxClick={toggleOffered} />
            <ItemPostCreation onSubmit={createPost} />
            <div className="row justify-content-center">
                <div className="col-10">

                    {loading && <Spinner animation="border" role="status" style={{ width: "7rem", height: "7rem" }} className="d-block mx-auto test">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}

                    {!loading && services.map(item =>
                        <Card key={item.id}
                            title={item.title}
                            description={item.description}
                            serviceType={item.assistanceType}
                            postedDate={item.postedDate}
                            userId={item.userId}
                            email={item.email}
                            firstname={item.firstname}
                            lastname={item.lastname}
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

export default ItemPost;
