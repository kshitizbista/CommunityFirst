import React, {useEffect, useState} from "react";
import MyPostSubMenu from "./MyPostSubMenu";
import ItemSubMenu from "./ItemSubMenu";
import { assistanceType } from "./PostCreation";
import { itemType } from "./ItemPostCreation";
import PostApi from "../../api/PostApi";
import ItemPostApi from "../../api/ItemPostApi";
import Auth from "../../services/Auth";
import Card from "../card/Card";
import {Button, Form, Modal, Spinner} from "react-bootstrap";
import {useForm} from "react-hook-form";
import ItemCard from "../card/ItemCard";
import Search from "../../services/Search";


function MyPost() {

    const [services, setServices] = useState([]);
    const [items, setItems] = useState([]);
    const [requestedChecked, setRequestedChecked] = useState(true);
    const [offeredChecked, setOfferedChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const toggleRequested = (checked) => setRequestedChecked(checked);
    const toggleOffered = (checked) => setOfferedChecked(checked);

    //EditModel state
    const {register: registerEditFormServices, handleSubmit: handleEditFormSubmitServices, errors: errorsEditFromServices} = useForm();
    const [showEditModelServices, setShowEditModelServices] = useState(false);

    const {register: registerEditFormItems, handleSubmit: handleEditFormSubmitItems, errors: errorsEditFromItems} = useForm();
    const [showEditModelItems, setShowEditModelItems] = useState(false);

    //DeleteModel sate
    const [showDeleteModelServices, setShowDeleteModelServices] = useState(false);
    const [showDeleteModelItems, setShowDeleteModelItems] = useState(false);

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
            let searchText = Search.getSearchText();
            setLoading(true);
            const itemFilters = data.filter(x => x.indexOf("ITEM") >= 0)
            const helpFilters = data.filter(x => x.indexOf("HELP") >= 0)
            const requestBody = { assistanceTypes: helpFilters }
            const requestBodyItem = { itemTypes: itemFilters }
            const response = await PostApi.getPostByUserIdAndServiceType(parseInt(Auth.getUserId()), requestBody, searchText);
            const responseItem = await ItemPostApi.getPostByUserIdAndItemType(parseInt(Auth.getUserId()), requestBodyItem, searchText);
            setServices(response.data);
            setItems(responseItem.data);
            setLoading(false);
            Search.setSearchText('');
        } catch (e) {
        }
    }

    const deletePostHandlerServices = async (postId) => {
        try {
            await PostApi.deletePost(postId);
            getMyPost(getFilter());
        } catch (e) {

        }
    }

    const deletePostHandlerItems = async (postId) => {
        try {
            await ItemPostApi.deletePost(postId);
            getMyPost(getFilter());
        } catch (e) {

        }
    }

    const updatePostHandlerServices = async (requestBody) => {
        try {
            await PostApi.updatePost(requestBody);
            getMyPost(getFilter());
        } catch (e) {
        }
    }

    const updatePostHandlerItems= async (requestBody) => {
        try {
            await ItemPostApi.updatePost(requestBody);
            getMyPost(getFilter());
        } catch (e) {
        }
    }

    const openEditModelServices =  (postId, title, description) => {
        //open model and set data to form
        setShowEditModelServices(true);
        setPostId(postId);
        setTitle(title);
        setDescription(description);
    }

    const openEditModelItems =  (postId, title, description) => {
        //open model and set data to form
        setShowEditModelItems(true);
        setPostId(postId);
        setTitle(title);
        setDescription(description);
    }

    const openDeleteModelServices = (postId) => {
        setShowDeleteModelServices(true);
        setPostId(postId)
    }

    const openDeleteModelItems = (postId) => {
        setShowDeleteModelItems(true);
        setPostId(postId)
    }

    const resetEditForm = () => {
        setPostId(-1);
        setTitle("");
        setDescription("");
    }


    const editModelServices = (
        <Modal show={showEditModelServices} onHide={() => setShowEditModelServices(false)}>
            <Modal.Header closeButton>
                <Modal.Title className="w-100">
                    <h5 className="text-center">Edit Post</h5>
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleEditFormSubmitServices((data) => {
                updatePostHandlerServices(data);
                resetEditForm();
                setShowEditModelServices(false);
            })}>
                <Modal.Body>
                    <Form.Control type="hidden" name="id" value={postId} ref={registerEditFormServices}></Form.Control>
                    <Form.Group>
                        <Form.Control type="text" name="title" placeholder="Title"
                                      ref={registerEditFormServices({required: true, minLength: 5, maxLength: 70})}
                                      defaultValue={title}/>
                        {errorsEditFromServices.title && errorsEditFromServices.title.type === "required" &&
                        <span className="form-error">Title is required</span>}
                        {errorsEditFromServices.title && (errorsEditFromServices.title.type === "minLength" || errorsEditFromServices.title.type === "maxLength") &&
                        <span className="form-error">Character must be between 5 and 50 </span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" name="description" placeholder="Write something..."
                                      style={{resize: "none"}} rows="6"
                                      ref={registerEditFormServices({required: true})} defaultValue={description}/>
                        {errorsEditFromServices.description && errorsEditFromServices.description.type === "required" &&
                        <span className="form-error">Description is required</span>}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="reset" variant="secondary" onClick={() => {
                        resetEditForm();
                        setShowEditModelServices(false);
                    }}>Cancel</Button>
                    <Button type="submit" variant="primary">Update</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );

    const editModelItems = (
        <Modal show={showEditModelItems} onHide={() => setShowEditModelItems(false)}>
            <Modal.Header closeButton>
                <Modal.Title className="w-100">
                    <h5 className="text-center">Edit Post</h5>
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleEditFormSubmitItems((data) => {
                updatePostHandlerItems(data);
                resetEditForm();
                setShowEditModelItems(false);
            })}>
                <Modal.Body>
                    <Form.Control type="hidden" name="id" value={postId} ref={registerEditFormItems}></Form.Control>
                    <Form.Group>
                        <Form.Control type="text" name="title" placeholder="Title"
                                      ref={registerEditFormItems({required: true, minLength: 5, maxLength: 70})}
                                      defaultValue={title}/>
                        {errorsEditFromItems.title && errorsEditFromItems.title.type === "required" &&
                        <span className="form-error">Title is required</span>}
                        {errorsEditFromItems.title && (errorsEditFromItems.title.type === "minLength" || errorsEditFromItems.title.type === "maxLength") &&
                        <span className="form-error">Character must be between 5 and 50 </span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" name="description" placeholder="Write something..."
                                      style={{resize: "none"}} rows="6"
                                      ref={registerEditFormItems({required: true})} defaultValue={description}/>
                        {errorsEditFromItems.description && errorsEditFromItems.description.type === "required" &&
                        <span className="form-error">Description is required</span>}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="reset" variant="secondary" onClick={() => {
                        resetEditForm();
                        setShowEditModelItems(false);
                    }}>Cancel</Button>
                    <Button type="submit" variant="primary">Update</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );


    const deleteModalServices = (
        <Modal show={showDeleteModelServices} onHide={() => setShowDeleteModelServices(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger" variant="primary" onClick={() => {
                    deletePostHandlerServices(postId);
                    setShowDeleteModelServices(false);
                    resetEditForm();
                }}>Delete</Button>
                <Button variant="secondary" onClick={() => setShowDeleteModelServices(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
    const deleteModalItems = (
        <Modal show={showDeleteModelItems} onHide={() => setShowDeleteModelItems(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger" variant="primary" onClick={() => {
                    deletePostHandlerItems(postId);
                    setShowDeleteModelItems(false);
                    resetEditForm();
                }}>Delete</Button>
                <Button variant="secondary" onClick={() => setShowDeleteModelItems(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

    if(Search.getSearchText()) {
            getMyPost(getFilter());
            Search.setSearchText('');
    }
    return (
        <>
            <MyPostSubMenu onServiceCheckBoxClick={toggleRequested}
                onItemCheckBoxClick={toggleOffered} />


            <div className="row justify-content-center">
                <div className="col-10" style={{overflow:"scroll", height: "80vh"}}>
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
                              onDelete={openDeleteModelServices}
                              onEdit={openEditModelServices}
                              showDelete={true}
                              showEdit={true}
                        />
                    )}

                    {items.map(item=>
                        <ItemCard
                            key={item.id}
                            id ={item.id}
                            title={item.title}
                            description={item.description}
                            serviceType={item.assistanceType}
                            postedDate={item.postedDate}
                            userId={item.userId}
                            email={item.email}
                            firstname={item.firstname}
                            lastname={item.lastname}
                            onDelete={openDeleteModelItems}
                            onEdit={openEditModelItems}
                            showDelete={true}
                            showEdit={true}
                        />
                        )
                    }

                </div>
            </div>
            {editModelServices}
            {editModelItems}
            {deleteModalServices}
            {deleteModalItems}
        </>
    );
}

export default MyPost;
