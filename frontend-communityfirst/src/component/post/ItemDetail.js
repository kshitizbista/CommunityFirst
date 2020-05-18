import React, {useEffect, useState} from "react";
import PostApi from "../../api/PostApi";
import format from "date-fns/format";
import {useParams, useHistory} from "react-router-dom";

function ItemDetail() {

    const {id} = useParams();
    const [itemPost, setItemPost] = useState({});
    const history = useHistory();

    const getItemPostById = async () => {
        try {
            const response = await PostApi.getItemPostById(id);
            response.data.postedDate = format(new Date(response.data.postedDate), "MMMM dd, yyyy");
            setItemPost(response.data);
        } catch (e) {

        }
    }

    useEffect(() => {
        getItemPostById();
    }, []);

    return (
        <div className="card card-layout">
            <div className="card-body">
                <h3 className="card-title"><b><i>{itemPost.title}</i></b></h3>
                <p className="card-text word-wrap"><b>Description:</b> {itemPost.description}</p>
                <p className="card-text"><b>Posted By:</b> {itemPost.firstname} {itemPost.lastname}</p>
                <p className="card-text"><b>Contact Details:</b> {itemPost.email}</p>
            </div>
            <div className="card-footer text-muted">
                <p>Posted on: {itemPost.postedDate}</p>
                <button className="btn btn-primary ml-1" onClick={() =>history.push("/communityfirst/se/items")} >Back to Items</button>          
            </div>
        </div>
    )
}

export default ItemDetail;
