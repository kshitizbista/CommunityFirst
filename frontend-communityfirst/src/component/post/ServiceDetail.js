import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostApi from "../../api/PostApi";
import format from "date-fns/format";
import Card from "../card/Card";

function ServiceDetail() {

    const {id} = useParams();
    const [post, setPost] = useState({});

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
        <div>                        
            <Card   key={post.title}
                    description={post.description}
                    serviceType={post.assistanceType}
                    postedDate={post.postedDate}
                    email={post.email}
                    firstname={post.firstname}
                    lastname={post.lastname}
            />
            {/* <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
            <p>Service Type:{post.assistanceTypes}</p>
            <p>{post.postedDate}</p>
            <p>Name: {post.firstname} {post.lastname}</p>
            <p>Email: {post.email}</p> */}
        </div>
    )
}

export default ServiceDetail;