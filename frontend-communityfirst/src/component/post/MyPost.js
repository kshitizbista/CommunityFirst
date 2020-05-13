import React, {useEffect, useState} from "react";
import SubMenu from "./SubMenu";
import { assistanceType } from "./PostCreation";
import { itemType } from "./ItemPostCreation";
import PostApi from "../../api/PostApi";
import ItemPostApi from "../../api/ItemPostApi";
import Auth from "../../services/Auth";
import Card from "../card/Card";

import {Button, Form, Modal, Spinner} from "react-bootstrap";
import {useForm} from "react-hook-form";
import ItemCard from "../card/ItemCard";


function MyPost() {

    const [services, setServices] = useState([]);
    const [items, setItems] = useState([]);
    const [requestedChecked, setRequestedChecked] = useState(true);
    const [offeredChecked, setOfferedChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const toggleRequested = (checked) => setRequestedChecked(checked);
    const toggleOffered = (checked) => setOfferedChecked(checked);

    //EditModel state
    const {register: registerEditForm, handleSubmit: handleEditFormSubmit, errors: errorsEditFrom} = useForm();
    const [showEditModel, setShowEditModel] = useState(false);

    const [postId, setPostId] = useState(-1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        getMyPost(getFilter())
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
                assistanceType.OFFER_HELP,
                itemType.OFFER_HELP
            ];
        } else if (requestedChecked && !offeredChecked) {
            return [
                assistanceType.REQUEST_HELP,
                itemType.REQUEST_HELP
            ];
        } else {
            return [];
        }
    }

    const getMyPost = async (data) => {
        try {
            setLoading(true);
            const requestBody = { assistanceTypes: data }
            const requestBodyItem = { itemTypes: data }
            const response = await PostApi.getPostByUserIdAndServiceType(parseInt(Auth.getUserId()), requestBody);
            const responseItem = await ItemPostApi.getPostByUserIdAndItemType(parseInt(Auth.getUserId()), requestBodyItem);
            setServices(response.data);
            setItems(responseItem.data);
            setLoading(false);
        } catch (e) {
        }
    }

    const deletePostHandler = async (postId) => {
        try {
            await PostApi.deletePost(postId);
            getMyPost(getFilter());
        } catch (e) {

        }
    }

    const updatePostHandler = async (requestBody) => {
        try {
            await PostApi.updatePost(requestBody);
            getMyPost(getFilter());
        } catch (e) {
        }
    }

    const openEditModel =  (postId, title, description) => {
        //open model and set data to form
        setShowEditModel(true);
        setPostId(postId);
        setTitle(title);
        setDescription(description);
    }

    const resetEditForm = () => {
        setPostId(-1);
        setTitle("");
        setDescription("");
    }

    const editModel = (
        <Modal show={showEditModel} onHide={() => setShowEditModel(false)}>
            <Modal.Header closeButton>
                <Modal.Title className="w-100">
                    <h5 className="text-center">Edit Post</h5>
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleEditFormSubmit((data) => {
                updatePostHandler(data);
                resetEditForm();
                setShowEditModel(false);
            })}>
                <Modal.Body>
                    <Form.Control type="hidden" name="id" value={postId} ref={registerEditForm}></Form.Control>
                    <Form.Group>
                        <Form.Control type="text" name="title" placeholder="Title"
                                      ref={registerEditForm({required: true, minLength: 5, maxLength: 70})}
                                      defaultValue={title}/>
                        {errorsEditFrom.title && errorsEditFrom.title.type === "required" &&
                        <span className="form-error">Title is required</span>}
                        {errorsEditFrom.title && (errorsEditFrom.title.type === "minLength" || errorsEditFrom.title.type === "maxLength") &&
                        <span className="form-error">Character must be between 5 and 50 </span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" name="description" placeholder="Write something..."
                                      style={{resize: "none"}} rows="6"
                                      ref={registerEditForm({required: true})} defaultValue={description}/>
                        {errorsEditFrom.description && errorsEditFrom.description.type === "required" &&
                        <span className="form-error">Description is required</span>}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="reset" variant="secondary" onClick={() => {
                        resetEditForm();
                        setShowEditModel(false);
                    }}>Cancel</Button>
                    <Button type="submit" variant="primary">Update</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );


    return (
        <>
            <SubMenu onRequestedCheckBoxClick={toggleRequested}
                     onOfferedCheckBoxClick={toggleOffered}/>
            <div className="row justify-content-center">
                <div className="col-10">
                    {loading && <Spinner animation="border" role="status" style={{width: "7rem", height: "7rem"}}
                                         className="d-block mx-auto test">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}

                    {services.map((service, index) =>
                        <Card key={service.id}
                              id={service.id}
                              title={service.title}
                              description={service.description}
                              serviceType={service.assistanceType}
                              postedDate={service.postedDate}
                              userId={service.userId}
                              email={service.email}
                              firstname={service.firstname}
                              lastname={service.lastname}
                              index={service.index}
                              onDelete={deletePostHandler}
                              onEdit={openEditModel}
                              showDelete={true}
                              showEdit={true}
                        />
                    )}
                    {items.map(item=>
                        <ItemCard key={item.id}
                            title={item.title}
                            description={item.description}
                            serviceType={item.assistanceType}
                            postedDate={item.postedDate}
                            userId={item.userId}
                            email={item.email}
                            firstname={item.firstname}
                            lastname={item.lastname}
                        // delete = {() => this.deletePost(service.id)}
                        />
                    )}
                </div>
            </div>
            {editModel}
        </>
    );
}

export default MyPost;
