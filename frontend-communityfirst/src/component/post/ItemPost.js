import React, { useEffect, useState } from "react";
import SubMenu from "./ItemsSubMenu";
import ItemPostCreation, { itemType } from "./ItemPostCreation";
import format from "date-fns/format";
import Auth from "../../services/Auth";
import ItemPostApi from "../../api/ItemPostApi";
import { Toast, Spinner } from "react-bootstrap";
import Community from "../../services/Community";
import ItemCard from "../card/ItemCard";

function ItemPost() {

    const [postResponseAction, setItemPostResponseAction] = useState({
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

                itemType.REQUEST_HELP,
                itemType.OFFER_HELP
            ];
        } else if (!requestedChecked && offeredChecked) {
            return [
            itemType.OFFER_HELP
            ];
        } else if (requestedChecked && !offeredChecked) {
            return [
                itemType.REQUEST_HELP
            ];
        } else {
            return [];
        }
    }

    const createItemPost = async (data) => {
        data.userId = parseInt(Auth.getUserId());
        data.communityId = parseInt(Community.getCommunityId());
        data.postedDate = format(new Date(), "yyyy-MM-dd");
        try {
            await ItemPostApi.saveItemPost(data);
            setItemPostResponseAction({ success: true, msg: "Post created successfully." });
            setShow(true);
            getPost(getFilter());
        } catch (e) {
            setItemPostResponseAction({ success: false, msg: "Error while saving the post." });
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
            <ItemPostCreation onSubmit={createItemPost} />
            <div className="row justify-content-center">
                <div className="col-10">

                    {loading && <Spinner animation="border" role="status" style={{ width: "7rem", height: "7rem" }} className="d-block mx-auto test">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}

                    {!loading && services.map(item =>
                        <ItemCard key={item.id}
                            title={item.title}
                            description={item.description}
                            Service={item.assistanceType}
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
