import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostApi from "../../api/PostApi";
import format from "date-fns/format";
<<<<<<< HEAD
import Card from "../card/Card";
=======
>>>>>>> 3610c2e5133feab2f362be514ef1649b7f457824

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
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
            <p>Service Type:{post.assistanceTypes}</p>
            <p>{post.postedDate}</p>
            <p>Name: {post.firstname} {post.lastname}</p>
            <p>Email: {post.email}</p>
        </div>
    )
}

export default ServiceDetail;