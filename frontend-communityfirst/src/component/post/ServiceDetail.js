import React, {useEffect, useState} from "react";
import PostApi from "../../api/PostApi";
import format from "date-fns/format";
import {useParams, useHistory} from "react-router-dom";
import {assistanceType} from "./PostCreation";

function ServiceDetail() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const history = useHistory();

    const getPostById = async () => {
        try {
            const response = await PostApi.getPostById(id);
            response.data.postedDate = format(new Date(response.data.postedDate), "MMMM dd, yyyy");
            setPost(response.data);
        } catch (e) {

        }
    }

    useEffect(() => {
        getPostById();
    }, []);

    return (
        <div className="card card-layout">
            <div className="card-body">
                <h3 className="card-title"><b><i>{post.title}</i></b></h3>
                <p className="card-text word-wrap"><b>Description:</b> {post.description}</p>
                <p className="card-text"><b>Posted By:</b> {post.firstname} {post.lastname}</p>
                <p className="card-text"><b>Service Type:</b> {post.assistanceType === assistanceType.REQUEST_HELP ?
                    'Requesting Help' : 'Offering Help'}
                </p>
                <p className="card-text"><b>Contact Details:</b> {post.email}</p>
            </div>
            <div className="card-footer text-muted">
                <p>Posted on: {post.postedDate}</p>
                <button className="btn btn-warning ml-1"
                        onClick={() => history.push("/communityfirst/se/services")}>Back to Services
                </button>
            </div>
        </div>
    )
}

export default ServiceDetail;
