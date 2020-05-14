import React, {useEffect, useState} from "react";
import MyPostSubMenu from "./MyPostSubMenu";
import ItemSubMenu from "./ItemSubMenu";
import { assistanceType } from "./PostCreation";
import { itemType } from "./ItemPostCreation";
import PostApi from "../../api/PostApi";
import ItemPostApi from "../../api/ItemPostApi";
import Auth from "../../services/Auth";
import Card from "../card/Card";
import {Spinner} from "react-bootstrap";
import {AxiosInstance as axios} from "axios";
import ItemCard from "../card/ItemCard";

function MyPost() {

    const [services, setServices] = useState([]);
    const [items, setItems] = useState([]);
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
                assistanceType.OFFER_HELP,
                itemType.REQUEST_ITEM,
                itemType.OFFER_ITEM
            ];
        } else if (!requestedChecked && offeredChecked) {
            return [
                itemType.OFFER_ITEM,
                itemType.REQUEST_ITEM
            ];
        } else if (requestedChecked && !offeredChecked) {
            return [
                assistanceType.OFFER_HELP,
                assistanceType.REQUEST_HELP,

            ];
        } else {
            return [];
        }
    }

    const getMyPost = async (data) => {
        try {
            setLoading(true);
            const itemFilters = data.filter(x => x.indexOf("ITEM") >= 0)
            const helpFilters = data.filter(x => x.indexOf("HELP") >= 0)
            const requestBody = { assistanceTypes: helpFilters }
            const requestBodyItem = { itemTypes: itemFilters }
            const response = await PostApi.getPostByUserIdAndServiceType(parseInt(Auth.getUserId()), requestBody);
            const responseItem = await ItemPostApi.getPostByUserIdAndItemType(parseInt(Auth.getUserId()), requestBodyItem);
            setServices(response.data);
            setItems(responseItem.data);
            setLoading(false);
        } catch (e) {
        }
    }

    // this.deletePost = async function (postId) {
    //     await axios.delete(PostApi.deletePost(postId));
    // }

    return (
        <>
            <MyPostSubMenu onServiceCheckBoxClick={toggleRequested}
                onItemCheckBoxClick={toggleOffered} />
          
            
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
                              // delete = {() => this.deletePost(service.id)}
                        />
                    )}

                    {items.map(item =>
                            <ItemCard key={item.id}
                                title={item.title}
                                description={item.description}
                                itemType={item.itemType}
                                postedDate={item.postedDate}
                                userId={item.userId}
                                email={item.email}
                                firstname={item.firstname}
                                lastname={item.lastname}
                            // delete = {() => this.deletePost(service.id)}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default MyPost;
