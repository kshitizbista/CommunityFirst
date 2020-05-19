import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import ItemSubMenu from "./ItemSubMenu";
import ItemPostCreation, { itemType } from "./ItemPostCreation";
import format from "date-fns/format";
import Auth from "../../services/Auth";
import ItemPostApi from "../../api/ItemPostApi";
import { Toast, Spinner } from "react-bootstrap";
import Community from "../../services/Community";
import ItemCard from "../card/ItemCard";
import Search from "../../services/Search";

function ItemPost() {

    const [postResponseAction, setItemPostResponseAction] = useState({
        success: false,
        msg: ""
    });
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);
    const [requestedChecked, setRequestedChecked] = useState(true);
    const [offeredChecked, setOfferedChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const toggleRequested = (checked) => setRequestedChecked(checked);
    const toggleOffered = (checked) => setOfferedChecked(checked);
    const history = useHistory();

    useEffect(() => {
        getPost(getFilter())
    }, [requestedChecked, offeredChecked])

    const getFilter = () => {
        if (requestedChecked && offeredChecked) {
            return [

                itemType.REQUEST_ITEM,
                itemType.OFFER_ITEM
            ];
        } else if (!requestedChecked && offeredChecked) {
            return [
                itemType.OFFER_ITEM
            ];
        } else if (requestedChecked && !offeredChecked) {
            return [
                itemType.REQUEST_ITEM
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
            let searchText = Search.getSearchText();
            setLoading(true);
            const requestBody = { itemTypes: data }
            const response = await ItemPostApi.getPostByCommunityIdAndItemType(parseInt(Community.getCommunityId()), requestBody, searchText);
            setItems(response.data);
            setLoading(false);
            Search.setSearchText('');
        } catch (e) {

        }
    }
    if(Search.getSearchText()) {
        getPost(getFilter());
        Search.setSearchText('');
    }

    return (
        <>
            <ItemSubMenu onRequestedCheckBoxClick={toggleRequested}
                onOfferedCheckBoxClick={toggleOffered} />
            <ItemPostCreation onSubmit={createItemPost} />
            <div className="row justify-content-center">
                <div className="col-10" style={{overflow:"scroll", height: "64vh"}}>

                    {loading && <Spinner animation="border" role="status" style={{ width: "7rem", height: "7rem" }} className="d-block mx-auto test">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}

                    {!loading && items.map(item =>
                        <ItemCard key={item.id}
                            title={item.title}
                            description={item.description}
                            maxDesc={130}
                            itemType={item.itemType}
                            postedDate={item.postedDate}
                            userId={item.userId}
                            email={item.email}
                            firstname={item.firstname}
                            lastname={item.lastname}
                            onCardClick={() => history.push("/communityfirst/se/item-details/" + item.id)}
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
